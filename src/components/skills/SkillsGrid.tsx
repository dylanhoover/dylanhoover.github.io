"use client";

import styled from "styled-components";
import { skillCategories } from "@/lib/data";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--space-xl);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-card-hover);
    border-color: var(--color-border-strong);
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 var(--space-lg);
  font-size: var(--text-lg);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const Chip = styled.span`
  background-color: var(--color-primary-muted);
  color: var(--color-primary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
`;

export default function SkillsGrid() {
  return (
    <Grid>
      {skillCategories.map((category) => (
        <Tile key={category.title}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <Chips>
            {category.skills.map((skill) => (
              <Chip key={skill.name}>{skill.name}</Chip>
            ))}
          </Chips>
        </Tile>
      ))}
    </Grid>
  );
}
