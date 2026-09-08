"use client";

import React from "react";
import styled from "styled-components";

const BioSection = styled.div`
  padding: var(--space-2xl) 0;
  margin: 0 auto;
`;

const BioContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-2xl);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BioImage = styled.img`
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: var(--radius-card);
  border: 2px solid var(--color-border);
  box-shadow: var(--shadow-card);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const BioText = styled.div`
  color: var(--color-text);
  line-height: 1.7;
  flex: 1;

  p {
    margin: 0 0 var(--space-lg);
    font-size: var(--text-base);
    color: var(--color-text-muted);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function Bio() {
  return (
    <BioSection>
      <BioContent>
        <BioImage src="/images/profile.jpg" alt="Dylan Hoover" />
        <BioText>
          <p>
            I am a passionate software engineer with a focus on building
            scalable and efficient applications. With a strong background in
            both frontend and backend development, I enjoy tackling complex
            problems and delivering innovative solutions.
          </p>
          <p>
            My journey in software development started with a curiosity for
            technology and a desire to create impactful software. Over the
            years, I have honed my skills in various programming languages and
            frameworks, always striving to stay updated with the latest industry
            trends.
          </p>
        </BioText>
      </BioContent>
    </BioSection>
  );
}
