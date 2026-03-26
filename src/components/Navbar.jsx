import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // ✅ NEW

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-logo">PS.</div>

     {/* RIGHT SIDE CONTROLS */}
<div className="nav-right">

  

  {/* ✅ Hamburger now RIGHT */}
  <div
    className="menu-btn"
    onClick={() => setOpen(!open)}
    onMouseEnter={() => setOpen(true)}   // hover open
  >
    ☰
  </div>

</div>

{/* ✅ Menu */}
<ul
  className={`nav-links ${open ? "open" : ""}`}
  onMouseLeave={() => setOpen(false)}   // close when leave
>
  <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
  <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
  <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
  <li><a href="#experience" onClick={() => setOpen(false)}>Training</a></li>
  <li><a href="#certifications" onClick={() => setOpen(false)}>Certs</a></li>
  <li><a href="#achievements" onClick={() => setOpen(false)}>Wins</a></li>
  <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
</ul>
<a
    href="#contact"
    className={active === "contact" ? "btn-mag btn-p active" : "btn-mag btn-p"}
  >
   Download CV
  </a>
    </nav>
  );
}