import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.substring(1);

    const scroll = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    requestAnimationFrame(() => {
      setTimeout(scroll, 150);
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
