"use client";

import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import ExperienceCard from "@/components/experience/ExperienceCard";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import SkillsGrid from "@/components/skills/SkillsGrid";
import ContactForm from "@/components/contact/ContactForm";
import { experiences, education } from "@/lib/data";
import styled from "styled-components";

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const Section = styled(motion.section)`
  scroll-margin-top: calc(64px + var(--space-2xl));
  padding: var(--space-3xl) 0;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-sm);
`;

const Heading = styled.h2`
  font-size: var(--text-3xl);
  font-family: var(--font-display);
  font-weight: 700;
  margin: 0 0 var(--space-md);
  color: var(--color-text);
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: var(--text-4xl);
  }
`;

const Description = styled.p`
  max-width: 560px;
  margin: 0 auto;
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
`;

export default function HomePage() {
  return (
    <>
      <Section id="intro" {...sectionMotion}>
        <Hero />
      </Section>

      <Section id="about" {...sectionMotion}>
        <TextCenter>
          <SectionLabel>About</SectionLabel>
          <Heading className="font-display">About Me</Heading>
        </TextCenter>
        <Bio />
        <Education entries={education} />
      </Section>

      <Section id="experience" {...sectionMotion}>
        <TextCenter>
          <SectionLabel>Experience</SectionLabel>
          <Heading className="font-display">Professional Experience</Heading>
          <Description>
            Roles and impact across companies and research.
          </Description>
        </TextCenter>
        <ExperienceList>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </ExperienceList>
      </Section>

      <Section id="projects" {...sectionMotion}>
        <TextCenter>
          <SectionLabel>Portfolio</SectionLabel>
          <Heading className="font-display">Featured Projects</Heading>
          <Description>
            A selection of recent work showcasing technical skills and
            problem-solving.
          </Description>
        </TextCenter>
        <ProjectsGrid />
      </Section>

      <Section id="skills" {...sectionMotion}>
        <TextCenter>
          <SectionLabel>Expertise</SectionLabel>
          <Heading className="font-display">Skills & Technologies</Heading>
          <Description>
            Modern stack focused on scalable applications and clean
            architecture.
          </Description>
        </TextCenter>
        <SkillsGrid />
      </Section>

      <Section id="contact" {...sectionMotion}>
        <TextCenter>
          <SectionLabel>Contact</SectionLabel>
          <Heading className="font-display">Let&apos;s Work Together</Heading>
          <Description>
            Open to freelance work and new opportunities. Get in touch.
          </Description>
        </TextCenter>
        <ContactForm />
      </Section>
    </>
  );
}
