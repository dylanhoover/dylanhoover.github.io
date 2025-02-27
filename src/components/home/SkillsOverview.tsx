"use client";

import styled from "styled-components";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const SkillCard = styled.div`
  background-color: var(--color-card-background);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillCategory = styled.h3`
  color: var(--color-text);
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-primary);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 15px;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SkillLabel = styled.span`
  font-weight: bold;
  color: var(--color-text);
`;

const SkillLevel = styled.span`
  color: var(--color-text);
`;

const SkillBar = styled.div`
  background-color: var(--color-card-background);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

interface ProgressBarProps {
  level: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
  background-color: var(--color-primary);
  height: 100%;
  width: ${(props) => `${props.level}%`};
`;

export default function SkillsOverview() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
  ];

  return (
    <SkillsContainer>
      {skillCategories.map((category, index) => (
        <SkillCard key={index}>
          <SkillCategory>{category.category}</SkillCategory>
          <SkillList>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>
                <SkillName>
                  <SkillLabel>{skill.name}</SkillLabel>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillName>
                <SkillBar>
                  <ProgressBar level={skill.level} />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillList>
        </SkillCard>
      ))}
    </SkillsContainer>
  );
}
