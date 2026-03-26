import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="swrap">
        <p className="sec-tag">— EXPERIENCE</p>
        <h2 className="sec-title">
          Training & <span>Internships</span>
        </h2>

        <div className="exp-card reveal">
          <div className="exp-left">☕</div>

          <div className="exp-content">
            <h3>Java Application Development</h3>
            <p className="exp-meta">
              // Summer Training · LPU · Jun–Jul 2025
            </p>

            <p className="exp-desc">
              Developed GUI-based Quiz App using OOP, JDBC,
              timers, lifelines, and real-time scoring.
            </p>

            <div className="exp-tags">
              <span>Java</span>
              <span>Swing / AWT</span>
              <span>JDBC</span>
              <span>OOP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}