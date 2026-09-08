"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-nav);
`;

const NavRow = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Mark = styled.a`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--color-text);

  &:hover {
    color: var(--color-text);
    text-decoration: none;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-xl);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: var(--text-sm);
  font-weight: 500;
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-text-muted)"};

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const MobilePanel = styled(motion.nav)`
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileLink = styled.a`
  display: block;
  padding: var(--space-md) var(--space-lg);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text);

  &:hover {
    color: var(--color-primary);
    text-decoration: none;
  }
`;

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["intro", ...links.map((link) => link.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <NavBar>
      <NavRow>
        <Mark href="#intro">Dylan Hoover</Mark>
        <Links>
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              $active={activeId === link.href.slice(1)}
            >
              {link.label}
            </NavLink>
          ))}
        </Links>
        <MenuButton
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </MenuButton>
      </NavRow>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <MobilePanel
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {links.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </MobileLink>
            ))}
          </MobilePanel>
        )}
      </AnimatePresence>
    </NavBar>
  );
}
