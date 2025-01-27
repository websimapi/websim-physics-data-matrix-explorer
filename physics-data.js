export const physicsMatrix = {
  mechanics: {
    kinematics: {
      concepts: [
        {
          name: "Position",
          symbol: "x",
          unit: "m",
          formula: "x = x₀ + v₀t + ½at²",
          description: "Location of an object relative to a reference point"
        },
        {
          name: "Velocity",
          symbol: "v",
          unit: "m/s",
          formula: "v = dx/dt = v₀ + at",
          description: "Rate of change of position with respect to time",
          averageFormula: "v_avg = (x₂ - x₁)/(t₂ - t₁)"
        },
        {
          name: "Acceleration",
          symbol: "a",
          unit: "m/s²",
          formula: "a = dv/dt = (v₂ - v₁)/(t₂ - t₁)",
          description: "Rate of change of velocity with respect to time",
          types: ["Linear", "Angular", "Centripetal"]
        },
        {
          name: "Angular Motion",
          quantities: {
            position: "θ (rad)",
            velocity: "ω = dθ/dt (rad/s)",
            acceleration: "α = dω/dt (rad/s²)"
          },
          relations: {
            linear: {
              position: "s = rθ",
              velocity: "v = rω",
              acceleration: "a = rα"
            }
          }
        }
      ],
      equations: {
        constantAcceleration: [
          "v = v₀ + at",
          "x = x₀ + v₀t + ½at²",
          "v² = v₀² + 2a(x - x₀)",
          "x = x₀ + ½(v + v₀)t"
        ]
      }
    },
    dynamics: {
      forces: [
        {
          name: "Gravitational Force",
          formula: "F = GMm/r²",
          constant: "G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²",
          earthSurface: "g = 9.80665 m/s²"
        },
        {
          name: "Normal Force",
          formula: "N = mg cos(θ)",
          description: "Perpendicular force from surface contact"
        },
        {
          name: "Friction",
          types: {
            static: {
              formula: "f_s ≤ μ_s N",
              description: "Maximum force before motion begins"
            },
            kinetic: {
              formula: "f_k = μ_k N",
              description: "Force opposing motion"
            }
          },
          coefficients: {
            typical: {
              wood: "0.3-0.5",
              metal: "0.5-0.7",
              rubber: "0.6-0.9"
            }
          }
        },
        {
          name: "Spring Force",
          formula: "F = -kx",
          description: "Hooke's Law",
          energy: "U = ½kx²"
        },
        {
          name: "Tension",
          description: "Force transmitted through a string or rope",
          properties: ["Equal magnitude throughout ideal string", "Always pulls"]
        }
      ],
      laws: {
        newton: {
          first: {
            statement: "An object remains at rest or in uniform motion unless acted upon by a net force",
            formula: "ΣF = 0 (equilibrium)"
          },
          second: {
            statement: "Force equals mass times acceleration",
            formula: "F = ma",
            generalForm: "F = dp/dt"
          },
          third: {
            statement: "For every action, there is an equal and opposite reaction",
            formula: "F₁₂ = -F₂₁"
          }
        }
      }
    },
    energy: {
      types: [
        {
          name: "Kinetic Energy",
          formula: "KE = ½mv²",
          rotational: "KE_rot = ½Iω²"
        },
        {
          name: "Potential Energy",
          variants: {
            gravitational: {
              formula: "PE = mgh",
              generalForm: "PE = -GMm/r"
            },
            elastic: {
              formula: "PE = ½kx²",
              description: "Energy stored in springs/elastic materials"
            }
          }
        }
      ],
      principles: {
        conservation: {
          statement: "Total energy remains constant in isolated system",
          formula: "E_initial = E_final",
          mechanical: "KE + PE = constant"
        },
        work: {
          formula: "W = Fd cos(θ)",
          powerRelation: "P = dW/dt",
          workEnergyTheorem: "W_net = ΔKE"
        }
      }
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
        description: "If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other",
        significance: "Defines the concept of temperature"
      },
      {
        name: "First Law",
        formula: "ΔU = Q - W",
        description: "Energy cannot be created or destroyed",
        alternativeForms: [
          "dU = đQ - đW",
          "ΔU = ΔQ - ΔW"
        ],
        applications: {
          closedSystem: "ΔU = Q - pdV",
          constantVolume: "ΔU = Q_v",
          constantPressure: "ΔH = Q_p"
        }
      },
      {
        name: "Second Law",
        descriptions: [
          "Entropy of an isolated system never decreases",
          "Heat flows spontaneously from hot to cold",
          "No perfect heat engine possible"
        ],
        formulas: {
          entropyChange: "ΔS = ∫(đQ/T)",
          clausius: "∮(đQ/T) ≤ 0",
          thermalEfficiency: "η = 1 - T_c/T_h"
        },
        consequences: [
          "Irreversibility of natural processes",
          "Existence of entropy as a state function",
          "Limited efficiency of heat engines"
        ]
      },
      {
        name: "Third Law",
        description: "It is impossible to reach absolute zero temperature",
        implications: [
          "Perfect crystal has zero entropy at T=0",
          "Unattainability of absolute zero",
          "Quantum ground state"
        ]
      }
    ],
    concepts: {
      temperature: {
        scales: {
          kelvin: {
            symbol: "K",
            absolute: true,
            zeroPoint: "0 K = -273.15°C"
          },
          celsius: {
            symbol: "°C",
            conversion: {
              toKelvin: "K = °C + 273.15",
              fromKelvin: "°C = K - 273.15"
            }
          },
          fahrenheit: {
            symbol: "°F",
            conversion: {
              toCelsius: "°C = (°F - 32) × 5/9",
              fromCelsius: "°F = (°C × 9/5) + 32"
            }
          }
        },
        fundamentals: {
          definition: "Measure of average kinetic energy of particles",
          energy: "E = (3/2)kT",
          boltzmannConstant: "k = 1.380649 × 10⁻²³ J/K"
        }
      },
      pressure: {
        formula: "P = F/A",
        units: {
          pascal: "1 Pa = 1 N/m²",
          atmosphere: "1 atm = 101,325 Pa",
          bar: "1 bar = 100,000 Pa",
          torr: "1 torr = 133.3224 Pa"
        },
        gasLaws: {
          boyle: {
            statement: "PV = constant (at constant T)",
            formula: "P₁V₁ = P₂V₂"
          },
          charles: {
            statement: "V/T = constant (at constant P)",
            formula: "V₁/T₁ = V₂/T₂"
          },
          gayLussac: {
            statement: "P/T = constant (at constant V)",
            formula: "P₁/T₁ = P₂/T₂"
          },
          combined: {
            formula: "P₁V₁/T₁ = P₂V₂/T₂",
            idealGas: "PV = nRT"
          }
        }
      }
    },
    thermodynamicProcesses: {
      isobaric: {
        description: "Constant pressure process",
        work: "W = PΔV",
        heatCapacity: "C_p",
        entropyChange: "ΔS = nC_p ln(T₂/T₁)"
      },
      isochoric: {
        description: "Constant volume process",
        work: "W = 0",
        heatCapacity: "C_v",
        entropyChange: "ΔS = nC_v ln(T₂/T₁)"
      },
      isothermal: {
        description: "Constant temperature process",
        work: "W = nRT ln(V₂/V₁)",
        internalEnergy: "ΔU = 0",
        entropyChange: "ΔS = nR ln(V₂/V₁)"
      },
      adiabatic: {
        description: "No heat transfer",
        relation: "PV^γ = constant",
        work: "W = (P₁V₁ - P₂V₂)/(γ-1)",
        gamma: "γ = C_p/C_v"
      }
    },
    heatTransfer: {
      conduction: {
        formula: "Q = -kA(dT/dx)",
        description: "Heat transfer through direct contact",
        thermalConductivity: {
          copper: "385 W/(m·K)",
          aluminum: "205 W/(m·K)",
          steel: "50.2 W/(m·K)"
        }
      },
      convection: {
        formula: "Q = hA(T₂ - T₁)",
        description: "Heat transfer through fluid motion",
        types: {
          natural: "Due to buoyancy forces",
          forced: "Due to external forces"
        },
        convectionCoefficients: {
          air: "10-100 W/(m²·K)",
          water: "500-10000 W/(m²·K)"
        }
      },
      radiation: {
        formula: "P = εσAT⁴",
        stefanBoltzmann: "σ = 5.670374419 × 10⁻⁸ W/(m²·K⁴)",
        emissivity: {
          blackBody: "ε = 1",
          typicalRange: "0 < ε < 1"
        },
        wienLaw: "λ_max = b/T",
        planckLaw: "I(λ,T) = (2hc²/λ⁵)/(e^(hc/λkT) - 1)"
      }
    },
    phaseTransitions: {
      types: {
        melting: {
          description: "Solid to liquid",
          energy: "Q = mL_f"
        },
        vaporization: {
          description: "Liquid to gas",
          energy: "Q = mL_v",
          clausius: "dP/dT = L/(T(V_g - V_l))"
        },
        sublimation: {
          description: "Solid to gas",
          triplePoint: "Coexistence of all phases"
        }
      }
    }
  },
  electromagnetics: {
    electric: {
      charge: {
        unit: "Coulomb (C)",
        fundamentalCharge: "e = 1.602176634 × 10⁻¹⁹ C",
        conservation: "Total charge is conserved",
        quantization: "Q = ne"
      },
      coulombsLaw: {
        formula: "F = k(q₁q₂)/r²",
        constant: "k = 8.9875517923 × 10⁹ N⋅m²/C²",
        permittivity: "ε₀ = 8.8541878128 × 10⁻¹² F/m",
        relation: "k = 1/(4πε₀)"
      },
      field: {
        formula: "E = F/q = kQ/r²",
        unit: "N/C or V/m",
        superposition: "E_total = ΣE_i",
        gaussLaw: {
          integral: "∮E⋅dA = Q_enclosed/ε₀",
          differential: "∇⋅E = ρ/ε₀"
        },
        potential: {
          formula: "V = kQ/r",
          relation: "E = -∇V",
          work: "W = qΔV"
        }
      }
    },
    magnetic: {
      field: {
        biotSavart: "dB = (μ₀/4π)(Idl×r̂/r²)",
        ampereCircuital: "∮B⋅dl = μ₀I_enclosed",
        permeability: "μ₀ = 4π × 10⁻⁷ T⋅m/A",
        units: {
          tesla: "1 T = 1 N/(A⋅m)",
          gauss: "1 G = 10⁻⁴ T"
        }
      },
      force: {
        lorentz: "F = q(E + v×B)",
        magnetic: "F = qvB sin(θ)",
        currentCarrying: "F = ILB sin(θ)"
      },
      induction: {
        faradayLaw: "ε = -dΦ/dt",
        lenzLaw: "Induced current opposes change",
        mutualInductance: "ε₁ = -M(dI₂/dt)",
        selfInductance: "ε = -L(dI/dt)"
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
    fundamentalConstants: {
      planck: {
        constant: "h = 6.62607015 × 10⁻³⁴ J⋅s",
        reduced: "ℏ = h/2π = 1.054571817 × 10⁻³⁴ J⋅s"
      },
      fineStructure: {
        value: "α ≈ 1/137.035999084",
        definition: "α = e²/ℏc",
        significance: "Coupling constant of electromagnetic interaction"
      }
    },
    waveFunctions: {
      properties: {
        normalization: "∫|ψ|²dτ = 1",
        probability: "P(x)dx = |ψ(x)|²dx",
        superposition: "ψ = Σcᵢψᵢ"
      },
      schrodingerEquation: {
        timeDependent: "iℏ∂ψ/∂t = Ĥψ",
        timeIndependent: "Ĥψ = Eψ",
        hamiltonianOperator: "Ĥ = -ℏ²/2m ∇² + V(r)",
        commonSolutions: {
          infiniteWell: {
            energies: "E_n = n²π²ℏ²/(2mL²)",
            wavefunctions: "ψ_n(x) = √(2/L)sin(nπx/L)"
          },
          harmonicOscillator: {
            energies: "E_n = ℏω(n + ½)",
            groundState: "ψ₀(x) ∝ e^(-mωx²/2ℏ)"
          },
          hydrogenAtom: {
            energies: "E_n = -13.6eV/n²",
            wavefunctions: "ψ_nlm(r,θ,φ) = R_nl(r)Y_lm(θ,φ)"
          }
        }
      }
    },
    uncertainty: {
      principles: {
        positionMomentum: "ΔxΔp ≥ ℏ/2",
        energyTime: "ΔEΔt ≥ ℏ/2",
        angularMomentum: "ΔLΔθ ≥ ℏ/2"
      },
      implications: [
        "No simultaneous precise measurements of conjugate variables",
        "Zero-point energy in quantum systems",
        "Quantum tunneling effects"
      ]
    },
    quantumNumbers: {
      principal: {
        symbol: "n",
        values: "1, 2, 3, ...",
        significance: "Total energy, orbital size"
      },
      angular: {
        symbol: "l",
        values: "0, 1, ..., n-1",
        names: ["s", "p", "d", "f"],
        significance: "Orbital shape"
      },
      magnetic: {
        symbol: "m_l",
        values: "-l, ..., 0, ..., +l",
        significance: "Orbital orientation"
      },
      spin: {
        symbol: "m_s",
        values: "-½, +½",
        significance: "Intrinsic angular momentum"
      }
    },
    particleProperties: {
      spin: {
        fermions: "Half-integer spin (½, 3/2, ...)",
        bosons: "Integer spin (0, 1, ...)",
        statistics: {
          fermiDirac: "n_i = 1/(e^((E_i-μ)/kT) + 1)",
          boseEinstein: "n_i = 1/(e^((E_i-μ)/kT) - 1)"
        }
      },
      waveparticle: {
        deBroglie: {
          wavelength: "λ = h/p",
          momentum: "p = h/λ"
        },
        compton: {
          wavelength: "Δλ = h/mc(1 - cos θ)",
          effect: "Wavelength shift in photon-particle scattering"
        }
      }
    },
    quantumMechanics: {
      operators: {
        position: "x̂ = x",
        momentum: "p̂ = -iℏ∇",
        energy: "Ê = iℏ∂/∂t",
        angularMomentum: "L̂ = r × p̂"
      },
      matrixMechanics: {
        pauliMatrices: {
          σx: [[0, 1], [1, 0]],
          σy: [[0, -i], [i, 0]],
          σz: [[1, 0], [0, -1]]
        },
        commutators: {
          positionMomentum: "[x̂,p̂] = iℏ",
          angularMomentum: "[L̂ᵢ,L̂ⱼ] = iℏεᵢⱼₖL̂ₖ"
        }
      }
    },
    quantumTechnology: {
      computing: {
        qubits: {
          states: "|0⟩, |1⟩",
          superposition: "α|0⟩ + β|1⟩",
          measurement: "Collapses to basis states"
        },
        gates: {
          single: ["Hadamard", "Phase", "NOT"],
          two: ["CNOT", "SWAP", "CZ"],
          universal: ["H", "T", "CNOT"]
        },
        algorithms: {
          shor: "Prime factorization",
          grover: "Database search",
          vqe: "Quantum chemistry simulation"
        }
      },
      cryptography: {
        bb84: {
          description: "Quantum key distribution protocol",
          security: "Based on no-cloning theorem"
        },
        entanglement: {
          bellStates: {
            phi: "(|00⟩ ± |11⟩)/√2",
            psi: "(|01⟩ ± |10⟩)/√2"
          }
        }
      }
    }
  },
  relativity: {
    special: {
      postulates: [
        "Laws of physics are the same in all inertial frames",
        "Speed of light is constant in all frames"
      ],
      kinematics: {
        timeDilation: {
          formula: "t = t₀/√(1-v²/c²)",
          properTime: "Time in rest frame",
          applications: ["Muon decay", "GPS corrections"]
        },
        lengthContraction: {
          formula: "L = L₀√(1-v²/c²)",
          properLength: "Length in rest frame",
          direction: "Only in direction of motion"
        },
        velocityAddition: {
          formula: "u' = (u + v)/(1 + uv/c²)",
          limit: "Cannot exceed speed of light"
        }
      },
      dynamics: {
        momentum: {
          formula: "p = γmv",
          gamma: "γ = 1/√(1-v²/c²)"
        },
        energy: {
          total: "E = γmc²",
          rest: "E₀ = mc²",
          kinetic: "K = mc²(γ-1)"
        },
        massEnergy: {
          equivalence: "E = mc²",
          implications: [
            "Mass-energy conservation",
            "Nuclear reactions",
            "Particle creation"
          ]
        }
      },
      spacetime: {
        metric: "ds² = c²dt² - dx² - dy² - dz²",
        intervals: {
          timelike: "ds² > 0",
          spacelike: "ds² < 0",
          lightlike: "ds² = 0"
        },
        lorentzTransformations: {
          time: "t' = γ(t - vx/c²)",
          space: "x' = γ(x - vt)",
          matrix: [
            ["γ", "-βγ"],
            ["-βγ", "γ"]
          ]
        }
      }
    },
    general: {
      principles: {
        equivalence: {
          weak: "Gravitational mass equals inertial mass",
          strong: "All physical laws are the same in any freely falling frame"
        },
        generalCovariance: "Physical laws must have same form in all coordinate systems",
        machPrinciple: "Inertia arises from interaction with rest of universe"
      },
      geometry: {
        metric: "gμν",
        geodesics: "d²xᵅ/dτ² + Γᵅᵦᵧ(dxᵦ/dτ)(dxᵧ/dτ) = 0",
        curvature: {
          riemann: "Rᵅᵦᵧᵟ",
          ricci: "Rᵅᵦ = Rᵧᵅᵧᵦ",
          scalar: "R = gᵅᵦRᵅᵦ"
        }
      },
      fieldEquations: {
        einstein: "Gμν + Λgμν = 8πG/c⁴ Tμν",
        components: {
          einstein: "Gμν = Rμν - ½Rgμν",
          stress: "Tμν",
          cosmological: "Λ"
        }
      },
      effects: {
        gravitationalRedshift: {
          formula: "z = GM/c²r",
          applications: ["GPS", "Stellar spectra"]
        },
        gravitationalLensing: {
          deflection: "θ = 4GM/c²b",
          types: ["Strong", "Weak", "Micro"]
        },
        gravitationalWaves: {
          polarizations: ["Plus", "Cross"],
          sources: ["Binary mergers", "Supernovae", "Early universe"],
          detection: "LIGO/VIRGO interferometers"
        }
      }
    },
    cosmology: {
      fundamentalParameters: {
        hubbleConstant: {
          value: "H₀ ≈ 67.4 km/s/Mpc",
          uncertainty: "±0.5 km/s/Mpc",
          tension: "Local vs. CMB measurements"
        },
        cosmologicalConstant: {
          value: "Λ ≈ 1.1056 × 10⁻⁵² m⁻²",
          energyDensity: "ρ_Λ ≈ 5.96 × 10⁻²⁷ kg/m³"
        },
        densityParameters: {
          matter: "Ω_m ≈ 0.315",
          radiation: "Ω_r ≈ 5.38 × 10⁻⁵",
          darkEnergy: "Ω_Λ ≈ 0.685",
          total: "Ω_total ≈ 1.001 ± 0.002"
        }
      },
      bigBang: {
        timeline: {
          planckEpoch: {
            time: "< 10⁻⁴³ s",
            temperature: "> 10³² K",
            description: "Quantum gravity regime"
          },
          grandUnification: {
            time: "10⁻⁴³ - 10⁻³⁶ s",
            temperature: "10³² - 10²⁸ K",
            events: ["Force separation", "Inflation begins"]
          },
          inflation: {
            time: "10⁻³⁶ - 10⁻³² s",
            expansion: "e⁶⁰ or more",
            features: [
              "Solves horizon problem",
              "Solves flatness problem",
              "Generates primordial fluctuations"
            ]
          },
          baryogenesis: {
            time: "10⁻³² - 10⁻¹² s",
            process: "Matter-antimatter asymmetry formation",
            ratio: "~10⁻⁹ matter excess"
          },
          nucleosynthesis: {
            time: "1 - 300 seconds",
            products: {
              hydrogen: "75%",
              helium4: "25%",
              deuterium: "~10⁻⁵",
              lithium7: "~10⁻¹⁰"
            }
          },
          recombination: {
            time: "380,000 years",
            temperature: "3000 K",
            event: "Formation of neutral atoms"
          }
        },
        evidence: {
          cmb: {
            temperature: "2.72548 ± 0.00057 K",
            anisotropies: "ΔT/T ~ 10⁻⁵",
            spectralFeatures: {
              blackbody: "Perfect to 1 part in 10⁵",
              acousticPeaks: "Confirms flat geometry"
            }
          },
          abundance: {
            predictions: "Match observed light element ratios",
            significance: "Confirms hot early universe"
          },
          expansion: {
            redshift: "z = H₀d/c",
            evidence: "Galaxy recession velocities"
          }
        }
      },
      expansion: {
        friedmannEquations: {
          first: "ä/a = -(4πG/3)(ρ + 3p/c²) + Λc²/3",
          second: "(ȧ/a)² = (8πGρ/3) - kc²/a² + Λc²/3",
          fluid: "ρ̇ + 3(ȧ/a)(ρ + p/c²) = 0"
        },
        scaleFactor: {
          definition: "a(t)",
          normalizedToday: "a(t₀) = 1",
          redshiftRelation: "1 + z = 1/a(t)"
        },
        expansionHistory: {
          radiation: {
            scaleFactor: "a(t) ∝ t^(1/2)",
            density: "ρ_r ∝ a⁻⁴"
          },
          matter: {
            scaleFactor: "a(t) ∝ t^(2/3)",
            density: "ρ_m ∝ a⁻³"
          },
          darkEnergy: {
            scaleFactor: "a(t) ∝ e^(Ht)",
            density: "ρ_Λ = constant"
          }
        }
      },
      darkMatter: {
        evidence: {
          galaxyRotation: {
            observation: "Flat rotation curves",
            implication: "Extended dark matter halos"
          },
          gravitationalLensing: {
            weak: "Statistical mass mapping",
            strong: "Multiple images, Einstein rings"
          },
          clusterDynamics: {
            bulletCluster: "Direct proof of dark matter",
            massToLight: "M/L increases with scale"
          }
        },
        candidates: {
          wimps: {
            mass: "1-1000 GeV",
            interaction: "Weak force",
            detection: ["Direct detection", "Collider searches"]
          },
          axions: {
            mass: "10⁻⁶-10⁻³ eV",
            origin: "Strong CP problem",
            detection: "Axion haloscopes"
          }
        }
      },
      darkEnergy: {
        properties: {
          equationOfState: "w = p/ρ ≈ -1",
          dynamics: {
            quintessence: "Scalar field models",
            modifiedGravity: "Alternative to dark energy"
          }
        },
        observations: {
          supernovae: {
            type: "Type Ia standard candles",
            discovery: "1998 Nobel Prize",
            evidence: "Accelerating expansion"
          },
          bao: {
            scale: "~150 Mpc",
            use: "Standard ruler",
            measurements: "Large-scale structure"
          }
        }
      },
      structure: {
        formation: {
          linearTheory: {
            growthFactor: "D(a) ∝ a in matter era",
            transferFunction: "T(k)",
            powerSpectrum: "P(k) = A k^n T²(k)"
          },
          nonlinear: {
            collapse: "δ > 1.69",
            virializationDensity: "ρ_vir ≈ 200ρ_crit",
            massFunction: "Press-Schechter theory"
          }
        },
        hierarchy: {
          filaments: {
            scale: "50-80 Mpc",
            description: "Cosmic web structure"
          },
          clusters: {
            mass: "10¹⁴-10¹⁵ M_☉",
            temperature: "10⁷-10⁸ K"
          },
          galaxies: {
            types: ["Spiral", "Elliptical", "Irregular"],
            mass: "10⁹-10¹² M_☉"
          }
        }
      },
      future: {
        scenarios: {
          bigRip: {
            condition: "w < -1",
            timing: "Finite time singularity"
          },
          bigCrunch: {
            condition: "Ω > 1",
            description: "Re-collapse of universe"
          },
          heatDeath: {
            condition: "Λ > 0",
            description: "Eternal exponential expansion"
          }
        },
        degenerate: {
          protonDecay: "τ > 10³⁴ years",
          blackHoleEvaporation: "τ ∝ M³",
          temperature: "T → 0 as t → ∞"
        }
      }
    }
  }
};