import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const cur2 = document.getElementById("cur2");

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", move);

    function animate() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;

      if (cur2) {
        cur2.style.left = rx + "px";
        cur2.style.top = ry + "px";
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Hover effect
    const hoverEls = document.querySelectorAll(
      "a, button, .btn-mag, .proj-card, .sk-card"
    );

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("hov")
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("hov")
      );
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);
}