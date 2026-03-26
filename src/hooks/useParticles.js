import { useEffect } from "react";

export default function useParticles() {
  useEffect(() => {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W, H;
    let particles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "rgba(124,92,252,",
      "rgba(255,107,107,",
      "rgba(45,212,191,",
      "rgba(255,179,71,",
    ];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2 + 0.5;
        this.color =
          colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ")";
        ctx.fill();
      }
    }

    for (let i = 0; i < 140; i++) {
      particles.push(new Particle());
    }

    let mouseX = W / 2;
    let mouseY = H / 2;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,92,252,${
              0.08 * (1 - dist / 100)
            })`;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          p.vx += dx / dist * 0.05;
          p.vy += dy / dist * 0.05;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.update();
        p.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
}