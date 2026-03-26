import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="swrap">
        <p className="sec-tag">— RECOGNITION</p>
        <h2 className="sec-title">
          My <span>Achievements</span>
        </h2>

        <div className="ach-grid">

          <div className="ach-card reveal">
            <h3>300+ DSA Problems</h3>
            <p>Strong problem solving across DS topics</p>
          </div>

          <div className="ach-card reveal">
            <h3>Hackathon Finalist</h3>
            <p>Coding Ninjas Binary Blitz</p>
          </div>

          <div className="ach-card reveal">
            <h3>Live Apps</h3>
            <p>Deployed real-world applications</p>
          </div>

        </div>
      </div>
    </section>
  );
}