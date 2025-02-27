"use client";

import styled from "styled-components";

const Card = styled.div`
  background-color: var(--color-card-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const Header = styled.div`
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyName = styled.h2`
  margin: 0;
`;

const Location = styled.span`
  font-size: 0.9rem;
`;

const PositionsContainer = styled.div`
  padding: 10px;
`;

const Position = styled.div`
  margin-bottom: 20px;
`;

const PositionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PositionTitle = styled.h3`
  color: var(--color-text);
  margin: 0;
`;

const Period = styled.span`
  color: var(--color-text);
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
`;

const Responsibility = styled.li`
  color: var(--color-text);
  margin-bottom: 5px;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TechBadge = styled.span`
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
`;

interface Position {
  title: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

interface Experience {
  company: string;
  location: string;
  positions: Position[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <Header>
        <CompanyName>{experience.company}</CompanyName>
        <Location>{experience.location}</Location>
      </Header>
      <PositionsContainer>
        {experience.positions.map((position, index) => (
          <Position key={index}>
            <PositionHeader>
              <PositionTitle>{position.title}</PositionTitle>
              <Period>{position.period}</Period>
            </PositionHeader>
            <ResponsibilitiesList>
              {position.responsibilities.map((responsibility, idx) => (
                <Responsibility key={idx}>{responsibility}</Responsibility>
              ))}
            </ResponsibilitiesList>
            <TechnologiesContainer>
              {position.technologies.map((tech, idx) => (
                <TechBadge key={idx}>{tech}</TechBadge>
              ))}
            </TechnologiesContainer>
          </Position>
        ))}
      </PositionsContainer>
    </Card>
  );
}
