/**
 * Detailed 3D paths mapping digits 0-9 for creating photorealistic filaments.
 * Spacing and coordinates are optimized to look like hand-bent wire cathodes.
 */

export interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Custom paths for digits 0-9. Values scaled to fit inside a tube of height ~1.8 and radius ~0.6
export const NIXIE_DIGIT_PATHS: Record<number, Point3D[][]> = {
  0: [
    [
      { x: 0.0, y: -0.75, z: 0 },
      { x: -0.32, y: -0.60, z: 0 },
      { x: -0.42, y: -0.30, z: 0 },
      { x: -0.45, y: 0.00, z: 0 },
      { x: -0.42, y: 0.30, z: 0 },
      { x: -0.32, y: 0.60, z: 0 },
      { x: 0.0, y: 0.75, z: 0 },
      { x: 0.32, y: 0.60, z: 0 },
      { x: 0.42, y: 0.30, z: 0 },
      { x: 0.45, y: 0.00, z: 0 },
      { x: 0.42, y: -0.30, z: 0 },
      { x: 0.32, y: -0.60, z: 0 },
      { x: 0.0, y: -0.75, z: 0 }
    ]
  ],
  1: [
    // Foot
    [
      { x: -0.22, y: -0.75, z: 0 },
      { x: 0.22, y: -0.75, z: 0 }
    ],
    // Vertical stem & top tick
    [
      { x: 0.0, y: -0.75, z: 0 },
      { x: 0.0, y: 0.72, z: 0 },
      { x: -0.15, y: 0.55, z: 0 }
    ]
  ],
  2: [
    [
      { x: -0.35, y: 0.40, z: 0 },
      { x: -0.30, y: 0.62, z: 0 },
      { x: -0.12, y: 0.75, z: 0 },
      { x: 0.12, y: 0.75, z: 0 },
      { x: 0.32, y: 0.62, z: 0 },
      { x: 0.35, y: 0.35, z: 0 },
      { x: 0.15, y: 0.08, z: 0 },
      { x: -0.35, y: -0.50, z: 0 },
      { x: -0.35, y: -0.75, z: 0 },
      { x: 0.35, y: -0.75, z: 0 }
    ]
  ],
  3: [
    [
      { x: -0.32, y: 0.55, z: 0 },
      { x: -0.10, y: 0.75, z: 0 },
      { x: 0.25, y: 0.75, z: 0 },
      { x: 0.35, y: 0.52, z: 0 },
      { x: 0.20, y: 0.20, z: 0 },
      { x: -0.05, y: 0.08, z: 0 },
      { x: 0.22, y: -0.05, z: 0 },
      { x: 0.35, y: -0.38, z: 0 },
      { x: 0.25, y: -0.72, z: 0 },
      { x: -0.10, y: -0.75, z: 0 },
      { x: -0.32, y: -0.55, z: 0 }
    ]
  ],
  4: [
    // Outer tick & diagonal
    [
      { x: -0.32, y: 0.72, z: 0 },
      { x: -0.35, y: 0.12, z: 0 },
      { x: 0.35, y: 0.12, z: 0 }
    ],
    // Vertical mast
    [
      { x: 0.18, y: -0.75, z: 0 },
      { x: 0.18, y: 0.75, z: 0 }
    ]
  ],
  5: [
    [
      { x: 0.32, y: 0.75, z: 0 },
      { x: -0.28, y: 0.75, z: 0 },
      { x: -0.28, y: 0.10, z: 0 },
      { x: 0.0, y: 0.12, z: 0 },
      { x: 0.28, y: 0.05, z: 0 },
      { x: 0.35, y: -0.28, z: 0 },
      { x: 0.25, y: -0.68, z: 0 },
      { x: -0.10, y: -0.75, z: 0 },
      { x: -0.32, y: -0.58, z: 0 }
    ]
  ],
  6: [
    [
      { x: 0.28, y: 0.70, z: 0 },
      { x: -0.10, y: 0.75, z: 0 },
      { x: -0.32, y: 0.45, z: 0 },
      { x: -0.35, y: -0.15, z: 0 },
      { x: -0.20, y: -0.65, z: 0 },
      { x: 0.05, y: -0.75, z: 0 },
      { x: 0.32, y: -0.60, z: 0 },
      { x: 0.35, y: -0.18, z: 0 },
      { x: 0.10, y: 0.05, z: 0 },
      { x: -0.15, y: 0.05, z: 0 },
      { x: -0.32, y: -0.15, z: 0 }
    ]
  ],
  7: [
    // Top bar
    [
      { x: -0.35, y: 0.72, z: 0 },
      { x: 0.35, y: 0.75, z: 0 },
      { x: 0.08, y: -0.10, z: 0 },
      { x: -0.12, y: -0.75, z: 0 }
    ]
  ],
  8: [
    [
      { x: 0.0, y: 0.00, z: 0 },
      { x: -0.30, y: 0.18, z: 0 },
      { x: -0.32, y: 0.50, z: 0 },
      { x: -0.12, y: 0.72, z: 0 },
      { x: 0.12, y: 0.72, z: 0 },
      { x: 0.32, y: 0.50, z: 0 },
      { x: 0.30, y: 0.18, z: 0 },
      { x: 0.0, y: 0.00, z: 0 },
      { x: -0.32, y: -0.18, z: 0 },
      { x: -0.35, y: -0.52, z: 0 },
      { x: -0.15, y: -0.75, z: 0 },
      { x: 0.15, y: -0.75, z: 0 },
      { x: 0.35, y: -0.52, z: 0 },
      { x: 0.32, y: -0.18, z: 0 },
      { x: 0.0, y: 0.00, z: 0 }
    ]
  ],
  9: [
    [
      { x: 0.32, y: 0.18, z: 0 },
      { x: 0.12, y: 0.02, z: 0 },
      { x: -0.15, y: 0.02, z: 0 },
      { x: -0.32, y: 0.18, z: 0 },
      { x: -0.35, y: 0.52, z: 0 },
      { x: -0.12, y: 0.72, z: 0 },
      { x: 0.12, y: 0.72, z: 0 },
      { x: 0.32, y: 0.52, z: 0 },
      { x: 0.35, y: 0.12, z: 0 },
      { x: 0.22, y: -0.42, z: 0 },
      { x: -0.10, y: -0.75, z: 0 },
      { x: -0.28, y: -0.70, z: 0 }
    ]
  ]
};

// Physics-inspired cathode stack layers from back to front
// Since digits stack inside the tube, they have different depths.
// Classic stack: 1 (backmost) -> 6 -> 2 -> 7 -> 5 -> 0 -> 4 -> 9 -> 8 -> 3 (frontmost)
export const CATHODE_STACK: number[] = [1, 6, 2, 7, 5, 0, 4, 9, 8, 3];

/**
 * Returns the Z displacement of a cathode (between -0.22 and 0.22)
 * @param digit The digit to compute depth for
 * @param exaggerate Multiplier to stretch the depth spacing
 */
export function getCathodeDepth(digit: number, exaggerate: number = 1.0): number {
  const index = CATHODE_STACK.indexOf(digit);
  if (index === -1) return 0;
  // Map index [0, 9] to range [-0.22, 0.22]
  const rawZ = -0.22 + (index / 9) * 0.44;
  return rawZ * exaggerate;
}
