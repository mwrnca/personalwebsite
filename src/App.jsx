import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import ProjectGrid from "./components/ProjectGrid";
import "./App.css";

export default function App() {
  return (
    <div className="web-container">
      <Nav />
      <div className="body-div">
        <Landing />
        <About />
        <ProjectGrid />
      </div>
    </div>
  );
}
