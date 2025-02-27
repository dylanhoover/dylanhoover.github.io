"use client";
import styled from "styled-components";

const SkillCardDiv = styled.div`
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const SkillCardHeader = styled.div`
  background-color: var(--color-primary);
  color: #fff;
  padding: 10px;
`;

const SkillCardBody = styled.div`
  padding: 10px;
`;

const Skill = styled.div`
  margin-bottom: 10px;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SkillBar = styled.div`
  background-color: var(--color-card-background);
  border-radius: 5px;
  height: 10px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  background-color: var(--color-primary);
  height: 100%;
`;

const SkillDescription = styled.p`
  color: var(--color-text);
  font-size: 14px;
`;

export default function SkillCard({ category }: { category: any }) {
  return (
    <SkillCardDiv>
      <SkillCardHeader>{category.title}</SkillCardHeader>

      <SkillCardBody>
        {category.skills.map((skill: any, index: number) => (
          <Skill key={index}>
            <SkillInfo>
              <span style={{ color: "var(--color-text)" }}>{skill.name}</span>
              <span style={{ color: "var(--color-text)" }}>{skill.level}%</span>
            </SkillInfo>

            <SkillBar>
              <SkillProgress
                style={{ width: `${skill.level}%` }}
              ></SkillProgress>
            </SkillBar>

            <SkillDescription>{skill.description}</SkillDescription>
          </Skill>
        ))}
      </SkillCardBody>
    </SkillCardDiv>
  );
}
