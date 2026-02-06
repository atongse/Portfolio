import './App.css';
import data from "./data/info.json";
import { useState, useRef } from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';

type Section = "projects" | "skills" | "experience" | "";

function App() {
  const [current, setCurrent] = useState<Section>("");

  // Refs for each section
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const handleClick = (section: Section) => {
    setCurrent(section);

    // Delay scroll until content renders
    setTimeout(() => {
      switch (section) {
        case "projects":
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "skills":
          skillsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "experience":
          experienceRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }, 0);
  };

  return (
    <div className='app-cont'>
      <div className='heading'>
        <p>
          Hello 😀, I am <strong>{data.name}</strong> a {data.title}.
        </p>
        <p className='summary'>
          {data.summary}
        </p>
      </div>

      <div className='index'>
        <button onClick={() => handleClick("projects")}> Projects </button>
        <button onClick={() => handleClick("skills")}> Skills </button>
        <button onClick={() => handleClick("experience")}> Experience </button>
      </div>

      {/* Sections with refs */}
      {current === "projects" && <div ref={projectsRef}><Projects /></div>}
      {current === "skills" && <div ref={skillsRef}><Skills /></div>}
      {current === "experience" && <div ref={experienceRef}><Experience /></div>}
    </div>
  );
}

export default App;
