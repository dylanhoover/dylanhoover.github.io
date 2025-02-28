"use client";
import React from "react";
import styled from "styled-components";

interface EducationProps {
  degree: string;
  institution: string;
  year: string;
}

const EducationSection = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: var(
    --color-background
  ); // Adjust background color as needed
  border-radius: 5px;
`;

const EducationItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-left: 4px solid var(--color-primary);
`;

const EducationTitle = styled.h3`
  margin: 0;
  color: var(--color-text);
`;

const EducationParagraph = styled.p`
  margin: 0;
  color: var(--color-text);
`;

const Education: React.FC<EducationProps> = ({ degree, institution, year }) => {
  return (
    <EducationSection>
      <EducationItem>
        <EducationTitle>{degree}</EducationTitle>
        <EducationParagraph>{institution}</EducationParagraph>
        <EducationParagraph>{year}</EducationParagraph>
      </EducationItem>
    </EducationSection>
  );
};

export default Education;
