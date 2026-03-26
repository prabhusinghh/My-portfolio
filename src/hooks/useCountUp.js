import { useEffect } from "react";

export default function useCountUp() {
  useEffect(() => {
    const counters = document.querySelectorAll("[data-target]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");

            let current = 0;
            const step = Math.ceil(target / 40);

            const update = () => {
              current += step;
              if (current >= target) {
                el.textContent = target + (target > 10 ? "+" : "");
              } else {
                el.textContent = current;
                requestAnimationFrame(update);
              }
            };

            update();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);
}