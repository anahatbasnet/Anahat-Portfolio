import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="w">
        <div className="sh rv">
          <span className="mono">03 / Skills</span>
          <h2>What I work with</h2>
        </div>
        <div className="sk rv">
          {skills.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
