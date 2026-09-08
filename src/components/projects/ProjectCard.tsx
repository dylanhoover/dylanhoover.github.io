"use client";

import styled from "styled-components";
import type { Project } from "@/lib/data";

const Card = styled.article<{ $span?: number }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-xl);
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  grid-column: span ${({ $span }) => $span ?? 1};

  &:hover {
    box-shadow: var(--shadow-card-hover);
    border-color: var(--color-border-strong);
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: var(--text-xl);
  font-family: var(--font-display);
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--text-base);
  line-height: 1.5;
  flex: 1;
`;

const ProjectDetailsParagraph = styled.p`
  margin: 0;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.5;
`;

const Technologies = styled.div`
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

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  margin-top: auto;
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-primary);

  &:hover {
    color: var(--color-primary-hover);
  }
`;

interface ProjectCardProps {
  project: Project;
  span?: number;
}

const ProjectCard = ({ project, span }: ProjectCardProps) => {
  return (
    <Card id={project.id} $span={span}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      {project.details && (
        <ProjectDetailsParagraph>{project.details}</ProjectDetailsParagraph>
      )}
      <Technologies>
        {project.technologies.map((tech: string) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </Technologies>
      {project.githubLink && (
        <GithubLink
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </GithubLink>
      )}
    </Card>
  );
};

export default ProjectCard;
