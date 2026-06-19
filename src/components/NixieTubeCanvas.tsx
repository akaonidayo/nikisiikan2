import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { NIXIE_DIGIT_PATHS, getCathodeDepth } from "./NixiePaths";
import { audio } from "./AudioEngine";

interface NixieTubeCanvasProps {
  powerOn: boolean;
  glowColor: "classic" | "mercury" | "radioactive";
  exaggerateDepth: number;
  showGrid: boolean;
  timeMode: "local" | "utc";
  format12: boolean;
  flickerDegree: number;
  runCpp: boolean;
  dofEnabled: boolean;
  soundEnabled: boolean;
  onFpsUpdate?: (fps: number) => void;
  onTubeClick?: () => void;
  onBackgroundClick?: () => void;
}

// Map color choices to hex values
const GLOW_COLOR_MAP = {
  classic: {
    core: 0xfff3e0,        // white-hot center core
    sheath: 0xff3b00,      // primary neon discharge orange
    aura: 0xff2200,        // wide gas glowing haze
    ambient: 0xff4c00,     // reflection point light
    trace: 0x4d55ff        // Russian helper mercury vapor spot (blue)
  },
  mercury: {
    core: 0xe0f7ff,
    sheath: 0x0088ff,
    aura: 0x004cff,
    ambient: 0x00a2ff,
    trace: 0xff6200
  },
  radioactive: {
    core: 0xf0fff0,
    sheath: 0x00ff44,
    aura: 0x00cc11,
    ambient: 0x11ff22,
    trace: 0xff8800
  }
};

export const NixieTubeCanvas: React.FC<NixieTubeCanvasProps> = ({
  powerOn,
  glowColor,
  exaggerateDepth,
  showGrid,
  timeMode,
  format12,
  flickerDegree,
  runCpp,
  dofEnabled,
  soundEnabled,
  onFpsUpdate,
  onTubeClick,
  onBackgroundClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Keep latest configuration in refs to access inside the requestAnimationFrame loop
  const pOnRef = useRef(powerOn);
  const colorRef = useRef(glowColor);
  const depthRef = useRef(exaggerateDepth);
  const gridRef = useRef(showGrid);
  const format12Ref = useRef(format12);
  const timeModeRef = useRef(timeMode);
  const flickerRef = useRef(flickerDegree);
  const cppRef = useRef(runCpp);
  const soundRef = useRef(soundEnabled);
  const clickTubesRef = useRef(onTubeClick);
  const clickBgRef = useRef(onBackgroundClick);

  useEffect(() => { pOnRef.current = powerOn; }, [powerOn]);
  useEffect(() => { colorRef.current = glowColor; }, [glowColor]);
  useEffect(() => { depthRef.current = exaggerateDepth; }, [exaggerateDepth]);
  useEffect(() => { gridRef.current = showGrid; }, [showGrid]);
  useEffect(() => { format12Ref.current = format12; }, [format12]);
  useEffect(() => { timeModeRef.current = timeMode; }, [timeMode]);
  useEffect(() => { flickerRef.current = flickerDegree; }, [flickerDegree]);
  useEffect(() => { cppRef.current = runCpp; }, [runCpp]);
  useEffect(() => { soundRef.current = soundEnabled; }, [soundEnabled]);
  useEffect(() => { clickTubesRef.current = onTubeClick; }, [onTubeClick]);
  useEffect(() => { clickBgRef.current = onBackgroundClick; }, [onBackgroundClick]);

  // Current values displaying per tube digit
  const currentDigitsRef = useRef<number[]>([0, 0, 0, 0, 0, 0]); // h1, h2, m1, m2, s1, s2
  const currentColonRef = useRef<boolean>(true);

  // Mouse interaction state (Orbit-like camera tilting)
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const cameraRotationRef = useRef({ x: 0.25, y: 0.1 }); // Tilt back dynamically
  const targetRotationRef = useRef({ x: 0.25, y: 0.1 });

  // Custom visual indicator states (gas ionisation delays)
  // Store brightness level per filament to do beautiful transitions (0.0=off, 1.0=fully on)
  const filamentIntensityRef = useRef<number[][]>(
    Array(6).fill(null).map(() => Array(10).fill(0.0))
  );

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Initialise WebGL WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      precision: "highp"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // 2. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060504); // Laboratory/Cozy Dark Workspace atmosphere
    scene.fog = new THREE.FogExp2(0x060504, 0.04);

    // 3. Camera setup
    const aspect = width / height;
    // Base FOV. Increase it significantly for mobile/portrait aspects to prevent cropping
    const baseFov = 36;
    const fov = aspect < 1.0 ? baseFov * (1.0 / aspect) * 0.85 : baseFov;
    const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 50);
    camera.position.set(0, 1.4, 7.8); // perfect desk viewing angle

    // 4. Lights
    // Dim atmospheric room background light
    const ambientLight = new THREE.AmbientLight(0x1a120d, 0.6);
    scene.add(ambientLight);

    // Warm overhead direct desk spotlight (projects wood desk details)
    const shadowLight = new THREE.DirectionalLight(0xfff5ea, 1.25);
    shadowLight.position.set(-3, 6, 4);
    shadowLight.castShadow = true;
    shadowLight.shadow.mapSize.width = 1024;
    shadowLight.shadow.mapSize.height = 1024;
    shadowLight.shadow.bias = -0.0005;
    shadowLight.shadow.radius = 4;
    scene.add(shadowLight);

    // Subtle dark blue fill light from below for realistic ambient bounce
    const fillLight = new THREE.DirectionalLight(0x111c2e, 0.45);
    fillLight.position.set(2, -4, -1);
    scene.add(fillLight);

    // Dynamic light array for warm glowing digit reflections onto the wooden board
    const tubeGlowLights: THREE.PointLight[] = [];
    const tubeLightPositions = [
      -3.4, // H1
      -2.2, // H2
      -0.6, // M1
      0.6,  // M2
      2.2,  // S1
      3.4   // S2
    ];

    tubeLightPositions.forEach((x) => {
      // Light is hovering just in front of base sockets, projecting downwards onto chassis
      const pLight = new THREE.PointLight(0xff5500, 0, 3.5, 1.8);
      pLight.position.set(x, -0.2, 0.4);
      scene.add(pLight);
      tubeGlowLights.push(pLight);
    });

    // Shared brass golden material for bezels, sockets, rivets
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xc4a15a, // Shiny brass
      roughness: 0.25,
      metalness: 0.9,
    });

    // 5. Procedurally Crafted Wooden Cabinet with Metal Panels
    const createWoodChassis = () => {
      const chassisGroup = new THREE.Group();

      // Large Walnut wooden board
      const boardGeo = new THREE.BoxGeometry(8.4, 0.5, 2.4);
      const boardMat = new THREE.MeshStandardMaterial({
        color: 0x25160d, // Dark walnut brown
        roughness: 0.35,
        metalness: 0.05,
      });
      const boardMesh = new THREE.Mesh(boardGeo, boardMat);
      boardMesh.position.set(0, -0.45, 0);
      boardMesh.receiveShadow = true;
      boardMesh.castShadow = true;
      chassisGroup.add(boardMesh);

      // Polished dark bronze mechanical top plating
      const topPlateGeo = new THREE.BoxGeometry(8.2, 0.04, 2.2);
      const topPlateMat = new THREE.MeshStandardMaterial({
        color: 0x14100c, // Deep gunmetal/bronze
        roughness: 0.18,
        metalness: 0.95,
      });
      const topPlateMesh = new THREE.Mesh(topPlateGeo, topPlateMat);
      topPlateMesh.position.set(0, -0.18, 0);
      topPlateMesh.receiveShadow = true;
      topPlateMesh.castShadow = true;
      chassisGroup.add(topPlateMesh);

      // Add small vintage brass corner brackets with golden rivets
      const rivetGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 8);

      const plateCorners = [
        [-4.0, 1.0], [4.0, 1.0],
        [-4.0, -1.0], [4.0, -1.0]
      ];
      plateCorners.forEach(([cx, cz]) => {
        const rivet = new THREE.Mesh(rivetGeo, metalMat);
        rivet.position.set(cx, -0.15, cz);
        chassisGroup.add(rivet);
      });

      // Vintage bronze manufacturing stamp / logo plate in the center desk
      const logoPlateGeo = new THREE.BoxGeometry(0.6, 0.02, 0.22);
      const logoPlate = new THREE.Mesh(logoPlateGeo, metalMat);
      logoPlate.position.set(0, -0.17, 1.0);
      logoPlate.receiveShadow = true;
      chassisGroup.add(logoPlate);

      scene.add(chassisGroup);
    };

    createWoodChassis();

    // 6. Tube Model structures
    // Storage of digit tube objects to animate their emissive glow
    const tubesList: Array<{
      group: THREE.Group;
      digitMeshes: Array<{
        coreMesh: THREE.Mesh | THREE.Line;
        subCores: THREE.Mesh[];
        subSheaths: THREE.Mesh[];
        glowMesh: THREE.Mesh;
        index: number;
        pathsCount: number;
      }>;
    }> = [];

    // Glass envelope template via LatheGeometry (pinched bottom, beautiful thick rounded top)
    const glassPoints: THREE.Vector2[] = [];
    const tubeRadius = 0.44;
    const tubeHeight = 1.7;

    // Build perfect curved glass jar profile
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const y = -0.18 + t * tubeHeight; // height range
      let r = tubeRadius;

      if (t > 0.85) {
        // Curve inward at the top dome
        const domePct = (t - 0.85) / 0.15; // [0, 1]
        r = tubeRadius * Math.cos(domePct * Math.PI * 0.48);
      } else if (t < 0.08) {
        // Pinch base slightly for mount bezel
        const pinchPct = t / 0.08;
        r = tubeRadius * (0.94 + pinchPct * 0.06);
      }
      glassPoints.push(new THREE.Vector2(r, y - 0.7)); // centered Z axis
    }

    const latheGlassGeo = new THREE.LatheGeometry(glassPoints, 32);

    // Highly premium Physical Borosilicate Glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.06,
      transmission: 0.98,       // extremely high visual transparency
      ior: 1.52,                // optical glass refractive index
      thickness: 0.45,          // increased physical thickness for gorgeous edge distortion
      specularIntensity: 2.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      attenuationColor: new THREE.Color(0xeef2ff),
      attenuationDistance: 1.5,
      transparent: true,
      depthWrite: false,        // prevent clipping behind back faces
      side: THREE.BackSide      // BackSide rendering for better transmission layering inside the tube
    });

    // Dark base mesh materials
    const blackBakeliteMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.42,
      metalness: 0.15,
    });

    const createNixieTube = (xOffset: number): any => {
      const tubeGroup = new THREE.Group();
      tubeGroup.position.set(xOffset, 0.48, 0);

      // Authentic IN-18 thick Reddish-Brown Bakelite Base Socket
      const socketGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.28, 32);
      const bakeliteBaseMat = new THREE.MeshStandardMaterial({
        color: 0x221310, // dark reddish-brown phenolic bakelite
        roughness: 0.7,
        metalness: 0.05,
      });
      const socketMesh = new THREE.Mesh(socketGeo, bakeliteBaseMat);
      socketMesh.position.set(0, -0.6, 0);
      socketMesh.castShadow = true;
      socketMesh.receiveShadow = true;
      socketMesh.userData.isTube = true;
      tubeGroup.add(socketMesh);

      // Metal socket pin ring
      const pinColGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.04, 32);
      const pinColMesh = new THREE.Mesh(pinColGeo, metalMat);
      pinColMesh.position.set(0, -0.74, 0);
      pinColMesh.userData.isTube = true;
      tubeGroup.add(pinColMesh);

      // Base internal black spacer plug
      const plugGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.08, 24);
      const plugMesh = new THREE.Mesh(plugGeo, blackBakeliteMat);
      plugMesh.position.set(0, -0.42, 0);
      plugMesh.userData.isTube = true;
      tubeGroup.add(plugMesh);

      // Glass Envelope bottle
      const glassMesh = new THREE.Mesh(latheGlassGeo, glassMaterial);
      glassMesh.position.set(0, 0, 0);
      // Ensure the glass bottle renders after transparent glows to create true refracted haloing
      glassMesh.renderOrder = 10; 
      glassMesh.userData.isTube = true;
      tubeGroup.add(glassMesh);

      // Double helix anode woven grid mesh cage cylinder
      const cageGroup = new THREE.Group();
      if (showGrid) {
        const gridGeoLeft = new THREE.CylinderGeometry(0.39, 0.39, 1.32, 28, 24, true);
        const gridMatLeft = new THREE.MeshStandardMaterial({
          color: 0x3d3532,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
          metalness: 1.0,
          roughness: 0.4,
        });
        const gridLeft = new THREE.Mesh(gridGeoLeft, gridMatLeft);
        gridLeft.position.set(0, 0.12, 0);
        gridLeft.rotation.y = 0.25;
        gridLeft.userData.isTube = true;
        cageGroup.add(gridLeft);

        const gridGeoRight = new THREE.CylinderGeometry(0.388, 0.388, 1.32, 28, 24, true);
        const gridMatRight = new THREE.MeshStandardMaterial({
          color: 0x3d3532,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
          metalness: 1.0,
          roughness: 0.4,
        });
        const gridRight = new THREE.Mesh(gridGeoRight, gridMatRight);
        gridRight.position.set(0, 0.12, 0);
        gridRight.rotation.y = -0.25;
        gridRight.userData.isTube = true;
        cageGroup.add(gridRight);

        // Ceramic/Mica dark backplate shield inside the anode cage
        // sit behind the active filament stack to amplify reflection depth
        const shieldMat = new THREE.MeshStandardMaterial({
          color: 0x1d1815, 
          roughness: 0.8,
          metalness: 0.15,
          side: THREE.DoubleSide
        });
        const shieldGeo = new THREE.CylinderGeometry(0.37, 0.37, 1.1, 12, 1, true, Math.PI * 0.55, Math.PI * 0.9);
        const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
        shieldMesh.position.set(0, 0.12, -0.06); 
        cageGroup.add(shieldMesh);

        // Dark oxide grid metal support rails standing inside
        const rodGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.34, 6);
        const rodMat = new THREE.MeshStandardMaterial({ color: 0x24201c, metalness: 0.9 });
        const rod1 = new THREE.Mesh(rodGeo, rodMat);
        rod1.position.set(-0.35, 0.12, -0.15);
        const rod2 = new THREE.Mesh(rodGeo, rodMat);
        rod2.position.set(0.35, 0.12, -0.15);
        cageGroup.add(rod1, rod2);
      }
      tubeGroup.add(cageGroup);

      // --- Authenticity Enhancements ---
      // 1. Double Mica Spacer Disk units
      const micaMat = new THREE.MeshStandardMaterial({
        color: 0x241d1a, // Rich dark mica slate
        roughness: 0.8,
        metalness: 0.1,
        transparent: true,
        opacity: 0.92,
      });
      const micaGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.012, 18);
      
      // Top Spacer
      const topMica = new THREE.Mesh(micaGeo, micaMat);
      topMica.position.set(0, 0.76, 0);
      tubeGroup.add(topMica);

      // Bottom Spacer
      const bottomMica = new THREE.Mesh(micaGeo, micaMat);
      bottomMica.position.set(0, -0.36, 0);
      tubeGroup.add(bottomMica);

      // 2. Getter Ring atop the dome (gorgeous chrome ring)
      const getterMat = new THREE.MeshStandardMaterial({
        color: 0xcecece,
        roughness: 0.15,
        metalness: 1.0,
      });
      const getterGeo = new THREE.TorusGeometry(0.12, 0.012, 8, 16);
      const getterRing = new THREE.Mesh(getterGeo, getterMat);
      getterRing.position.set(0, 0.82, 0);
      getterRing.rotation.set(0.12, 0.18, 0);
      tubeGroup.add(getterRing);

      // 3. Intricate Bottom Stem Support Wire mesh
      const stemWireMat = new THREE.MeshStandardMaterial({
        color: 0x3e3632,
        roughness: 0.5,
        metalness: 0.9,
      });
      const stemWireGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.12, 6);
      for (let i = 0; i < 11; i++) {
        const pinAngle = (i / 11) * Math.PI * 2;
        const pinRadius = 0.28;
        const pinWire = new THREE.Mesh(stemWireGeo, stemWireMat);
        pinWire.position.set(Math.cos(pinAngle) * pinRadius, -0.41, Math.sin(pinAngle) * pinRadius);
        tubeGroup.add(pinWire);
      }

      // Dynamic collection of 10 cathode meshes inside this tube
      const digitMeshes: any[] = [];

      for (let digit = 0; digit <= 9; digit++) {
        const digitGroup = new THREE.Group();
        
        // Offset each digit along the Z axis to illustrate physical stacking depth inside
        const baseZ = getCathodeDepth(digit, exaggerateDepth);
        digitGroup.position.set(0, 0.1, baseZ);
        // Scale down the digitized filaments to ensure they fit completely inside the cathode grid/glass bottle constraints
        digitGroup.scale.set(0.72, 0.72, 0.72);

        const paths = NIXIE_DIGIT_PATHS[digit] || [];
        const subCores: THREE.Mesh[] = [];
        const subSheaths: THREE.Mesh[] = [];

        // Build elegant 3D tube geometries for every segment of the digit
        paths.forEach((pathPoints) => {
          if (pathPoints.length < 2) return;
          const vectors = pathPoints.map(p => new THREE.Vector3(p.x, p.y, p.z));
          const curve = new THREE.CatmullRomCurve3(vectors);
          
          // Outer sheath (Neon corona gas glow volume)
          const sheathGeo = new THREE.TubeGeometry(curve, 32, 0.045, 6, false);
          const sheathMat = new THREE.MeshBasicMaterial({
            color: 0xff3c00,
            transparent: true,
            opacity: 0.0, // animated in loop
            blending: THREE.AdditiveBlending,
            depthWrite: false
          });
          const sheathMesh = new THREE.Mesh(sheathGeo, sheathMat);
          digitGroup.add(sheathMesh);
          subSheaths.push(sheathMesh);

          // Inner core wire (metal cathode filament itself)
          const coreGeo = new THREE.TubeGeometry(curve, 32, 0.012, 6, false);
          const coreMat = new THREE.MeshStandardMaterial({
            color: 0x221f1d, // steel/dark oxide looking when turned off
            roughness: 0.4,
            metalness: 0.95,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 0.0
          });
          const coreMesh = new THREE.Mesh(coreGeo, coreMat);
          digitGroup.add(coreMesh);
          subCores.push(coreMesh);
        });

        // Add a beautiful custom glowing billboard behind the active digit to boost blooming depth
        // Creating a subtle soft radial lens glow sprite
        const glowTexGeo = new THREE.PlaneGeometry(0.8, 1.4);
        const canvasGlow = document.createElement("canvas");
        canvasGlow.width = 128;
        canvasGlow.height = 128;
        const ctxGlow = canvasGlow.getContext("2d");
        if (ctxGlow) {
          const grad = ctxGlow.createRadialGradient(64, 64, 4, 64, 64, 60);
          grad.addColorStop(0, "rgba(255, 80, 5, 0.7)");
          grad.addColorStop(0.3, "rgba(255, 50, 0, 0.25)");
          grad.addColorStop(1, "rgba(255, 0, 0, 0)");
          ctxGlow.fillStyle = grad;
          ctxGlow.fillRect(0, 0, 128, 128);
        }
        const glowTexture = new THREE.CanvasTexture(canvasGlow);
        const glowTexMat = new THREE.MeshBasicMaterial({
          map: glowTexture,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          opacity: 0.0
        });
        const glowMesh = new THREE.Mesh(glowTexGeo, glowTexMat);
        glowMesh.position.set(0, 0, -0.05); // slightly behind cathode
        digitGroup.add(glowMesh);

        tubeGroup.add(digitGroup);

        // Store references to animate them individually
        digitMeshes.push({
          coreMesh: subCores[0], // simple access or arrays
          subCores,
          subSheaths,
          glowMesh,
          index: digit,
          pathsCount: paths.length
        });
      }

      // Add a tiny glowing violet/blue trace background spot (Russian mercury helper discharge)
      const traceGeo = new THREE.SphereGeometry(0.024, 8, 8);
      const traceMat = new THREE.MeshBasicMaterial({
        color: 0x444dff,
        transparent: true,
        opacity: 0.005, // static mercury trace glow when power is on
      });
      const traceMesh = new THREE.Mesh(traceGeo, traceMat);
      traceMesh.position.set(0.08, -0.38, 0.22);
      tubeGroup.add(traceMesh);

      scene.add(tubeGroup);
      tubesList.push({ group: tubeGroup, digitMeshes });
    };

    // Instantiate 6 structural tubes
    const tubeSpacingX = [
      -3.5, // Hour Tens (H1)
      -2.3, // Hour Units (H2)
      -0.6, // Minute Tens (M1)
       0.6, // Minute Units (M2)
       2.3, // Second Tens (S1)
       3.5  // Second Units (S2)
    ];

    tubeSpacingX.forEach((xPos) => {
      createNixieTube(xPos);
    });

    // 7. Render Colon indicator lamps (INS-1 dual colon towers)
    const colonsList: Array<{
      dots: THREE.Mesh[];
      sheaths: THREE.Mesh[];
    }> = [];

    const createColonBulb = (xPos: number) => {
      const bulbGroup = new THREE.Group();
      bulbGroup.position.set(xPos, 0.48, 0);

      // Brass base mount
      const bsGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.1, 16);
      const bsMesh = new THREE.Mesh(bsGeo, metalMat);
      bsMesh.position.set(0, -0.5, 0);
      bulbGroup.add(bsMesh);

      // Glass rod bottle
      const glPoints: THREE.Vector2[] = [];
      const colRad = 0.1;
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const cy = -0.3 + t * 1.1;
        let r = colRad;
        if (t > 0.8) r = colRad * Math.cos(((t - 0.8) / 0.2) * Math.PI * 0.48);
        glPoints.push(new THREE.Vector2(r, cy - 0.2));
      }
      const glLatheGeo = new THREE.LatheGeometry(glPoints, 16);
      const glMesh = new THREE.Mesh(glLatheGeo, glassMaterial);
      glMesh.renderOrder = 10;
      bulbGroup.add(glMesh);

      // Inside floating circular dots (two filaments representing colon)
      const dotGeo = new THREE.SphereGeometry(0.035, 12, 12);
      const dotSheathGeo = new THREE.SphereGeometry(0.075, 12, 12);

      const dotHeights = [-0.1, 0.3];
      const dots: THREE.Mesh[] = [];
      const sheaths: THREE.Mesh[] = [];

      dotHeights.forEach((dy) => {
        // Inner core
        const dCoreMat = new THREE.MeshStandardMaterial({
          color: 0x221f1d,
          roughness: 0.1,
          metalness: 0.9,
          emissiveIntensity: 0
        });
        const dMesh = new THREE.Mesh(dotGeo, dCoreMat);
        dMesh.position.set(0, dy, 0);
        bulbGroup.add(dMesh);
        dots.push(dMesh);

        // Volumetric aura sheath
        const sMat = new THREE.MeshBasicMaterial({
          color: 0xff3b00,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const sMesh = new THREE.Mesh(dotSheathGeo, sMat);
        sMesh.position.set(0, dy, 0);
        bulbGroup.add(sMesh);
        sheaths.push(sMesh);
      });

      scene.add(bulbGroup);
      colonsList.push({ dots, sheaths });
    };

    // Instantiate two dual-neon towers
    createColonBulb(-1.45);
    createColonBulb(1.45);

    // 8. Animation and time updater loop
    let lastTime = 0;
    let clockTimer = 0;
    let lastSecondVal = -1;
    let framesCount = 0;
    let lastFpsUpdate = 0;

    // Fast cpp sequence tracker
    let cppSweepTimer = 0;
    let cppActiveDigit = 0;

    const tick = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      clockTimer += delta;

      // FPS tracking reporting
      framesCount++;
      if (now - lastFpsUpdate >= 1000) {
        if (onFpsUpdate) onFpsUpdate(Math.round((framesCount * 1000) / (now - lastFpsUpdate)));
        framesCount = 0;
        lastFpsUpdate = now;
      }

      // Static camera fix to prevent any rotation as requested
      targetRotationRef.current.y = 0.0;
      targetRotationRef.current.x = 0.15; // fixed tilt
      
      // Interpolate with decay
      cameraRotationRef.current.y += (targetRotationRef.current.y - cameraRotationRef.current.y) * 0.08;
      cameraRotationRef.current.x += (targetRotationRef.current.x - cameraRotationRef.current.x) * 0.08;

      // Calculate camera placement on a spherical orbit
      const distance = 7.1;
      const rotY = cameraRotationRef.current.y;
      const rotX = cameraRotationRef.current.x;

      camera.position.x = distance * Math.sin(rotY) * Math.cos(rotX);
      camera.position.z = distance * Math.cos(rotY) * Math.cos(rotX);
      camera.position.y = distance * Math.sin(rotX) + 0.4;
      camera.lookAt(new THREE.Vector3(0, 0.4, 0));

      // Calculate time vectors
      const date = new Date();
      let hrs = timeModeRef.current === "utc" ? date.getUTCHours() : date.getHours();
      let mins = timeModeRef.current === "utc" ? date.getUTCMinutes() : date.getMinutes();
      let secs = timeModeRef.current === "utc" ? date.getUTCSeconds() : date.getSeconds();
      let ms = date.getMilliseconds();

      // Handle 12 hours format
      if (format12Ref.current) {
        hrs = hrs % 12;
        if (hrs === 0) hrs = 12;
      }

      // Update seconds colon blinking towers (blinks once per second)
      const colonOn = pOnRef.current && ms < 500;
      currentColonRef.current = colonOn;

      // Extract target digits based on current mode
      let tDigits = [
        Math.floor(hrs / 10),
        hrs % 10,
        Math.floor(mins / 10),
        mins % 10,
        Math.floor(secs / 10),
        secs % 10
      ];

      // Cathode Poisoning Preventer (CPP) sweep override
      if (cppRef.current) {
        cppSweepTimer += delta;
        if (cppSweepTimer > 0.06) { // Cycle through digits rapidly (ambient diagnostic / shuffle)
          cppSweepTimer = 0;
          cppActiveDigit = (cppActiveDigit + 1) % 10;
        }
        tDigits = [
          (cppActiveDigit + 2) % 10,
          (cppActiveDigit + 7) % 10,
          (cppActiveDigit + 4) % 10,
          (cppActiveDigit + 9) % 10,
          (cppActiveDigit + 1) % 10,
          (cppActiveDigit + 6) % 10
        ];
      }

      // Play click sounds and spark sputters
      if (pOnRef.current && !cppRef.current) {
        if (secs !== lastSecondVal) {
          lastSecondVal = secs;
          if (soundRef.current) {
            audio.playRelayTick();
            // Tiny sputter crackle when minute changes too
            if (secs === 0) {
              audio.playPowerSputter();
            }
          }
        }
      }

      // Compute visual colors based on user color selection
      const activePalette = GLOW_COLOR_MAP[colorRef.current] || GLOW_COLOR_MAP.classic;

      // Update neon colons rendering
      colonsList.forEach((colGroup) => {
        colGroup.dots.forEach((dot, dotIdx) => {
          const m = dot.material as THREE.MeshStandardMaterial;
          const s = colGroup.sheaths[dotIdx].material as THREE.MeshBasicMaterial;

          if (colonOn) {
            // Ionized active dot glow
            m.color.setHex(activePalette.core);
            m.emissive.setHex(activePalette.sheath);
            m.emissiveIntensity = 8.0;

            // Animate transparent neon aura
            s.color.setHex(activePalette.sheath);
            // Dynamic gas flutter micro oscillations
            const blinkFlicker = 0.85 + Math.sin(now * 0.05 + dotIdx * 5.0) * 0.15;
            s.opacity = 0.5 * blinkFlicker;
          } else {
            // Extinguished steel sphere
            m.color.setHex(0x221f1d);
            m.emissive.setHex(0x000000);
            m.emissiveIntensity = 0;
            s.opacity = 0;
          }
        });
      });

      // Animate digit filaments inside the tubes (with individual flicker, depth changes and startup sputter)
      for (let tIdx = 0; tIdx < 6; tIdx++) {
        const activeDigitVal = tDigits[tIdx];
        const tube = tubesList[tIdx];
        let hasLitFilament = false;

        tube.digitMeshes.forEach((meshInfo) => {
          const digit = meshInfo.index;
          let targetInt = 0.0;

          // Adjust Z spacing dynamically
          meshInfo.subCores.forEach((cMesh) => {
            const digitGroup = cMesh.parent;
            if (digitGroup) {
              digitGroup.position.z = getCathodeDepth(digit, depthRef.current);
            }
          });

          if (pOnRef.current && digit === activeDigitVal) {
            targetInt = 1.0;
            hasLitFilament = true;
          }

          // Smooth intensity transitions (emulates ionization response curves)
          const currentInst = filamentIntensityRef.current[tIdx][digit];
          const attackSpeed = 16.0;   // rapid gas ionization
          const decaySpeed = 7.0;    // slower metallic cool-off glow decay
          let newInst = currentInst;

          if (targetInt > currentInst) {
            newInst += (targetInt - currentInst) * attackSpeed * delta;
            if (newInst > 1.0) newInst = 1.0;
          } else {
            newInst += (targetInt - currentInst) * decaySpeed * delta;
            if (newInst < 0.0) newInst = 0.0;
          }
          filamentIntensityRef.current[tIdx][digit] = newInst;

          // Animate material properties based on current visual intensity
          const animInt = filamentIntensityRef.current[tIdx][digit];

          // Set materials properties
          meshInfo.subCores.forEach((coreMesh: THREE.Mesh) => {
            const mat = coreMesh.material as THREE.MeshStandardMaterial;
            if (animInt > 0.02) {
              // Gas ionization flutter - high frequency electric jitter
              let instFlick = 1.0;
              if (flickerRef.current > 0.01) {
                const fFreq = now * 0.06;
                const noiseFlick = Math.sin(fFreq + tIdx * 12) * Math.sin(fFreq * 0.43) * Math.cos(fFreq * 1.83 + digit);
                instFlick = 1.0 - Math.abs(noiseFlick) * flickerRef.current * 0.42;
              }

              // Set white-hot active core properties
              mat.color.lerpColors(new THREE.Color(0x302923), new THREE.Color(activePalette.core), Math.pow(animInt, 3));
              mat.emissive.setHex(activePalette.sheath);
              mat.emissiveIntensity = 8.0 * animInt * instFlick;
            } else {
              // Idle steel cathode filament color
              mat.color.setHex(0x191410);
              mat.emissive.setHex(0x000000);
              mat.emissiveIntensity = 0.0;
            }
          });

          // Volumes / halos sheath opacity matching the filament intensity
          meshInfo.subSheaths.forEach((sheathMesh: THREE.Mesh) => {
            const mat = sheathMesh.material as THREE.MeshBasicMaterial;
            mat.color.setHex(activePalette.sheath);
            // Simulate the glowing discharge halo expander
            const sFlick = 0.95 + Math.sin(now * 0.041 + tIdx * 10) * 0.05 * flickerRef.current;
            mat.opacity = 0.85 * Math.pow(animInt, 2) * sFlick;
          });

          // Billboard glow card background plane
          const glowMat = meshInfo.glowMesh.material as THREE.MeshBasicMaterial;
          glowMat.color.setHex(activePalette.aura);
          glowMat.opacity = 0.75 * animInt;
        });

        // Control the dynamic point light below this tube for desk glow
        const light = tubeGlowLights[tIdx];
        if (pOnRef.current && hasLitFilament) {
          light.color.setHex(activePalette.ambient);
          // Realistic high intensity desk illumination drift
          const randomLfo = 0.9 + Math.sin(now * 0.03 + tIdx * 7) * 0.1 * flickerRef.current;
          light.intensity = 4.5 * randomLfo;
        } else {
          light.intensity = 0.0;
        }
      }

      // Render actual Frame scene
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    const animReq = requestAnimationFrame(tick);

    // Initialise hum background noise
    if (powerOn && soundEnabled) {
      audio.startTransformerHum();
    }

    // 9. Interactive Pointer Drag/Orbit Logic (Removed as requested to stop rotation)
    // Dynamic resize handler
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      const newAspect = w / h;
      camera.aspect = newAspect;
      
      const newFov = newAspect < 1.0 ? baseFov * (1.0 / newAspect) * 0.85 : baseFov;
      camera.fov = newFov;
      
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (e: MouseEvent) => {
      const el = canvasRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check intersect
      let clickedTube = false;
      const intersects = raycaster.intersectObjects(scene.children, true);
      for (const hit of intersects) {
        if (hit.object.userData?.isTube) {
          clickedTube = true;
          break;
        }
      }

      if (clickedTube) {
        if (clickTubesRef.current) clickTubesRef.current();
      } else {
        if (clickBgRef.current) clickBgRef.current();
      }
    };
    
    if (canvasRef.current) {
      canvasRef.current.addEventListener("click", handleCanvasClick);
    }

    // 10. CLEANUP MOUNT
    return () => {
      cancelAnimationFrame(animReq);
      resizeObserver.disconnect();
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("click", handleCanvasClick);
      }
      renderer.dispose();
    };
  }, []); // single init mount

  // Watch for sound/power changes to trigger the actual persistent background transformer hum
  useEffect(() => {
    if (powerOn && soundEnabled) {
      audio.startTransformerHum();
    } else {
      audio.stopTransformerHum();
    }
  }, [powerOn, soundEnabled]);

  return (
    <div className="relative w-full h-full select-none" ref={containerRef} id="canvas-container">
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" id="webgl-canvas" />
      
      {/* Cinematic Vignette Overlay providing Depth of Field visual blurring and vintage lens coloring */}
      <div 
        id="camera-vignette-fx"
        className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
          dofEnabled 
            ? "bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,5,4,0.72)_100%)] shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" 
            : "bg-[radial-gradient(circle_at_center,transparent_60%,rgba(6,5,4,0.4)_100%)]"
        }`}
      />
      
      {/* High-quality screen scanning bloom lines simulating real retro oscilloscope/CRT phosphor glow */}
      {powerOn && (
        <div 
          id="crt-flare"
          className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]"
        />
      )}
    </div>
  );
};
