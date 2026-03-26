import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const words = [
    "Software Developer",
    "Backend Engineer",
    "DSA Problem Solver",
    "Full Stack Dev",
    "Building the Future",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Morph typing effect
useEffect(() => {
  const word = words[wordIndex];

  const timeout = setTimeout(() => {
    if (!deleting) {
      setText(word.slice(0, text.length + 1));

      // when word completes → pause
      if (text.length === word.length) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
    } else {
      setText(word.slice(0, text.length - 1));

      if (text.length === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, deleting ? 40 : 80);

  return () => clearTimeout(timeout);
}, [text, deleting, wordIndex, words]);
  return (
    <section id="hero">
      <div className="hero-grid">
        {/* LEFT */}
        <div>
          <div className="hero-eyebrow">
            <div className="eyebrow-dot"></div>
            BTech CSE · 3rd Year · LPU · Punjab
          </div>

          <h1 className="hero-name">
            <span className="name-line1">Prabhu</span>
            <span className="name-line2">Singh</span>
          </h1>

          <div className="hero-morph">
            {text}
            <span className="morph-cursor"></span>
          </div>

          <p className="hero-sub">
            Crafting scalable backends, clean REST APIs, and delightful web
            experiences. 300+ DSA problems solved and still grinding toward
            building the next big thing.
          </p>

          <div className="hero-chips">
            <span className="hchip hc-p">C++</span>
            <span className="hchip hc-c">Java</span>
            <span className="hchip hc-a">Python</span>
            <span className="hchip hc-t">MERN Stack</span>
            <span className="hchip hc-n">REST APIs</span>
            <span className="hchip hc-p">DSA · 300+</span>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-mag btn-p">
              View Projects →
            </a>
            <a href="#contact" className="btn-mag btn-o">
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="av-outer">
            <div className="av-ring"></div>
            <div className="av-ring2"></div>

            <div className="av-core">
              <img src="/photo.png" alt="Prabhu singh"/>
            </div>

            <div className="ob ob1">⚡ DSA Expert</div>
            <div className="ob ob2">🚀 Full Stack</div>
            <div className="ob ob3">🏆 Finalist</div>
            <div className="ob ob4">☁️ Cloud</div>
          </div>
        </div>
      </div>
    </section>
  );
}