import { useEffect } from "react";
import "./Projects.css";

export default function Projects() {

  // 3D Tilt Effect
  useEffect(() => {
    const cards = document.querySelectorAll(".proj-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
          perspective(1000px)
          rotateY(${x * 10}deg)
          rotateX(${-y * 8}deg)
          translateY(-8px)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }, []);

  return (
    <section id="projects">
      <div className="swrap">
        <h2 className="proj-title reveal">
          Featured <span>Projects</span>
        </h2>

        <div className="proj-grid">

          {/* CARD 1 */}
          <div className="proj-card reveal">
  <div className="proj-banner pb1">

    {/* 🟢 LIVE BADGE */}
    <div className="proj-live">
      <span className="live-dot"></span> LIVE
    </div>

    {/* 📸 IMAGE (replace later) */}
    <img src="/images/goal-ledger.png" alt="Goal Ledger" />
  </div>

  <div className="proj-body">
    <h3>Goal Ledger</h3>

    <p>
      Daily goal tracker with authentication, REST APIs,
      and PWA support.
      <br />
      <a href="https://github.com/your-repo" target="_blank">
        View GitHub →
      </a>
    </p>

    <div className="proj-techs">
      <span>React</span>
      <span>Firebase</span>
      <span>Tailwind</span>
    </div>
  </div>
</div>

          {/* CARD 2 */}
          <div className="proj-card reveal">
  <div className="proj-banner pb1">

    {/* 🟢 LIVE BADGE */}
    <div className="proj-live">
      <span className="live-dot"></span> LIVE
    </div>

    {/* 📸 IMAGE (replace later) */}
    <img src="/images/goal-ledger.png" alt="Goal Ledger" />
  </div>

  <div className="proj-body">
    <h3>Goal Ledger</h3>

    <p>
      Daily goal tracker with authentication, REST APIs,
      and PWA support.
      <br />
      <a href="https://github.com/your-repo" target="_blank">
        View GitHub →
      </a>
    </p>

    <div className="proj-techs">
      <span>React</span>
      <span>Firebase</span>
      <span>Tailwind</span>
    </div>
  </div>
</div>

          {/* CARD 3 */}
          <div className="proj-card reveal">
  <div className="proj-banner pb1">

    {/* 🟢 LIVE BADGE */}
    <div className="proj-live">
      <span className="live-dot"></span> LIVE
    </div>

    {/* 📸 IMAGE (replace later) */}
    <img src="/images/goal-ledger.png" alt="Goal Ledger" />
  </div>

  <div className="proj-body">
    <h3>Goal Ledger</h3>

    <p>
      Daily goal tracker with authentication, REST APIs,
      and PWA support.
      <br />
      <a href="https://github.com/your-repo" target="_blank">
        View GitHub →
      </a>
    </p>

    <div className="proj-techs">
      <span>React</span>
      <span>Firebase</span>
      <span>Tailwind</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}