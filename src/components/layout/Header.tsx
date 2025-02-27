"use client";

import Link from "next/link";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 20px 0;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LogoLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: var(--color-text);
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo>
            <LogoLink href="/">Dylan Hoover</LogoLink>
          </Logo>
          <Tagline>Software Engineer</Tagline>
        </HeaderContent>
      </HeaderContainer>
      <Navbar />
    </>
  );
}
