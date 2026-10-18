import { useEffect, useRef, useState } from "react";

const LINKS = [
  ["work", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["about", "About"],
  ["contact", "Contact"],
];

export default function Nav({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="top" aria-label="Primary">
      <div className="w">
        <a className="lg" href="#top" aria-label="Anahat Basnet, top">
          Anahat<i>.</i>
        </a>
        <div className="rt">
          <div className={`lk${open ? " o" : ""}`} id="lk">
            {LINKS.map(([id, label]) => (
              <a
                key={id}
                className={`l${active === id ? " on" : ""}`}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <button className="tb" type="button" onClick={onToggleTheme} aria-label="Switch theme">
            {theme === "dark" ? "☼" : "◐"}
          </button>
          <button
            ref={button}
            className="mb"
            type="button"
            aria-expanded={open}
            aria-controls="lk"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </nav>
  );
}
