import { useEffect } from "react";

export default function useGlassAnimation() {
  useEffect(() => {
    const cards = document.querySelectorAll(".glass");
    cards.forEach((el, i) => {
      el.style.transform = "translateY(12px)";
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.transition = "transform .6s ease, opacity .6s ease";
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      }, 120 * i);
    });
  }, []);
}
