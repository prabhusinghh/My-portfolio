import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Goal Ledger – A Daily Goal Tracker Web Application",
      date: "Feb ’25 – Present",
      live: "https://goalledger.vercel.app/",
      github: "https://github.com/prabhusinghh/my-goal-tracker",
      img: "/goal.png", // 🔥 put image in public/images
      points: [
        "Designed modular REST architecture with structured route separation and middleware validation.",
        "Structured modular routes and models for maintainability and scalability.",
        "Integrated token-based authentication to prevent unauthorized access.",
        "Deployed via Vercel with responsive mobile-first PWA design.",
        "Tech: HTML, JavaScript, Tailwind CSS, React.js, Firebase"
      ]
    },
    {
      title: "FitCoach AI – AI-Powered Fitness Tracking & Coaching Platform",
      date: "Mar ’26 – Present",
      live: "http://fitcoach-ai-bot.vercel.app/",
      github: "https://github.com/prabhusinghh/fitcoach-ai",
      img: "/fitcoach.png", // 🔥 add image
      points: [
        "Architected full-stack fitness system with user-specific data isolation.",
        "Built AI coaching assistant using LLM APIs for contextual responses.",
        "Engineered authenticated APIs with JWT-based access control.",
        "Resolved runtime crashes from null/undefined data using defensive rendering.",
        "Tech: Next.js, React, Supabase, Groq API, REST APIs, Vercel"
      ]
    }
  ];

  return (
    <section id="projects">
      <div className="swrap">

        <h2 className="proj-title">
          Projects
        </h2>

        <div className="proj-list">
          {projects.map((proj, i) => (
            <div className="proj-item" key={i}>

              {/* LEFT IMAGE */}
              <div className="proj-img">
                <img src={proj.img} alt={proj.title} />
              </div>

              {/* RIGHT CONTENT */}
              <div className="proj-content">

                <div className="proj-header">
                  <h3>
                    {proj.title}{" "}
                    {proj.live !== "#" && (
                      <a href={proj.live} target="_blank" rel="noreferrer">
                        | Live
                      </a>
                    )}
                  </h3>

                  <span className="proj-date">{proj.date}</span>
                </div>

                <ul>
                  {proj.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-github"
                >
                  View GitHub →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}