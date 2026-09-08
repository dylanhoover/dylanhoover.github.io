"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../ui/Button";

const HeroContainer = styled.section`
  background: linear-gradient(
    135deg,
    var(--color-primary-muted) 0%,
    var(--color-background) 50%,
    var(--color-surface) 100%
  );
  padding: var(--space-4xl) 0;
  margin-bottom: var(--space-3xl);
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-md);
`;

const HeroTitle = styled.h1`
  font-size: var(--text-hero);
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 var(--space-lg);
  letter-spacing: -0.03em;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: clamp(2.25rem, 9vw, 3rem);
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--text-xl);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-2xl);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const MotionContent = motion(HeroContent);

const motionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Hero() {
  return (
    <HeroContainer>
      <MotionContent {...motionConfig}>
        <HeroLabel>Software Engineer</HeroLabel>
        <HeroTitle className="font-display">Hi, I&apos;m Dylan Hoover</HeroTitle>
        <HeroSubtitle>
          I build modern web applications with clean code and thoughtful UX.
          Let&apos;s create something great together.
        </HeroSubtitle>
        <ButtonContainer>
          <PrimaryButton href="#projects">View My Work</PrimaryButton>
          <SecondaryButton href="#contact">Get in Touch</SecondaryButton>
        </ButtonContainer>
      </MotionContent>
    </HeroContainer>
  );
}
