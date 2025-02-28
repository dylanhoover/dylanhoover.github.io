"use client";

import styled from "styled-components";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
const AboutSection = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 20px;
`;

const EducationSection = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: var(
    --color-background
  ); // Adjust background color as needed
  border-radius: 5px;
`;

const EducationHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 20px;
`;

const education = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "Santa Clara University",
    year: "2022 - 2023",
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Santa Clara University",
    year: "2018 - 2022",
  },
];

export default function AboutPage() {
  return (
    <AboutSection>
      <AboutHeading>About Me</AboutHeading>
      <Bio />
      <EducationSection>
        <EducationHeading>Education</EducationHeading>
        {education.map((education) => (
          <Education
            key={education.degree}
            degree={education.degree}
            institution={education.institution}
            year={education.year}
          />
        ))}
      </EducationSection>
    </AboutSection>
  );
}
