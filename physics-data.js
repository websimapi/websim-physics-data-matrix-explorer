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
        },
        {
          name: "Angular Velocity",
          symbol: "ω",
          unit: "rad/s",
          formula: "ω = dθ/dt",
          description: "Rate of change of angular position"
        },
        {
          name: "Angular Acceleration",
          symbol: "α",
          unit: "rad/s²",
          formula: "α = dω/dt",
          description: "Rate of change of angular velocity"
        },
        {
          name: "Centripetal Acceleration",
          symbol: "a_c",
          unit: "m/s²",
          formula: "a_c = v²/r = ω²r",
          description: "Acceleration toward center of circular motion"
        }
      ],
      equations: {
        uniformMotion: {
          displacement: "x = x₀ + vt",
          velocity: "v = v₀ + at",
          position: "x = x₀ + v₀t + ½at²",
          velocitySquared: "v² = v₀² + 2a(x - x₀)"
        },
        projectileMotion: {
          range: "R = (v₀² sin(2θ))/g",
          maxHeight: "h_max = (v₀² sin²(θ))/(2g)",
          timeOfFlight: "T = (2v₀ sin(θ))/g",
          trajectory: "y = x tan(θ) - (gx²)/(2v₀² cos²(θ))"
        }
      },
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
        },
        {
          name: "Spring Force",
          formula: "F = -kx",
          description: "Hooke's Law - Force exerted by spring",
          constant: "k = spring constant (N/m)"
        },
        {
          name: "Drag Force",
          formula: "F_d = ½ρv²C_dA",
          description: "Force due to fluid resistance",
          variables: {
            "ρ": "fluid density",
            "v": "velocity",
            "C_d": "drag coefficient",
            "A": "cross-sectional area"
          }
        },
        {
          name: "Tension",
          description: "Force transmitted through a string or cable",
          applications: ["Pulleys", "Bridges", "Elevators"]
        }
      ],
      collisions: {
        elastic: {
          description: "Kinetic energy is conserved",
          equations: {
            oneD: "v₁' = ((m₁-m₂)v₁ + 2m₂v₂)/(m₁+m₂)",
            coefficientOfRestitution: "e = 1"
          }
        },
        inelastic: {
          description: "Kinetic energy is not conserved",
          perfectlyInelastic: "v' = (m₁v₁ + m₂v₂)/(m₁+m₂)",
          coefficientOfRestitution: "0 ≤ e < 1"
        }
      }
    },
    rotationalMotion: {
      concepts: {
        torque: {
          formula: "τ = r × F = rF sin(θ)",
          unit: "N⋅m",
          description: "Rotational force"
        },
        angularMomentum: {
          formula: "L = Iω",
          conservation: "L = constant (in absence of external torques)"
        },
        momentOfInertia: {
          formula: "I = ∑mr²",
          commonShapes: {
            solidSphere: "I = (2/5)MR²",
            hollowSphere: "I = (2/3)MR²",
            solidCylinder: "I = (1/2)MR²",
            rod: {
              aboutEnd: "I = (1/3)ML²",
              aboutCenter: "I = (1/12)ML²"
            }
          }
        }
      }
    },
    oscillations: {
      simpleHarmonic: {
        position: "x = A cos(ωt + φ)",
        velocity: "v = -Aω sin(ωt + φ)",
        acceleration: "a = -Aω² cos(ωt + φ)",
        period: {
          massSpring: "T = 2π√(m/k)",
          simplePendulum: "T = 2π√(L/g)"
        },
        energy: {
          potential: "U = ½kx²",
          kinetic: "K = ½mv²",
          total: "E = ½kA²"
        }
      },
      dampedOscillations: {
        equation: "ẍ + 2βẋ + ω₀²x = 0",
        types: ["Underdamped", "Critically Damped", "Overdamped"],
        decayConstant: "x = A₀e^(-βt)cos(ωt)"
      },
      forcedOscillations: {
        resonance: {
          frequency: "ω_r = √(ω₀² - 2β²)",
          amplitude: "A = F₀/√((ω₀² - ω²)² + 4β²ω²)"
        }
      }
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
      },
      {
        name: "Zeroth Law",
        applications: ["Temperature Measurements", "Thermal Equilibrium"],
        implications: ["Defines temperature scale", "Basis for thermometry"]
      }
    ],
    concepts: {
      temperature: {
        scales: ["Kelvin", "Celsius", "Fahrenheit"],
        conversions: {
          KtoC: "°C = K - 273.15",
          CtoF: "°F = (°C × 9/5) + 32"
        },
        absoluteScale: {
          definition: "Based on triple point of water",
          triplePoint: "273.16 K",
          absoluteZero: "-273.15°C = 0 K",
          conversion: {
            KtoC: "T(°C) = T(K) - 273.15",
            CtoF: "T(°F) = T(°C) × 9/5 + 32",
            KtoF: "T(°F) = T(K) × 9/5 - 459.67",
            CtoK: "T(K) = T(°C) + 273.15"
          }
        }
      },
      idealGasLaw: {
        equation: "PV = nRT",
        variables: {
          "P": "Pressure (Pa)",
          "V": "Volume (m³)",
          "n": "Number of moles",
          "R": "Gas constant (8.314 J/(mol·K))",
          "T": "Temperature (K)"
        },
        specialCases: {
          boyleLaw: "P₁V₁ = P₂V₂ (constant T, n)",
          charlesLaw: "V₁/T₁ = V₂/T₂ (constant P, n)",
          gayLussacLaw: "P₁/T₁ = P₂/T₂ (constant V, n)",
          avogadroLaw: "V ∝ n (constant P, T)"
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
      },
      polytropic: {
        equation: "PV^n = constant",
        specialCases: {
          isothermal: "n = 1",
          isobaric: "n = 0",
          isochoric: "n = ∞",
          adiabatic: "n = γ (specific heat ratio)"
        }
      },
      carnot: {
        efficiency: "η = 1 - T_c/T_h",
        cycle: ["Isothermal Expansion", "Adiabatic Expansion", "Isothermal Compression", "Adiabatic Compression"],
        significance: "Maximum possible efficiency for heat engine"
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
      },
      thermalConductivity: {
        formula: "k = QL/(AΔT)",
        units: "W/(m·K)",
        commonMaterials: {
          copper: "385 W/(m·K)",
          aluminum: "205 W/(m·K)",
          steel: "50.2 W/(m·K)",
          water: "0.6 W/(m·K)",
          air: "0.024 W/(m·K)"
        }
      },
      phaseChanges: {
        latentHeat: {
          fusion: "Q = mL_f",
          vaporization: "Q = mL_v",
          sublimation: "Q = mL_s"
        },
        waterConstants: {
          fusionHeat: "334 kJ/kg",
          vaporizationHeat: "2260 kJ/kg"
        }
      },
      stefan_boltzmann: {
        law: "P = εσAT⁴",
        constant: "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)"
      }
    },
    entropy: {
      definition: "dS = dQ_rev/T",
      changes: {
        irreversible: "ΔS > Q/T",
        reversible: "ΔS = Q/T",
        isolated: "ΔS ≥ 0"
      },
      statistical: {
        boltzmann: "S = k_B ln(W)",
        constant: "k_B = 1.380649 × 10⁻²³ J/K"
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
      },
      fieldTheory: {
        gaussLaw: {
          integral: "∮E⋅dA = Q_enc/ε₀",
          differential: "∇⋅E = ρ/ε₀",
          applications: ["Spherical", "Cylindrical", "Planar"]
        },
        potential: {
          pointCharge: "V = kq/r",
          capacitor: "V = Ed",
          work: "W = qΔV"
        },
        energy: {
          fieldEnergy: "u = ½ε₀E²",
          potentialEnergy: "U = kq₁q₂/r"
        }
      },
      dielectrics: {
        permittivity: "ε = ε₀ε_r",
        polarization: "P = ε₀χ_eE",
        displacement: "D = ε₀E + P"
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
      },
      biot_savart: {
        law: "dB = (μ₀/4π)(Idl × r̂/r²)",
        applications: {
          infiniteWire: "B = μ₀I/(2πr)",
          solenoid: "B = μ₀nI",
          toroid: "B = μ₀NI/(2πr)"
        }
      },
      ampere: {
        law: "∮B⋅dl = μ₀I_enc",
        maxwell_correction: "∮B⋅dl = μ₀(I + ε₀dΦ_E/dt)"
      },
      induction: {
        faraday: "ε = -dΦ_B/dt",
        lenz: "Induced current opposes change",
        motional: "ε = vBL",
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
    electromagnetic_waves: {
      maxwell: {
        waveEquation: "∇²E = (1/c²)∂²E/∂t²",
        speedOfLight: "c = 1/√(ε₀μ₀)",
        energyDensity: "u = ½(ε₀E² + B²/μ₀)",
        poyntingVector: "S = (1/μ₀)E × B"
      },
      spectrum: {
        radio: "λ > 1 cm",
        microwave: "1 mm - 1 cm",
        infrared: "750 nm - 1 mm",
        visible: "380 nm - 750 nm",
        ultraviolet: "10 nm - 380 nm",
        xray: "0.01 nm - 10 nm",
        gamma: "λ < 0.01 nm"
      }
    },
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
    fundamentals: {
      planckConstants: {
        h: "6.62607015 × 10⁻³⁴ J⋅s",
        ℏ: "1.054571817 × 10⁻³⁴ J⋅s",
        applications: ["Quantization", "Wave-particle duality"]
      },
      deBroglie: {
        wavelength: "λ = h/p",
        momentum: "p = h/λ",
        applications: ["Electron microscopy", "Particle diffraction"]
      },
      waveFunctions: {
        properties: ["Continuous", "Single-valued", "Square-integrable"],
        normalization: "∫|ψ|²dτ = 1",
        superposition: "ψ = c₁ψ₁ + c₂ψ₂",
        collapse: "Upon measurement, wavefunction collapses to eigenstate"
      }
    },
    operators: {
      position: "x̂ = x",
      momentum: "p̂ = -iℏ∇",
      energy: "Ê = iℏ∂/∂t",
      angular: "L̂ = -iℏ(r × ∇)",
      commutators: {
        positionMomentum: "[x̂,p̂] = iℏ",
        angularMomentum: "[L̂ᵢ,L̂ⱼ] = iℏεᵢⱼₖL̂ₖ"
      }
    },
    quantumSystems: {
      particleInBox: {
        wavefunction: "ψₙ(x) = √(2/L)sin(nπx/L)",
        energy: "Eₙ = n²π²ℏ²/(2mL²)",
        applications: ["Particle confinement", "Energy quantization"]
      },
      harmonicOscillator: {
        energy: "Eₙ = ℏω(n + ½)",
        wavefunction: "ψₙ(x) = NₙHₙ(αx)e^(-α²x²/2)",
        applications: ["Molecular vibrations", "Field theory"]
      },
      hydrogenAtom: {
        energy: "Eₙ = -13.6 eV/n²",
        wavefunctions: "ψ_nlm(r,θ,φ) = R_nlm(r)Y_lmm(θ,φ)",
        quantumNumbers: {
          principal: "n ≥ 1",
          angular: "0 ≤ l ≤ n-1",
          magnetic: "-l ≤ m ≤ l",
          spin: "mₛ = ±½"
        }
      }
    },
    quantumMechanics: {
      spin: {
        properties: {
          magnitude: "S = √(s(s+1))ℏ",
          projection: "Sᵢ = mₛℏ",
          types: ["Fermions (½)", "Bosons (1)"]
        },
        pauliMatrices: {
          σx: [[0, 1], [1, 0]],
          σy: [[0, -i], [i, 0]],
          σz: [[1, 0], [0, -1]]
        }
      },
      tunneling: {
        probability: "T ≈ e^(-2κL)",
        applications: ["Alpha decay", "STM microscopy", "Quantum computing"]
      },
      perturbationTheory: {
        firstOrder: "E¹ = ⟨ψ⁰|H'|ψ⁰⟩",
        secondOrder: "E² = Σₙ|⟨ψₙ⁰|H'|ψ⁰⟩|²/(E⁰-Eₙ⁰)"
      }
    },
    quantumField: {
      secondQuantization: {
        creation: "â†|n⟩ = √(n+1)|n+1⟩",
        annihilation: "â|n⟩ = √n|n-1⟩",
        number: "N̂ = â†â"
      },
      qft: {
        vacuum: "State of minimum energy",
        propagator: "Δ(x-y) = ⟨0|T{φ(x)φ(y)}|0⟩",
        interactions: ["QED", "QCD", "Electroweak"]
      }
    },
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
      },
      lorentzTransformations: {
        time: "t' = γ(t - vx/c²)",
        space: "x' = γ(x - vt)",
        gamma: "γ = 1/√(1-v²/c²)",
        velocityAddition: "u' = (u-v)/(1-uv/c²)"
      },
      spacetime: {
        interval: "ds² = c²dt² - dx² - dy² - dz²",
        properTime: "dτ = dt/γ",
        fourVectors: {
          position: "xᵅ = (ct, x, y, z)",
          momentum: "pᵅ = (E/c, px, py, pz)",
          velocity: "uᵅ = γ(c, vx, vy, vz)"
        }
      },
      dynamics: {
        momentum: "p = γmv",
        energy: {
          total: "E = γmc²",
          kinetic: "K = mc²(γ-1)",
          rest: "E₀ = mc²"
        },
        massEnergy: {
          equivalence: "E = mc²",
          implications: ["Nuclear energy", "Particle creation"]
        }
      }
    },
    general: {
      principles: [
        "Principle of Equivalence",
        "Curved Spacetime",
        "Gravitational Time Dilation"
      ],
      geometry: {
        metric: "gᵅᵦ",
        christoffel: "Γᵅᵦᵧ = ½gᵅᵈ(∂ᵦgᵧᵈ + ∂ᵧgᵦᵈ - ∂ᵈgᵦᵧ)",
        riemann: "Rᵅᵦᵧᵈ = ∂ᵧΓᵅᵦᵈ - ∂ᵦΓᵅᵧᵈ + ΓᵅᵧₑΓᵉᵦᵈ - ΓᵅᵦₑΓᵉᵧᵈ"
      },
      einsteinEquations: {
        full: "Gᵅᵦ + Λgᵅᵦ = (8πG/c⁴)Tᵅᵦ",
        components: {
          einstein: "Gᵅᵦ = Rᵅᵦ - ½Rgᵅᵦ",
          stress: "Tᵅᵦ = Energy-momentum tensor",
          cosmological: "Λ = Cosmological constant"
        }
      },
      solutions: {
        schwarzschild: {
          metric: "ds² = -(1-2GM/rc²)c²dt² + (1-2GM/rc²)⁻¹dr² + r²dΩ²",
          horizonRadius: "rs = 2GM/c²",
          orbitalPrecession: "Δφ = 6πGM/(c²a)"
        },
        kerr: {
          properties: ["Rotating black hole", "Ergosphere", "Frame dragging"],
          horizons: ["Inner", "Outer"]
        },
        friedmann: {
          equations: {
            first: "H² = (8πGρ/3) - kc²/a² + Λc²/3",
            second: "ä/a = -(4πG/3)(ρ + 3p/c²) + Λc²/3"
          },
          scale: "a(t)"
        }
      }
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
      },
      standardModel: {
        epochs: [
          "Planck era (t < 10⁻⁴³s)",
          "Grand unification (10⁻⁴³s - 10⁻³⁶s)",
          "Electroweak (10⁻³⁶s - 10⁻¹²s)",
          "Quark (10⁻¹²s - 10⁻⁶s)",
          "Hadron (10⁻⁶s - 1s)",
          "Nucleosynthesis (1s - 3min)",
          "Matter domination (47,000y - present)"
        ],
        parameters: {
          hubble: "H₀ ≈ 67.4 km/s/Mpc",
          density: "Ω = ρ/ρc",
          age: "13.8 billion years"
        }
      }
    }
  }
};