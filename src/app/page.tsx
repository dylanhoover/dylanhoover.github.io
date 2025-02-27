"use client";

import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsOverview from "../components/home/SkillsOverview";
import Link from "next/link";
import styled from "styled-components";

const HomeSection = styled.section`
  padding: 2rem;
  margin: 1rem 0;
  background-color: var(--color-background);
`;

const LightBgSection = styled(HomeSection)`
  background-color: var(--color-light-background);
`;

const TextCenter = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const Description = styled.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: var(--color-text);
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;

  &:hover {
    background-color: var(--color-secondary);
    text-decoration: none;
  }
`;

const CTASection = styled.div`
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 0.5rem;
`;

export default function HomePage() {
  return (
    <>
      <Hero />

      <HomeSection>
        <TextCenter>
          <Heading>Featured Projects</Heading>
          <Description>
            Here are some of my recent projects that showcase my technical
            abilities and problem-solving skills.
          </Description>
        </TextCenter>
        <FeaturedProjects />
        <ButtonContainer>
          <Button href="/projects">View All Projects</Button>
        </ButtonContainer>
      </HomeSection>

      <LightBgSection>
        <TextCenter>
          <Heading>My Expertise</Heading>
          <Description>
            I specialize in creating scalable and maintainable applications with
            modern technologies.
          </Description>
        </TextCenter>
        <SkillsOverview />
        <ButtonContainer>
          <Button href="/skills">Explore My Skills</Button>
        </ButtonContainer>
      </LightBgSection>

      <HomeSection>
        <CTASection>
          <TextCenter>
            <Heading>Let&apos;s Work Together</Heading>
            <Description>
              I&apos;m currently available for freelance work and open to new
              opportunities.
            </Description>
          </TextCenter>
          <ButtonContainer>
            <Button href="/contact">Get in Touch</Button>
          </ButtonContainer>
        </CTASection>
      </HomeSection>
    </>
  );
}
