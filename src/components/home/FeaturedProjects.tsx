"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const ProjectCard = styled.div`
  background-color: var(--color-card-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  background-color: var(--color-background);
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--color-text);
`;

const ProjectDescription = styled.p`
  color: var(--color-text);
  margin-bottom: 15px;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const ProjectTag = styled.span`
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectLink = styled(Link)`
  display: inline-block;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-text);
`;

export default function FeaturedProjects() {
  const projects = [
    {
      id: "robot",
      title: "Autonomous Mobile Robot",
      description:
        "Award-winning autonomous robot with real-time communications and ROS-based architecture.",
      technologies: ["ROS", "Computer Vision", "WebSockets"],
      link: "/projects#robot",
    },
    {
      id: "rental",
      title: "Rental Company System",
      description:
        "Full-stack rental system with Oracle SQL, Python API, and React UI.",
      technologies: ["React", "Python", "Oracle SQL"],
      image: "/images/projects/rental-placeholder.jpg",
      link: "/projects#rental",
    },
    {
      id: "cloud-vm",
      title: "Virtual Emulation via Cloud",
      description:
        "Web-based platform for on-demand virtual machines using AWS services.",
      technologies: ["AWS Lambda", "DynamoDB", "Parsec"],
      image: "/images/projects/cloud-placeholder.jpg",
      link: "/projects#cloud-vm",
    },
  ];

  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          {/* <ProjectImageContainer> */}
          {/* Uncomment when you have images
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
            */}
          {/* <ProjectImagePlaceholder>Project Image</ProjectImagePlaceholder>
          </ProjectImageContainer> */}
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTags>
              {project.technologies.map((tag, index) => (
                <ProjectTag key={index}>{tag}</ProjectTag>
              ))}
            </ProjectTags>
            <ProjectLink href={project.link}>View Project</ProjectLink>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
