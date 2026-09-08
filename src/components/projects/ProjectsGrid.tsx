"use client";

import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const spans: Record<string, number> = {
  robot: 2,
  rental: 1,
  pearson: 1,
  "cloud-vm": 2,
};

export default function ProjectsGrid() {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          span={spans[project.id] ?? 1}
        />
      ))}
    </Grid>
  );
}
