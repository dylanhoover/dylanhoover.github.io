export default function SkillCard({ category }: { category: any }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h2>{category.title}</h2>
      </div>

      <div className="skill-card-body">
        {category.skills.map((skill: any, index: number) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
