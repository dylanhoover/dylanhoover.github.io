export default function SkillsOverview() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "Next.js", "D3.js"],
    },
    {
      title: "Backend Development",
      skills: [".NET", "C#", "Python", "Node.js", "SQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure AD", "Docker", "CI/CD", "Git"],
    },
  ];

  return (
    <div className="skills-overview">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.title}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
