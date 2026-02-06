import './App.css'
import './Skills.css'
import './Experience.css'
import data from "./data/info.json"
const skills = data.skills

function Skills() {
  return (
    <div className="skills-container">
      {Object.entries(skills).map(([category, content], index) => (
        <div key={index} className="skills-card">
          <h3 className="skill-title">
            {category.replace(/_/g, " ").toUpperCase()} {'->'}
          </h3>

          <div className="skill-content">
            {Object.entries(content).map(([subCategory, items], i) => (
              <div key={i} className="skill-section">
                <strong>{subCategory.replace(/_/g, " ").toUpperCase()}:</strong>

                <div className="skill-items">
                  {items.map((item, j) => (
                    <div key={j} className="skill-item">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;