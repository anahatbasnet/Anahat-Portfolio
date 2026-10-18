import { education, glance } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <div className="w">
        <div className="sh rv">
          <span className="mono">04 / About</span>
          <h2>A bit about me</h2>
        </div>
        <div className="ab rv">
          <div>
            <p className="big">
              I work on both sides of the stack, and I like knowing how a request travels from the
              screen to the database and back.
            </p>
            <p>
              I started in React, moved into Java, and now work comfortably on both sides. At Cedar
              Gate I build healthcare software with Grails and React.
            </p>
            <p>
              I care about integrations that fail on purpose and not by accident, and about reading
              a feature end to end before changing any one part of it.
            </p>
          </div>
          <div>
            <span className="mono">At a glance</span>
            <ul className="ed">
              {glance.map(([k, v]) => (
                <li key={k}>
                  <div>
                    <b>{k}</b>
                  </div>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <span className="mono" style={{ display: "block", marginTop: "var(--s5)" }}>
              Education
            </span>
            <ul className="ed">
              {education.map((e) => (
                <li key={e.degree}>
                  <div>
                    <b>{e.degree}</b>
                    <span>{e.school}</span>
                  </div>
                  {e.note && <em>{e.note}</em>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
