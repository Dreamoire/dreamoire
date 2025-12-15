import { useEffect, useState } from "react";
import "../styles/ButtonUp.css";

function ButtonUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="button-up"
      aria-label="Revenir en haut de la page"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

export default ButtonUp;
