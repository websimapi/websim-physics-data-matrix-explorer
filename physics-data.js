export const physicsMatrix = {
  mechanics: {
    kinematics: {
      concepts: [
        {
          name: "Velocity",
          symbol: "v",
          unit: "m/s",
          formula: "v = dx/dt",
          description: "Rate of change of position with respect to time"
        },
        {
          name: "Acceleration",
          symbol: "a",
          unit: "m/s²",
          formula: "a = dv/dt",
          description: "Rate of change of velocity with respect to time"
        },
        {
          name: "Displacement",
          symbol: "s or Δx",
          unit: "m",
          formula: "s = vt + ½at²",
          description: "Change in position of an object"
        }
      ],
      laws: ["Newton's Laws of Motion", "Conservation of Momentum"]
    },
    dynamics: {
      forces: [
        {
          name: "Gravity",
          formula: "F = GMm/r²",
          constant: "G = 6.674×10⁻¹¹ N(m/kg)²"
        },
        {
          name: "Normal Force",
          formula: "N = mg cos(θ)"
        },
        {
          name: "Friction",
          formula: "f = μN",
          types: ["Static", "Kinetic"]
        }
      ]
    },
    energy: {
      types: [
        {
          name: "Kinetic Energy",
          formula: "KE = ½mv²"
        },
        {
          name: "Potential Energy",
          formula: "PE = mgh",
          variants: ["Gravitational", "Elastic", "Electric"]
        }
      ],
      conservation: "Total Energy = KE + PE = constant"
    },
    waves: {
      properties: [
        {
          name: "Wave Speed",
          formula: "v = fλ",
          description: "Product of frequency and wavelength"
        },
        {
          name: "Standing Waves",
          formula: "f_n = (n * v)/(2L)",
          description: "Frequencies of standing waves on a string"
        }
      ],
      types: {
        mechanical: ["Longitudinal", "Transverse", "Surface"],
        characteristics: {
          amplitude: "Maximum displacement from equilibrium",
          frequency: "Oscillations per second",
          wavelength: "Distance between repeating parts",
          phase: "Position in cycle relative to reference"
        }
      },
      phenomena: ["Interference", "Diffraction", "Reflection", "Refraction", "Doppler Effect"]
    },
    fluidDynamics: {
      principles: [
        {
          name: "Bernoulli's Principle",
          formula: "P + ½ρv² + ρgh = constant",
          applications: ["Airplane Wings", "Atomizers", "Venturi Meter"]
        },
        {
          name: "Pascal's Law",
          formula: "ΔP = ρgh",
          applications: ["Hydraulic Systems", "Blood Pressure"]
        }
      ],
      viscosity: {
        formula: "F = ηA(dv/dx)",
        unit: "Pa·s",
        description: "Fluid resistance to flow"
      }
    }
  },
  thermodynamics: {
    laws: [
      {
        name: "Zeroth Law",
        description: "If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other"
      },
      {
        name: "First Law",
        formula: "ΔU = Q - W",
        description: "Energy cannot be created or destroyed"
      },
      {
        name: "Second Law",
        description: "Entropy of an isolated system always increases",
        formula: "ΔS ≥ 0"
      },
      {
        name: "Third Law",
        description: "It is impossible to reach absolute zero temperature"
      }
    ],
    concepts: {
      temperature: {
        scales: ["Kelvin", "Celsius", "Fahrenheit"],
        conversions: {
          KtoC: "°C = K - 273.15",
          CtoF: "°F = (°C × 9/5) + 32"
        }
      },
      pressure: {
        formula: "P = F/A",
        unit: "Pascal (Pa)",
        laws: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law"]
      }
    },
    thermodynamicProcesses: {
      isobaric: {
        description: "Constant pressure process",
        work: "W = PΔV"
      },
      isochoric: {
        description: "Constant volume process",
        work: "W = 0"
      },
      isothermal: {
        description: "Constant temperature process",
        work: "W = nRT ln(V₂/V₁)"
      },
      adiabatic: {
        description: "No heat transfer",
        relation: "PV^γ = constant"
      }
    },
    heatTransfer: {
      conduction: {
        formula: "Q = -kA(dT/dx)",
        description: "Heat transfer through direct contact"
      },
      convection: {
        formula: "Q = hA(T₂ - T₁)",
        description: "Heat transfer through fluid motion"
      },
      radiation: {
        formula: "P = εσAT⁴",
        description: "Heat transfer through electromagnetic waves"
      }
    }
  },
  electromagnetics: {
    electric: {
      coulombsLaw: {
        formula: "F = k(q₁q₂)/r²",
        constant: "k = 8.99×10⁹ N⋅m²/C²"
      },
      field: {
        formula: "E = F/q",
        unit: "N/C"
      },
      potential: {
        formula: "V = W/q",
        unit: "Volt"
      }
    },
    magnetic: {
      field: {
        formula: "B = μ₀I/(2πr)",
        unit: "Tesla"
      },
      force: {
        formula: "F = qvB sin(θ)",
        description: "Lorentz Force Law"
      }
    },
    maxwellsEquations: [
      "∇⋅E = ρ/ε₀",
      "∇⋅B = 0",
      "∇×E = -∂B/∂t",
      "∇×B = μ₀J + μ₀ε₀∂E/∂t"
    ],
    circuits: {
      laws: {
        ohm: {
          formula: "V = IR",
          description: "Relationship between voltage, current, and resistance"
        },
        kirchhoff: {
          current: "ΣI = 0 at any node",
          voltage: "ΣV = 0 around any closed loop"
        }
      },
      components: {
        resistors: {
          series: "R_total = R₁ + R₂ + ...",
          parallel: "1/R_total = 1/R₁ + 1/R₂ + ..."
        },
        capacitors: {
          formula: "C = Q/V",
          energy: "U = ½CV²",
          series: "1/C_total = 1/C₁ + 1/C₂ + ...",
          parallel: "C_total = C₁ + C₂ + ..."
        },
        inductors: {
          formula: "V = L(dI/dt)",
          energy: "U = ½LI²"
        }
      }
    }
  },
  quantum: {
    concepts: {
      waveFunctions: {
        schrodingerEquation: "iℏ∂ψ/∂t = Ĥψ",
        probabilityDensity: "|ψ|²"
      },
      uncertainty: {
        heisenberg: "ΔxΔp ≥ ℏ/2",
        energyTime: "ΔEΔt ≥ ℏ/2"
      },
      quantization: {
        energy: "E = hf",
        angular: "L = nℏ"
      }
    },
    particles: {
      electron: {
        mass: "9.109×10⁻³¹ kg",
        charge: "-1.602×10⁻¹⁹ C"
      },
      proton: {
        mass: "1.673×10⁻²⁷ kg",
        charge: "1.602×10⁻¹⁹ C"
      },
      neutron: {
        mass: "1.675×10⁻²⁷ kg",
        charge: "0 C"
      }
    },
    atomicPhysics: {
      models: {
        bohr: {
          energyLevels: "E_n = -13.6eV/n²",
          description: "Quantized orbital model of hydrogen"
        },
        quantum: {
          orbital: "ψ_nlm(r,θ,φ)",
          quantumNumbers: ["Principal (n)", "Angular (l)", "Magnetic (m)", "Spin (s)"]
        }
      },
      spectroscopy: {
        transitions: {
          formula: "ΔE = hf",
          series: ["Lyman", "Balmer", "Paschen"]
        }
      }
    },
    quantumEntanglement: {
      properties: ["Non-locality", "Quantum Teleportation", "Bell's Inequality"],
      applications: ["Quantum Computing", "Quantum Cryptography"]
    }
  },
  relativity: {
    special: {
      postulates: [
        "Laws of physics are the same in all inertial frames",
        "Speed of light is constant in all frames"
      ],
      equations: {
        timeDilation: "t = t₀/√(1-v²/c²)",
        lengthContraction: "L = L₀√(1-v²/c²)",
        massEnergy: "E = mc²",
        relativisticMass: "m = m₀/√(1-v²/c²)"
      }
    },
    general: {
      principles: [
        "Principle of Equivalence",
        "Curved Spacetime",
        "Gravitational Time Dilation"
      ],
      fieldEquations: "Gμν = 8πG/c⁴ Tμν",
      effects: [
        "Gravitational Lensing",
        "Frame Dragging",
        "Gravitational Waves"
      ]
    },
    cosmology: {
      bigBang: {
        events: ["Inflation", "Nucleosynthesis", "Recombination"],
        evidence: ["Cosmic Microwave Background", "Galaxy Redshift", "Light Element Abundances"]
      },
      expansion: {
        hubbleLaw: "v = H₀d",
        darkEnergy: {
          effects: ["Accelerating Expansion", "Cosmic Scale Factor"],
          properties: ["Negative Pressure", "Uniform Distribution"]
        }
      },
      blackHoles: {
        properties: {
          schwarzschildRadius: "R_s = 2GM/c²",
          hawkingRadiation: "T = ℏc³/(8πGMk_B)",
          singularity: "Space-time curvature becomes infinite"
        },
        types: ["Stellar", "Supermassive", "Primordial"]
      }
    }
  }
};