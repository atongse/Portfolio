import './App.css'
import './Experience.css'
import data from "./data/info.json"
const experience = data.experience

function Experience() {
  return (
    <div className='exp-container'>
      {experience.map((exp, index) => (
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


export default Experience