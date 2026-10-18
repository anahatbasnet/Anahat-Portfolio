import { asset } from "../hooks.js";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="w">
        <div className="sh rv">
          <span className="mono">02 / Experience</span>
          <h2>Where I’ve worked</h2>
        </div>
        <div className="tl rv">
          {experience.map((j) => (
            <article key={`${j.company}-${j.role}`} className={`job${j.current ? " now" : ""}`}>
              <div className="jl">
                <span className="lt">
                  <img src={asset(j.logo)} alt={j.logoAlt} />
                </span>
                <span className="mono">{j.dates}</span>
              </div>
              <div className="jb">
                <h3>{j.role}</h3>
                <div className="co">{j.company}</div>
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="tg">
                  {j.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
