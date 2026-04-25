import { useEffect, useState, useCallback } from "react";

const SECTION_IDS = ["home", "about", "skills", "work", "articles", "contact"];

export function useActiveSection(disabled = false) {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of SECTION_IDS) {
      const element = document.getElementById(sectionId);
      if (!element) continue;

      const { offsetTop, offsetHeight } = element;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        setActiveSection(sectionId);
        break;
      }
    }
  }, []);

  useEffect(() => {
    if (disabled) return;

    window.addEventListener("scroll", handleScroll);
   // handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, disabled]);

  return activeSection;
}

