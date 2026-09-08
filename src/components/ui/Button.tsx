"use client";

import Link from "next/link";
import styled from "styled-components";

interface ButtonBaseProps {
  $variant?: "primary" | "secondary";
}

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-primary-muted);
  }
`;

const PrimaryButton = styled(Link)<ButtonBaseProps>`
  ${buttonStyles}
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: var(--color-primary-hover);
    color: white;
  }
`;

const SecondaryButton = styled(Link)<ButtonBaseProps>`
  ${buttonStyles}
  background-color: var(--color-surface);
  color: var(--color-primary);
  border-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-muted);
    color: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }
`;

export { PrimaryButton, SecondaryButton };
