"use client";
import styled from "styled-components";
import type { EducationEntry } from "@/lib/data";

const EducationBlock = styled.div`
  margin-top: var(--space-2xl);
  padding: var(--space-xl);
  background-color: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
`;

const EducationHeading = styled.h3`
  text-align: center;
  font-size: var(--text-xl);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 var(--space-xl);
`;

const EducationItem = styled.div`
  padding: var(--space-md) var(--space-lg);
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;

  & + & {
    margin-top: var(--space-lg);
  }
`;

const EducationTitle = styled.h4`
  margin: 0 0 var(--space-xs);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
`;

const EducationParagraph = styled.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
`;

interface EducationProps {
  entries: EducationEntry[];
}

export default function Education({ entries }: EducationProps) {
  return (
    <EducationBlock>
      <EducationHeading className="font-display">Education</EducationHeading>
      {entries.map((entry) => (
        <EducationItem key={entry.degree}>
          <EducationTitle>{entry.degree}</EducationTitle>
          <EducationParagraph>{entry.institution}</EducationParagraph>
          <EducationParagraph>{entry.year}</EducationParagraph>
        </EducationItem>
      ))}
    </EducationBlock>
  );
}
