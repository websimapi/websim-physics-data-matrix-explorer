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
    ]
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
    }
  }
};