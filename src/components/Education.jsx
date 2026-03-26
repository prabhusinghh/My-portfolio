import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="swrap">
        <p className="sec-tag">— ACADEMIC JOURNEY</p>
        <h2 className="sec-title">
          My <span>Education</span>
        </h2>

        <div className="edu-list">

          <div className="edu-item reveal">
            <h3>Lovely Professional University</h3>
            <p>B.Tech CSE · CGPA: 7.1</p>
          </div>

          <div className="edu-item reveal">
            <h3>Global Public School</h3>
            <p>Intermediate · 65.8%</p>
          </div>

          <div className="edu-item reveal">
            <h3>M.K DAV School</h3>
            <p>Matriculation · 94.8%</p>
          </div>

        </div>
      </div>
    </section>
  );
}