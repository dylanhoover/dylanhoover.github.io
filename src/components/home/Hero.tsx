"use client";

import Link from "next/link";
import styled from "styled-components";

const HeroContainer = styled.section`
  background-color: var(--color-background);
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-secondary);
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primary);
    color: white;
    text-decoration: none;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Hi, I&apos;m Dylan Hoover</HeroTitle>
        <HeroSubtitle>
          A passionate software engineer specializing in building modern web
          applications
        </HeroSubtitle>
        <ButtonContainer>
          <PrimaryButton href="/projects">View My Work</PrimaryButton>
          <SecondaryButton href="/contact">Contact Me</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
}
