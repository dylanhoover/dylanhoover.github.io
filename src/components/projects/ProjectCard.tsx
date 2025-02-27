import styled from "styled-components";

const Card = styled.section`
  background-color: var(--color-card-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ProjectDetails = styled.div`
  flex: 2;
  padding: 20px;
`;

const Technologies = styled.div`
  margin-top: 10px;
`;

const TechBadge = styled.span`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const Button = styled.a`
  background-color: var(--color-primary);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-secondary);
  }
`;

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card id={project.id}>
      <ProjectImage>
        <div className="image-placeholder">{project.title} Image</div>
      </ProjectImage>
      <ProjectDetails>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.details}</p>
        <Technologies>
          {project.technologies.map((tech: string) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Technologies>
        <Button
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      </ProjectDetails>
    </Card>
  );
};

export default ProjectCard;
