"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 30px 0;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: #ccc;
  font-size: 0.9rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/experience">Experience</FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/skills">Skills</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
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
            href="https://linkedin.com/in/dylan-hoover"
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
