import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="swrap">

        <p className="sec-tag">— ARSENAL</p>

        <h2 className="sec-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {/* LANGUAGES */}
          <div className="skill-card reveal">
            <div className="skill-icon">💻</div>
            <h3>Languages</h3>

            <div className="skill-tags">
              <span className="t-purple">C++</span>
              <span className="t-purple">Java</span>
              <span className="t-purple">Python</span>
            </div>
          </div>

          {/* CORE CS */}
          <div className="skill-card reveal">
            <div className="skill-icon">🧠</div>
            <h3>Core CS</h3>

            <div className="skill-tags">
              <span className="t-red">DSA</span>
              <span className="t-red">OOPs</span>
              <span className="t-red">OS</span>
              <span className="t-red">DBMS</span>
            </div>
          </div>

          {/* DATABASE */}
          <div className="skill-card reveal">
            <div className="skill-icon">🗄️</div>
            <h3>Databases</h3>

            <div className="skill-tags">
              <span className="t-cyan">MySQL</span>
              <span className="t-cyan">MongoDB</span>
              <span className="t-cyan">Indexing</span>
              <span className="t-cyan">CRUD</span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-card reveal">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>

            <div className="skill-tags">
              <span className="t-yellow">Node.js</span>
              <span className="t-yellow">Express</span>
              <span className="t-yellow">REST APIs</span>
              <span className="t-yellow">Auth</span>
            </div>
          </div>

          {/* FRONTEND */}
          <div className="skill-card reveal">
            <div className="skill-icon">🎨</div>
            <h3>Frontend</h3>

            <div className="skill-tags">
              <span className="t-purple">React</span>
              <span className="t-purple">Tailwind</span>
              <span className="t-purple">HTML/CSS</span>
              <span className="t-purple">JavaScript</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-card reveal">
            <div className="skill-icon">🛠️</div>
            <h3>Tools</h3>

            <div className="skill-tags">
              <span className="t-red">Git</span>
              <span className="t-red">Postman</span>
              <span className="t-red">Firebase</span>
              <span className="t-red">Vercel</span>
              <span className="t-red">Linux</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}