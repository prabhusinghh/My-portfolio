import Hero from "./components/Hero";

import useCursor from "./hooks/useCursor";
import useParticles from "./hooks/useParticles";
import useScrollReveal from "./hooks/useScrollReveal";
import useCountUp from "./hooks/useCountUp";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  // 🎯 Core effects
  useCursor();
  useParticles();

  // 🚀 New animations
  useScrollReveal();
  useCountUp();

  return (
    <>
      {/* Background */}
      <canvas id="bgCanvas"></canvas>

      {/* Custom Cursor */}
      <div id="cur"></div>
      <div id="cur2"></div>

      {/* Content */}
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
<Achievements />
<Education />
<Contact />
    </>
  );
}

export default App;