import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about-me">
      <p className="section-eyebrow">02 ✦ ABOUT ME</p>
      <h2 className="about-heading">FRONTEND<br />DEVELOPER</h2>

      <div className="about-body">
        <div className="about-bio">
          <p>
            I'm a frontend developer and student at Moringa School in Nairobi,
            building web experiences that are fast, intentional, and sharp.
          </p>
          <p>
            I care about the details — the spacing, the motion, the way something
            feels when you interact with it. Code is craft.
          </p>
        </div>

        <div className="about-facts">
          <div className="fact">
            <span className="fact-label">LOCATION</span>
            <span className="fact-value">NAIROBI, KE</span>
          </div>
          <div className="fact">
            <span className="fact-label">SCHOOL</span>
            <span className="fact-value">MORINGA SCHOOL</span>
          </div>
          <div className="fact">
            <span className="fact-label">FOCUS</span>
            <span className="fact-value">FRONTEND / UI</span>
          </div>
          <div className="fact">
            <span className="fact-label">STATUS</span>
            <span className="fact-value available">OPEN TO WORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
