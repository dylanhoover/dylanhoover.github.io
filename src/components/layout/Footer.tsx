"use client";

import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--color-surface);
  color: var(--color-text);
  padding: var(--space-3xl) 0;
  margin-top: var(--space-4xl);
  border-top: 1px solid var(--color-border);
`;

const FooterContent = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: var(--space-xl);
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }
`;

const FooterLink = styled.a`
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 500;

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-xl);
`;

const SocialLink = styled.a`
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: 500;

  &:hover {
    color: var(--color-primary);
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: var(--color-text-subtle);
  font-size: var(--text-sm);
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="#intro">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        <SocialLinks>
          <SocialLink
            href="https://github.com/dylanhoover"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/dylan-hoover-881b2918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {currentYear} Dylan Hoover. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
