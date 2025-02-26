export default function ExperienceCard({ experience }: { experience: any }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h2>{experience.company}</h2>
        <span>{experience.location}</span>
      </div>

      <div className="experience-positions">
        {experience.positions.map((position: any, posIndex: number) => (
          <div key={posIndex} className="position">
            <div className="position-header">
              <h3>{position.title}</h3>
              <span>{position.period}</span>
            </div>

            <ul className="responsibilities">
              {position.responsibilities.map(
                (responsibility: any, resIndex: number) => (
                  <li key={resIndex} className="responsibility">
                    <span>{responsibility}</span>
                  </li>
                )
              )}
            </ul>

            <div className="technologies">
              {position.technologies.map((tech: any, techIndex: number) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
