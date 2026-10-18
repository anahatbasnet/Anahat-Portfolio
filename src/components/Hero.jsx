import { asset } from "../hooks.js";
import { currentRole, experience, profile } from "../data.js";

const logos = [
  ["Cedar Gate Technologies", "images/cedar-gate.png"],
  ["FocusOne Payment Solutions", "images/focusone.png"],
  ["Nepal Clearing House Limited", "images/nchl.png"],
  ["SoAni Tech Nepal", "images/soani.png"],
];

export default function Hero({ clock }) {
  const current = experience.find((j) => j.current) || experience[0];
  return (
    <header className="hero">
      <div className="w">
        <div className="hg">
          <div>
            <div className="eb mono">
              <b />
              <span>
                {profile.title} · {profile.location} · <time>{clock}</time>
              </span>
            </div>
            <h1>
              <span>Beyond the interface.</span>
              <span className="gt">Into the systems that make it work.</span>
            </h1>
            <p className="lead">
              I’m Anahat Basnet. I work across frontend experiences, backend services and system
              integrations, and I like building software that is reliable, maintainable and useful.
            </p>
            <div className="acts">
              <a className="btn p" href="#work">
                See my work <span className="ar">↗</span>
              </a>
              <a className="btn" href={asset(profile.resume)} download>
                Download resume
              </a>
            </div>
            <div className="so">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.oldPortfolio} target="_blank" rel="noopener noreferrer">
                Previous portfolio ↗
              </a>
            </div>
          </div>
          <aside className="cur" aria-label="Current role">
            <div className="top">
              <span className="mono live">Currently</span>
              <span className="mono">{current.dates}</span>
            </div>
            <div className="logo">
              <img src={asset(current.logo)} alt={current.logoAlt} />
            </div>
            <h3>{current.role}</h3>
            <dl>
              {currentRole.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
        <div className="strip rv">
          <span className="tw">Teams I’ve worked with</span>
          <div className="lgs">
            {logos.map(([alt, src]) => (
              <span className="lt" key={alt}>
                <img src={asset(src)} alt={alt} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
