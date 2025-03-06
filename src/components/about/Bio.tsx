"use client";

import React from "react";
import styled from "styled-components";

const BioSection = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BioContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const BioImage = styled.img`
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  flex: 1;
  border-radius: 50%;
`;

const BioText = styled.div`
  color: var(--color-text);
  line-height: 1.6;
  flex: 2;
`;

export default function Bio() {
  return (
    <BioSection>
      <BioContent>
        <BioImage src="/images/profile.jpg" alt="Profile" />
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
