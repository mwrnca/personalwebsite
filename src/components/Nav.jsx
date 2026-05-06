import { useEffect, useState } from "react";
import "./Nav.css";

const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT ME", id: "about-me" },
  { label: "PROJECTS", id: "projects" },
  { label: "FIND ME", id: "find-me" },
];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav-sidebar">
      <div className="nav-logo">
        <span className="logo-text">MWR.N.C.A</span>
        <span className="logo-sub">PORTFOLIO</span>
      </div>

      <ul className="nav-links">
        {navItems.map(({ label, id }, i) => (
          <li key={id} className="nav-item">
            <a
              href={"#" + id}
              className={"nav-link" + (active === id ? " nav-link--active" : "")}
            >
              <span className="nav-index">0{i + 1}</span>
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-socials">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">GITHUB</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">INSTAGRAM</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-link">TIKTOK</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">LINKEDIN</a>
      </div>
    </nav>
  );
}
