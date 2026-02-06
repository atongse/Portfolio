import './App.css'
import './Experience.css'
import data from "./data/info.json"
const projects = data.projects

function Projects() {
  return (
    <div className='exp-container'>
      {projects.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.title}</h3>

          <div> 
            {exp.responsibilities.map((item, i) => (
              <div key={i} className="responsibility">
                • {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default Projects