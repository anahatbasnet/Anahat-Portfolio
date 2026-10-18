import { asset, spotlight } from "../hooks.js";
import { featured, more, profile } from "../data.js";

const Arrow = () => <span className="ar">↗</span>;

export default function Projects() {
  return (
    <section id="work">
      <div className="w">
        <div className="sh rv">
          <span className="mono">01 / Projects</span>
          <h2>Things I’ve built</h2>
        </div>

        {featured.map((p, i) => (
          <article
            key={p.title}
            className={`cs${i === 0 ? " f" : ""} rv spot`}
            onPointerMove={spotlight}
          >
            <div>
              <span className="n" aria-hidden="true">
                {p.n}
              </span>
              <h3>{p.title}</h3>
              <p className="d">{p.desc}</p>
            </div>
            <div className="rc">
              <figure className="shot">
                <img src={asset(p.image)} alt={p.imageAlt} loading="lazy" decoding="async" />
              </figure>
              <div className="sp">
                <div>
                  <span className="mono">Type</span>
                  <span>{p.type}</span>
                </div>
                <div>
                  <span className="mono">Stack</span>
                  <span>{p.stack}</span>
                </div>
                <div>
                  <span className="mono">Link</span>
                  <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <Arrow />
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="more rv">
          <h3 className="mh">More on GitHub</h3>
          <ul className="ml">
            {more.map((m) => (
              <li key={m.title}>
                <span className="th">
                  <img
                    src={asset(m.image)}
                    alt={m.imageAlt}
                    loading="lazy"
                    decoding="async"
                    style={m.contain ? { objectFit: "contain", background: "#fff" } : undefined}
                  />
                </span>
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="mm">
                  <span>{m.langs}</span>
                  {m.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="rv"
          style={{ marginTop: "var(--s4)", display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a className="btn" href={profile.githubRepos} target="_blank" rel="noopener noreferrer">
            All repositories on GitHub <Arrow />
          </a>
          <a className="btn" href={profile.oldPortfolio} target="_blank" rel="noopener noreferrer">
            View my previous portfolio <Arrow />
          </a>
        </p>
      </div>
    </section>
  );
}
