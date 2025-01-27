// Interactive physics demonstrations
export class PhysicsDemo {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  createKinematicsDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ball.setAttribute("cx", "20");
    ball.setAttribute("cy", "100");
    ball.setAttribute("r", "10");
    ball.setAttribute("fill", "#3498db");

    const animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animation.setAttribute("attributeName", "cx");
    animation.setAttribute("from", "20");
    animation.setAttribute("to", "280");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "indefinite");
    
    ball.appendChild(animation);
    svg.appendChild(ball);
    
    return svg;
  }

  createWaveDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "#3498db");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-width", "2");

    let phase = 0;
    const animate = () => {
      const points = [];
      for (let x = 0; x < 300; x += 5) {
        const y = 100 + Math.sin(x * 0.05 + phase) * 50;
        points.push(`${x},${y}`);
      }
      path.setAttribute("d", `M ${points.join(" L ")}`);
      phase += 0.1;
      requestAnimationFrame(animate);
    };

    svg.appendChild(path);
    animate();
    
    return svg;
  }

  createThermodynamicsDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    // Create particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      particle.setAttribute("r", "4");
      particle.setAttribute("fill", "#e74c3c");
      
      const animX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animX.setAttribute("attributeName", "cx");
      animX.setAttribute("from", Math.random() * 280 + 10);
      animX.setAttribute("to", Math.random() * 280 + 10);
      animX.setAttribute("dur", Math.random() * 2 + 1 + "s");
      animX.setAttribute("repeatCount", "indefinite");
      
      const animY = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animY.setAttribute("attributeName", "cy");
      animY.setAttribute("from", Math.random() * 180 + 10);
      animY.setAttribute("to", Math.random() * 180 + 10);
      animY.setAttribute("dur", Math.random() * 2 + 1 + "s");
      animY.setAttribute("repeatCount", "indefinite");
      
      particle.appendChild(animX);
      particle.appendChild(animY);
      svg.appendChild(particle);
    }
    
    return svg;
  }

  createElectromagneticDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    const magnet = document.createElementNS("http://www.w3.org/2000/svg", "path");
    magnet.setAttribute("d", "M 50,80 L 250,80 L 250,120 L 50,120 Z");
    magnet.setAttribute("fill", "#e74c3c");

    // Add magnetic field lines
    for (let i = 0; i < 5; i++) {
      const fieldLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
      fieldLine.setAttribute("d", `M ${70 + i * 40},50 Q 150,${80 + i * 10} ${230 - i * 40},150`);
      fieldLine.setAttribute("stroke", "#3498db");
      fieldLine.setAttribute("fill", "none");
      fieldLine.setAttribute("stroke-width", "2");
      svg.appendChild(fieldLine);
    }

    svg.appendChild(magnet);
    return svg;
  }

  createQuantumDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    // Create electron probability cloud
    const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    nucleus.setAttribute("cx", "150");
    nucleus.setAttribute("cy", "100");
    nucleus.setAttribute("r", "8");
    nucleus.setAttribute("fill", "#e74c3c");

    const orbits = [30, 50, 70];
    orbits.forEach(radius => {
      const orbit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      orbit.setAttribute("cx", "150");
      orbit.setAttribute("cy", "100");
      orbit.setAttribute("r", radius);
      orbit.setAttribute("fill", "none");
      orbit.setAttribute("stroke", "#3498db");
      orbit.setAttribute("stroke-width", "2");
      orbit.setAttribute("stroke-opacity", "0.5");
      
      const electron = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      electron.setAttribute("r", "4");
      electron.setAttribute("fill", "#3498db");
      
      const animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
      animateMotion.setAttribute("dur", (radius / 20) + "s");
      animateMotion.setAttribute("repeatCount", "indefinite");
      animateMotion.setAttribute("path", `M ${radius},0 A ${radius},${radius} 0 1,1 ${-radius},0 A ${radius},${radius} 0 1,1 ${radius},0`);
      
      electron.appendChild(animateMotion);
      svg.appendChild(orbit);
      svg.appendChild(electron);
    });

    svg.appendChild(nucleus);
    return svg;
  }

  createRelativityDemo() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 300 200");
    svg.classList.add("demo-svg");

    // Create spacetime grid
    for (let i = 0; i < 15; i++) {
      const verticalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      verticalLine.setAttribute("x1", 20 * i);
      verticalLine.setAttribute("y1", "0");
      verticalLine.setAttribute("x2", 20 * i);
      verticalLine.setAttribute("y2", "200");
      verticalLine.setAttribute("stroke", "#bdc3c7");
      verticalLine.setAttribute("stroke-width", "1");
      
      const horizontalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      horizontalLine.setAttribute("x1", "0");
      horizontalLine.setAttribute("y1", 20 * i);
      horizontalLine.setAttribute("x2", "300");
      horizontalLine.setAttribute("y2", 20 * i);
      horizontalLine.setAttribute("stroke", "#bdc3c7");
      horizontalLine.setAttribute("stroke-width", "1");
      
      svg.appendChild(verticalLine);
      svg.appendChild(horizontalLine);
    }

    // Add massive object causing spacetime curvature
    const massiveObject = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    massiveObject.setAttribute("cx", "150");
    massiveObject.setAttribute("cy", "100");
    massiveObject.setAttribute("r", "20");
    massiveObject.setAttribute("fill", "#e74c3c");

    svg.appendChild(massiveObject);
    return svg;
  }
}