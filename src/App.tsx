import { useState, useEffect, useRef } from "react";
import { NixieTubeCanvas } from "./components/NixieTubeCanvas";
import { audio } from "./components/AudioEngine";
import { 
  Power, 
  Volume2, 
  VolumeX, 
  Cpu, 
  Zap, 
  Eye, 
  Clock, 
  Layers, 
  Compass, 
  Database,
  Activity,
  Gauge,
  Sliders
} from "lucide-react";

export default function App() {
  // State variables synchronized with user preferences of the physical hardware console
  const [powerOn, setPowerOn] = useState<boolean>(true);
  const [glowColor, setGlowColor] = useState<"classic" | "mercury" | "radioactive">("classic");
  const [exaggerateDepth, setExaggerateDepth] = useState<number>(1.2);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [timeMode, setTimeMode] = useState<"local" | "utc">("local");
  const [format12, setFormat12] = useState<boolean>(false);
  const [flickerDegree, setFlickerDegree] = useState<number>(0.15);
  const [dofEnabled, setDofEnabled] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Settings visibility toggle (tapping empty space)
  const [showSettings, setShowSettings] = useState<boolean>(true);

  // Filament shuffle / scramble state indicator
  const [shufflingActive, setShufflingActive] = useState<boolean>(false);
  
  // Volume controls
  const [clickVolume, setClickVolume] = useState<number>(50);
  const [humVolume, setHumVolume] = useState<number>(30);

  // FPS ticker
  const [fps, setFps] = useState<number>(60);

  // Auxiliary variables for Nixie Cathode Poisoning Prevention (CPP) sweep routine test state
  const [runCpp, setRunCpp] = useState<boolean>(false);

  const shfRef = useRef({ powerOn, runCpp, shufflingActive });

  useEffect(() => {
    shfRef.current = { powerOn, runCpp, shufflingActive };
  }, [powerOn, runCpp, shufflingActive]);

  // Live telemetry mock simulation states
  const [unixMs, setUnixMs] = useState<number>(Date.now());
  const [tempEstimate, setTempEstimate] = useState<number>(318.4);
  const [sputterRate, setSputterRate] = useState<number>(0.142);
  const [vacuumTorr, setVacuumTorr] = useState<number>(15.2);

  // Time ticks
  useEffect(() => {
    const mainTimer = setInterval(() => {
      setUnixMs(Date.now());
      // Add subtle noise fluctuations to simulate high-voltage vacuum sensor drift
      if (powerOn && !runCpp) {
        setTempEstimate(prev => parseFloat((prev + (Math.random() - 0.5) * 0.12).toFixed(2)));
        setSputterRate(prev => parseFloat(Math.max(0.08, Math.min(0.25, prev + (Math.random() - 0.5) * 0.004)).toFixed(3)));
        setVacuumTorr(prev => parseFloat(Math.max(14.8, Math.min(15.6, prev + (Math.random() - 0.5) * 0.015)).toFixed(2)));
      }
    }, 85);

    return () => clearInterval(mainTimer);
  }, [powerOn, runCpp]);

  // Audio initialization & volume hookups
  useEffect(() => {
    audio.init();
    audio.setClickVolume(clickVolume / 100);
  }, [clickVolume]);

  useEffect(() => {
    audio.setHumVolume(humVolume / 100);
  }, [humVolume]);

  // Interactive control clicks
  const togglePower = () => {
    audio.playSwitchClick();
    if (!powerOn) {
      audio.playPowerSputter();
    }
    setPowerOn(!powerOn);
  };

  const handleSoundToggle = () => {
    audio.playSwitchClick();
    setSoundEnabled(!soundEnabled);
  };

  const selectColor = (color: "classic" | "mercury" | "radioactive") => {
    audio.playSwitchClick();
    setGlowColor(color);
  };

  const triggerCppRegen = () => {
    audio.playSwitchClick();
    audio.playPowerSputter();
    setRunCpp(true);
    setTimeout(() => {
      setRunCpp(false);
      audio.playSwitchClick();
    }, 4500); // 4.5 seconds sweeping decay
  };

  const toggleGrid = () => {
    audio.playSwitchClick();
    setShowGrid(!showGrid);
  };

  const toggleDof = () => {
    audio.playSwitchClick();
    setDofEnabled(!dofEnabled);
  };

  const toggleTimeMode = () => {
    audio.playSwitchClick();
    setTimeMode(timeMode === "local" ? "utc" : "local");
  };

  const toggleFormat12 = () => {
    audio.playSwitchClick();
    setFormat12(!format12);
  };

  const triggerShuffle = () => {
    if (!shfRef.current.powerOn || shfRef.current.runCpp || shfRef.current.shufflingActive) return;
    audio.playSwitchClick();
    audio.playPowerSputter();
    
    setRunCpp(true);
    setShufflingActive(true);
    
    let tickCount = 0;
    const intervalId = setInterval(() => {
      if (tickCount < 18) {
        audio.playRelayTick();
        tickCount++;
      } else {
        clearInterval(intervalId);
      }
    }, 75);

    setTimeout(() => {
      setRunCpp(false);
      setShufflingActive(false);
      audio.playSwitchClick();
    }, 1500);
  };

  useEffect(() => {
    const shuffleTmr = setInterval(() => {
      triggerShuffle();
    }, 30000); // Trigger auto shuffle every 30 seconds
    return () => clearInterval(shuffleTmr);
  }, []);

  const handleGlobalClick = () => {
    audio.playSwitchClick();
    setShowSettings(prev => !prev);
  };

  return (
    <div 
      className={`min-h-[100dvh] bg-[#070605] flex flex-col items-center justify-between font-sans antialiased text-[#dcd1c4] select-none transition-all duration-500 ${showSettings ? "p-4 md:p-6" : "p-0"}`} 
      id="app-wrapper"
    >
      
      {/* Heavy Steel Top telemetry header */}
      {showSettings && (
        <header className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-b border-[#251f1a] pb-4 mb-4 select-none" id="telemetry-header">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              {/* Glowing neon visual indicator block */}
              <span className={`absolute w-3 h-3 rounded-full ${powerOn ? "bg-orange-500 animate-pulse shadow-[0_0_12px_#f97316]" : "bg-neutral-800"}`} />
              <span className="w-5 h-5 rounded-full border border-[#f97316]/20 bg-[#120a06]" />
            </div>
            <div>
              <h1 className="text-[#eee3be] text-xl font-bold tracking-widest font-sans" id="app-title">
                NIXIE VACUUM CHRONOMETER
              </h1>
              <p className="text-xs font-mono text-[#766355] mt-0.5 tracking-wider uppercase">
                HIGH VOLTAGE DISCHARGE INDUCTOR // LAB-GRADE MK-VII
              </p>
            </div>
          </div>
          
          {/* Telemetry quick values */}
          <div className="flex gap-6 mt-3 sm:mt-0 font-mono text-[10px]" id="header-counters">
            <div className="border-l border-[#2e2620] pl-4">
              <span className="block text-[#604f44] uppercase">SYS_POWER</span>
              <span className={`font-semibold ${powerOn ? "text-green-500" : "text-red-500"}`}>
                {powerOn ? "170V DC [LIVE]" : "DISCONNECTED"}
              </span>
            </div>
            <div className="border-l border-[#2e2620] pl-4">
              <span className="block text-[#604f44] uppercase">PLASMA_GAS</span>
              <span className="text-[#cfb9a3] font-semibold">
                {powerOn ? `${vacuumTorr} TORR` : "0.00 TORR"}
              </span>
            </div>
            <div className="border-l border-[#2e2620] pl-4">
              <span className="block text-[#604f44] uppercase">FRAME_REND</span>
              <span className="text-orange-400 font-semibold">{fps} FPS</span>
            </div>
          </div>
        </header>
      )}

      {/* Main Sandbox Frame consisting of 3D Glass Tube Clock & side Bento Instrument control panels */}
      <main className={`grid grid-cols-1 ${showSettings ? "w-full max-w-7xl lg:grid-cols-4 gap-6 flex-grow" : "fixed inset-0 w-full h-[100dvh] lg:grid-cols-1 z-50"} items-stretch transition-all duration-300`} id="instrument-deck">
        
        {/* Left Column: Side Instrument telemetries */}
        {showSettings && (
          <section className="lg:col-span-1 flex flex-col gap-6" id="telemetry-deck-left">
            
            {/* Main Power & Spark Controls */}
            <div className="bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden" id="card-power">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#a28e7e] tracking-wider uppercase flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5 text-orange-400" /> 高電圧電源制御 (MAIN POWER)
                  </span>
                  <span className="text-[9px] font-mono bg-orange-950/40 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded">
                    MAIN-R1
                  </span>
                </div>
                <p className="text-xs text-[#8c7868] leading-relaxed mb-6">
                  ニキシー管アノードのガラス放電電極に170V高電圧電力を供給します。低温起動時にはネオンガスの放電が揺らぐことがあります。
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={togglePower}
                  className={`w-full py-3.5 px-4 rounded-lg font-bold tracking-wider text-sm flex items-center justify-center gap-2.5 transition-all outline-none border cursor-pointer ${
                    powerOn 
                      ? "bg-[#ff4f00] hover:bg-[#ff6924] text-[#fff4e1] border-orange-600 shadow-[0_0_20px_rgba(255,79,0,0.35)]" 
                      : "bg-[#251e1a] hover:bg-[#2d2520] text-[#715c4d] border-neutral-800"
                  }`}
                  id="power-switch-button"
                >
                  <Power className="w-4.5 h-4.5" />
                  {powerOn ? "主電源 ［ON］" : "主電源 ［待機］"}
                </button>

                <button
                  disabled={!powerOn || runCpp}
                  onClick={triggerCppRegen}
                  className={`w-full py-2 px-3 rounded-lg font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all border cursor-pointer ${
                    runCpp
                      ? "bg-[#d49930] text-[#120a00] border-[#fbbd54] animate-pulse"
                      : !powerOn 
                        ? "bg-neutral-900 border-[#1f1a17] text-neutral-700 cursor-not-allowed"
                        : "bg-[#1d1612] hover:bg-[#271e19] text-[#e8b56d] border-[#3f3128]"
                  }`}
                  id="cpp-trigger-button"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  {runCpp ? "電極再生中 [9V]" : "電極再生スイープを実行 (CPP)"}
                </button>
              </div>
            </div>

            {/* Color variant selectors */}
            <div className="bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative" id="card-gas-mixture">
              <span className="font-mono text-xs text-[#a28e7e] tracking-wider uppercase mb-3 flex items-center gap-1.5 font-bold">
                <Database className="w-3.5 h-3.5 text-blue-400" /> 放電ガス・スペクトル (GAS SPECTRUM)
              </span>
              <p className="text-xs text-[#8c7868] leading-relaxed mb-4">
                ガラス管に封入された混合ガスの比率を変更し、放電光の美しさとスペクトル波長（発光色）を調整します。
              </p>

              <div className="flex flex-col gap-2.5">
                {/* Option 1: Classic Amber */}
                <button
                  disabled={!powerOn}
                  onClick={() => selectColor("classic")}
                  className={`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${
                    !powerOn 
                      ? "opacity-30 cursor-not-allowed border-neutral-900"
                      : glowColor === "classic"
                        ? "bg-[#251307] border-orange-500 text-orange-400 font-bold"
                        : "bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
                    <span>クラシック・ネオン［琥珀］ (Ne-Ar)</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#604f44]">170V DC</span>
                </button>

                {/* Option 2: Mercury Blue */}
                <button
                  disabled={!powerOn}
                  onClick={() => selectColor("mercury")}
                  className={`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${
                    !powerOn 
                      ? "opacity-30 cursor-not-allowed border-neutral-900"
                      : glowColor === "mercury"
                        ? "bg-[#0b172d] border-blue-500 text-blue-400 font-bold"
                        : "bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]" />
                    <span>水銀インダクション［蒼碧］ (Hg-Ne)</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#604f44]">185V DC</span>
                </button>

                {/* Option 3: Radioactive Green */}
                <button
                  disabled={!powerOn}
                  onClick={() => selectColor("radioactive")}
                  className={`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${
                    !powerOn 
                      ? "opacity-30 cursor-not-allowed border-neutral-900"
                      : glowColor === "radioactive"
                        ? "bg-[#0c1c13] border-emerald-500 text-emerald-400 font-bold"
                        : "bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                    <span>クリプトン・グロウ［翠緑］ (Kr-N2)</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#604f44]">210V DC</span>
                </button>
              </div>
            </div>

          </section>
        )}

        {/* Center Canvas Viewport: Exhibits 3D Tubes */}
        <section className={`flex flex-col ${showSettings ? "lg:col-span-2 min-h-[460px] md:min-h-[500px]" : "w-full h-full lg:col-span-1 absolute inset-0 z-0 bg-transparent"} justify-between ${showSettings ? "gap-4" : "gap-0"}`} id="middle-viewport">
          <div className={`${showSettings ? "bg-radial from-[#15110e] to-[#0a0807] border border-[#2b221a] rounded-2xl flex-grow overflow-hidden shadow-inner relative flex flex-col" : "w-full h-full bg-black relative flex-grow overflow-hidden flex flex-col"}`} id="nixie-stage">
            
            {/* Ambient tube state display tags */}
            {showSettings && (
              <>
                <div className="absolute top-4 left-4 z-10 flex gap-2 font-mono text-[9px]" id="stage-status-tags">
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase">
                    GLASS IOR: 1.54
                  </span>
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase">
                    DOB: 1968
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 flex gap-2 font-mono text-[9px]" id="stage-util-tags">
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#f97316] tracking-wider font-bold uppercase flex items-center gap-1.5 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> HDR PASS
                  </span>
                </div>
              </>
            )}

            {/* Canvas itself */}
            <div className="w-full flex-grow relative" id="canvas-frame">
              <NixieTubeCanvas
                powerOn={powerOn}
                glowColor={glowColor}
                exaggerateDepth={exaggerateDepth}
                showGrid={showGrid}
                timeMode={timeMode}
                format12={format12}
                flickerDegree={flickerDegree}
                runCpp={runCpp}
                dofEnabled={dofEnabled}
                soundEnabled={soundEnabled}
                onFpsUpdate={setFps}
                onTubeClick={triggerShuffle}
                onBackgroundClick={() => setShowSettings(true)}
              />
            </div>

            {/* Click & drag orbit instruction panel overlay */}
            {showSettings && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md border border-[#252019] px-4 py-2 rounded-full text-[9px] font-mono tracking-widest text-[#7c695b] text-center flex items-center gap-2 uppercase select-none w-[90%] justify-center pointer-events-none" id="orbit-tips">
                <Compass className="w-3.5 h-3.5 text-[#a48c77]" /> NIXIE TUBES ARE INTERACTIVE. CLICK THEM TO TRIGGER SHUFFLE
              </div>
            )}
          </div>

          {/* Awesome English SHUFFLE Mechanical Control Deck underneath the clock */}
          {showSettings && (
            <div className="flex flex-col items-center gap-1 bg-[#110c09] border border-[#2a2119] rounded-xl p-4 shadow-xl text-center select-none" id="shuffle-deck">
              <button
                disabled={!powerOn || runCpp || shufflingActive}
                onClick={triggerShuffle}
                className={`px-8 py-3.5 rounded-lg font-bold tracking-widest text-[#ffffff] border transition-all cursor-pointer flex items-center justify-center gap-2.5 ${
                  !powerOn
                    ? "bg-neutral-900 border-[#221c17] text-neutral-600 cursor-not-allowed"
                    : shufflingActive
                      ? "bg-[#ff5500] border-[#ffa14c] animate-pulse shadow-[0_0_20px_#ff5500]"
                      : "bg-gradient-to-b from-[#ff5500] to-[#b33300] hover:from-[#ff6d24] hover:to-[#cd3f00] border-[#ff7315] shadow-[0_4px_12px_rgba(255,85,0,0.25)] hover:shadow-[0_4px_20px_rgba(255,85,0,0.45)]"
                }`}
                id="shuffle-filaments-button"
              >
                <Activity className={`w-4 h-4 ${shufflingActive ? "animate-[spin_1s_linear_infinite]" : ""}`} />
                <span>SHUFFLE FILAMENTS</span>
              </button>
              <span className="text-[9px] font-mono text-[#7a6452] uppercase mt-1 tracking-wider">
                TRIGGER RANDOMIZED DISCHARGE SWEEP // SCRAMBLE ELECTRODES
              </span>
            </div>
          )}
        </section>

        {/* Right Column: Physical Calibration Controls */}
        {showSettings && (
          <section className="lg:col-span-1 flex flex-col gap-6" id="telemetry-deck-right" onClick={(e) => e.stopPropagation()}>
            
            {/* Hardware dial sliders (flicker, depth, sound) */}
            <div className="bg-[#120d0b] border border-[#231c17] rounded-xl p-5 shadow-2xl flex flex-col justify-between" id="card-hardware-calibration">
              <div>
                <span className="font-mono text-[11px] text-[#a28e7e] tracking-wider uppercase mb-5 flex items-center gap-1.5 font-bold">
                  <Sliders className="w-3.5 h-3.5 text-orange-400" /> 真空管ダイヤル (DIALS)
                </span>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* Slider 1: 3D Cathode Spacing */}
                <div>
                  <div className="flex items-center justify-between mb-2 font-mono text-[10px]">
                    <span className="text-[#a28e7e] flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-amber-500" /> 前後奥行き補正 (Z-DEPTH)</span>
                    <span className="text-orange-400 font-bold">{exaggerateDepth.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={exaggerateDepth}
                    onChange={(e) => setExaggerateDepth(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"
                  />
                </div>

                {/* Slider 2: Neon Discharge Flicker */}
                <div>
                  <div className="flex items-center justify-between mb-2 font-mono text-[10px]">
                    <span className="text-[#a28e7e] flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-[#ff7139]" /> 放電ゆらぎ強度 (FLICKER)</span>
                    <span className="text-orange-400 font-bold">{Math.round(flickerDegree * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.05"
                    value={flickerDegree}
                    onChange={(e) => setFlickerDegree(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"
                  />
                </div>

                {/* Slider 3: Speaker volumes */}
                <div className="border-t border-[#231a15] pt-4 mt-2">
                  <div className="flex items-center justify-between mb-4 font-mono text-[11px] text-[#a28e7e] font-bold">
                    <span className="flex items-center gap-1.5 uppercase">
                      {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-orange-400" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-600" />}
                      スピーカー (AUDIO)
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={soundEnabled}
                        onChange={handleSoundToggle}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-[#231a14] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#866f5c] after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#ff5500] peer-checked:after:bg-[#fff]" />
                    </label>
                  </div>

                  <div className={`space-y-4 transition-opacity duration-300 ${soundEnabled ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
                    <div>
                      <div className="flex justify-between font-mono text-[10px] mb-2">
                        <span className="text-[#8c7868]">高周波トランス・ノイズ</span>
                        <span className="text-orange-400 flex items-center gap-1"><Zap className="w-2.5 h-2.5" />{humVolume}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={humVolume}
                        onChange={(e) => setHumVolume(parseInt(e.target.value))}
                        className="w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between font-mono text-[10px] mb-2">
                        <span className="text-[#8c7868]">電磁リレー・クリック音</span>
                        <span className="text-orange-400 flex items-center gap-1"><Volume2 className="w-2.5 h-2.5" />{clickVolume}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={clickVolume}
                        onChange={(e) => setClickVolume(parseInt(e.target.value))}
                        className="w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick toggle list (Grid mesh, Depth of field, Time parameters) */}
            <div className="bg-[#120d0b] border border-[#231c17] rounded-xl p-5 shadow-2xl space-y-4" id="card-switches-grid">
              <span className="font-mono text-xs text-[#a28e7e] tracking-wider uppercase flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-orange-400" /> システム構成切替 (CORES)
              </span>

              <div className="grid grid-cols-2 gap-2" id="grid-toggle-switches">
                {/* Grid 1: Mesh Anode */}
                <button
                  onClick={toggleGrid}
                  className={`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${
                    showGrid 
                      ? "bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]" 
                      : "bg-[#110e0c] border-[#251e19] text-[#786354]"
                  }`}
                >
                  <div className="flex justify-between w-full items-start">
                    <span className="text-[9px] text-[#8c7462] font-semibold uppercase">陽極電極網</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${showGrid ? "bg-orange-500 shadow-[0_0_6px_#f97316]" : "bg-neutral-800"}`} />
                  </div>
                  <div className="text-[11px] font-bold">
                    {showGrid ? "アノード網あり" : "シールド非表示"}
                  </div>
                </button>

                {/* Grid 2: Depth of Field */}
                <button
                  onClick={toggleDof}
                  className={`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${
                    dofEnabled 
                      ? "bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]" 
                      : "bg-[#110e0c] border-[#251e19] text-[#786354]"
                  }`}
                >
                  <div className="flex justify-between w-full items-start">
                    <span className="text-[9px] text-[#8c7462] font-semibold uppercase">被写界深度ぼかし</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${dofEnabled ? "bg-orange-500 shadow-[0_0_6px_#f97316]" : "bg-neutral-800"}`} />
                  </div>
                  <div className="text-[11px] font-bold">
                    {dofEnabled ? "レンズ効果あり" : "ぼかし無効"}
                  </div>
                </button>

                {/* Grid 3: Time Standard */}
                <button
                  onClick={toggleTimeMode}
                  className={`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${
                    timeMode === "local" 
                      ? "bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]" 
                      : "bg-[#110e0c] border-[#251e19] text-[#786354]"
                  }`}
                >
                  <div className="flex justify-between w-full items-start">
                    <span className="text-[9px] text-[#8c7462] font-semibold uppercase">タイムゾーン</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
                  </div>
                  <div className="text-[11px] font-bold">
                    {timeMode === "local" ? "ローカル時刻" : "世界協定時 (UTC)"}
                  </div>
                </button>

                {/* Grid 4: Military Time Format */}
                <button
                  onClick={toggleFormat12}
                  className={`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${
                    format12 
                      ? "bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]" 
                      : "bg-[#110e0c] border-[#251e19] text-[#786354]"
                  }`}
                >
                  <div className="flex justify-between w-full items-start">
                    <span className="text-[9px] text-[#8c7462] font-semibold uppercase">時間規格表示</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
                  </div>
                  <div className="text-[11px] font-bold">
                    {format12 ? "12時間形式" : "24時間形式"}
                  </div>
                </button>
              </div>

              {/* Fullscreen view button */}
              <button
                onClick={() => setShowSettings(false)}
                className="w-full mt-2 p-3 bg-[#1c1410] hover:bg-[#251a14] border border-[#ff5500]/30 hover:border-[#ff5500]/60 text-[#ffb180] rounded-lg text-xs font-bold tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,85,0,0.1)] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)]"
              >
                <Eye className="w-4 h-4" /> 全画面表示 (FULLSCREEN)
              </button>
            </div>

          </section>
        )}

      </main>

      {/* Heavy Steel bottom Telemetry Deck presenting live diagnostics and system stats */}
      {showSettings && (
        <footer className="w-full max-w-7xl bg-[#0f0b09] border border-[#231b15] rounded-xl p-4 mt-6 select-none" id="telemetry-bar" onClick={(e) => e.stopPropagation()}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 font-mono text-[10px]" id="telemetry-grid">
            
            <div className="flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]">
              <span className="text-[#59493c] font-bold uppercase flex items-center gap-1">
                <Eye className="w-3 h-3 text-[#ff5500]" /> SYSTEM CORE
              </span>
              <span className="text-[#a59383] font-semibold">SOVIET IN-18 GLASS x6</span>
            </div>

            <div className="flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]">
              <span className="text-[#59493c] font-bold uppercase flex items-center gap-1">
                <Gauge className="w-3 h-3 text-emerald-400" /> ANODE TEMPERATURE
              </span>
              <span className="text-emerald-400 font-semibold">{powerOn ? `${tempEstimate} K` : "0.0 K"}</span>
            </div>

            <div className="flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]">
              <span className="text-[#59493c] font-bold uppercase flex items-center gap-1">
                <Activity className="w-3 h-3 text-amber-500" /> SPUTTER COATING RATE
              </span>
              <span className="text-orange-400 font-semibold">{powerOn ? `${sputterRate} mg/Ah` : "0.000 mg/Ah"}</span>
            </div>

            <div className="flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]">
              <span className="text-[#59493c] font-bold uppercase flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" /> TIMECODE LOG
              </span>
              <span className="text-[#ae9a8a] font-semibold truncate w-full">{unixMs}</span>
            </div>

            <div className="flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511] col-span-2">
              <span className="text-[#59493c] font-bold uppercase flex items-center gap-1">
                <Zap className="w-3 h-3 text-orange-400" /> CALIBRATION STATIONS
              </span>
              <span className="text-[#7c6a5a] text-[9px] w-full truncate font-medium">
                SWEEP SWT=[{runCpp ? "ACTIVE" : "STANDBY"}], DOFVIG=[{dofEnabled ? "ON" : "OFF"}]
              </span>
            </div>

          </div>
        </footer>
      )}
    </div>
  );
}

