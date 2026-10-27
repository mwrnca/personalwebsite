
import "./Landing.css";

export default function Landing() {
  return (
    <section className="landing-section" id="home">
      <div className="landing-content">
        <p className="landing-eyebrow">
          BASED IN NAIROBI ✦ OPEN TO WORK
        </p>

        <h1 className="landing-title">MWR.N.C.A</h1>

        <h2 className="landing-subtitle">
          FULL-STACK
          <br />
          DEVELOPER
        </h2>

        <p className="landing-desc">
          Building scalable applications, robust APIs, and
          reliable backend infrastructure.
          <br />
          Software Engineering Student at Moringa School.
        </p>
      </div>

      <div className="landing-stack">
        <p className="stack-label">TECH STACK</p>

        <div className="stack-items">
          {[
            "JAVASCRIPT",
            "REACT.JS",
            "PYTHON",
            "FASTAPI",
            "POSTGRESQL",
            "REST APIS",
            "INFRASTRUCTURE",
          ].map((tech) => (
            <div key={tech} className="stack-item">
              <span className="stack-dot" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
