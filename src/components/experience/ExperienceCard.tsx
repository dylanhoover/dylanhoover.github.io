"use client";

import styled from "styled-components";

const Card = styled.article`
  background-color: var(--color-surface);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--space-xl);
  border: 1px solid var(--color-border);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-card-hover);
    border-color: var(--color-border-strong);
  }
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-border);
`;

const CompanyName = styled.h2`
  margin: 0;
  font-size: var(--text-xl);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
`;

const Location = styled.span`
  font-size: var(--text-sm);
  color: var(--color-text-muted);
`;

const PositionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
`;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const PositionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const PositionTitle = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
`;

const Period = styled.span`
  font-size: var(--text-sm);
  color: var(--color-text-muted);
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Responsibility = styled.li`
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-sm);
  padding-left: var(--space-lg);
  position: relative;
  line-height: 1.5;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const TechBadge = styled.span`
  background-color: var(--color-primary-muted);
  color: var(--color-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
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
      <CardHeader>
        <CompanyName>{experience.company}</CompanyName>
        <Location>{experience.location}</Location>
      </CardHeader>
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
