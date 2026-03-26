import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="swrap">
        <p className="sec-tag">— CREDENTIALS</p>
        <h2 className="sec-title">
          My <span>Certifications</span>
        </h2>

        <div className="cert-grid">

          <div className="cert-card reveal">
            <div className="cert-icon">☁️</div>

            <div className="cert-info">
    <h3>Cloud Computing</h3>
    <p>NPTEL · May 2025</p>
  </div>
  <a 
    href="https://your-certificate-link.com" 
    target="_blank" 
    className="cert-btn"
  >
    View →
  </a>
          </div>

          <div className="cert-card reveal">
            <div className="cert-icon">🤖</div>
            <div className="cert-info">
              <h3>Generative AI</h3>
              <p>Infosys Springboard</p>
            </div> 
            <a 
    href="https://your-certificate-link.com" 
    target="_blank" 
    className="cert-btn"
  >
    View →
  </a>     
          </div>

          <div className="cert-card reveal">
            <div className="cert-icon">💻</div>
            <div className="cert-info">
              <h3>Full Stack Dev</h3>
              <p>Udemy · 2024</p>
            </div>  
            <a 
    href="https://your-certificate-link.com" 
    target="_blank" 
    className="cert-btn"
  >
    View →
  </a>
          </div>

        </div>
      </div>
    </section>
  );
}