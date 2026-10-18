import { useCallback, useRef, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {
  useActiveSection,
  useClock,
  useReveal,
  useScrollProgress,
  useTheme,
} from "./hooks.js";
import { profile } from "./data.js";

const SECTIONS = ["work", "experience", "skills", "about", "contact"];

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(SECTIONS);
  const progress = useScrollProgress();
  const clock = useClock(profile.timezone);
  const [toast, setToast] = useState("");
  const timer = useRef(null);
  useReveal();

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2400);
  }, []);

  return (
    <>
      <a className="skip" href="#work">
        Skip to content
      </a>
      <div id="pb" ref={progress} />
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero clock={clock} />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact notify={notify} />
      </main>
      <div className={`toast${toast ? " on" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
