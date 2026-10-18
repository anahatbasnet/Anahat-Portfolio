import { asset } from "../hooks.js";
import { profile } from "../data.js";

export default function Contact({ notify }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      notify("Email address copied");
    } catch {
      notify(`Copy failed: ${profile.email}`);
    }
  };

  return (
    <section id="contact" className="ct">
      <div className="w">
        <span className="mono" style={{ color: "var(--ac)" }}>
          05 / Contact
        </span>
        <h2 style={{ marginTop: "var(--s3)" }}>
          Let’s talk about <span className="gt">what you’re building.</span>
        </h2>
        <button
          className="mail"
          type="button"
          onClick={copy}
          aria-label={`Copy email address ${profile.email}`}
        >
          <span>{profile.email}</span>
          <span className="mono">Copy</span>
        </button>
        <div className="cm">
          <a className="btn p" href={`mailto:${profile.email}`}>
            Send email <span className="ar">↗</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={profile.oldPortfolio} target="_blank" rel="noopener noreferrer">
            Previous portfolio ↗
          </a>
          <a href={asset(profile.resume)} download>
            Resume ↓
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </div>
        <div className="ff mono">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
