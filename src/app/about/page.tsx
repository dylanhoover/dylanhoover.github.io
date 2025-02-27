"use client";

import Image from "next/image";
import styled from "styled-components";

const AboutSection = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 20px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfilePhoto = styled.div`
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  flex: 1;
`;

const PhotoPlaceholder = styled.div`
  color: var(--color-primary);
  font-size: 1.5rem;
`;

const AboutDetails = styled.div`
  color: var(--color-text);
  line-height: 1.6;
  flex: 2;

  p {
    margin-bottom: 15px;
  }
`;

export default function AboutPage() {
  return (
    <AboutSection>
      <AboutHeading>About Me</AboutHeading>

      <AboutContent>
        <ProfilePhoto>
          <PhotoPlaceholder>Profile Photo</PhotoPlaceholder>
          {/* Once you have your photo, uncomment this:
          <Image
            src="/images/profile-about.jpg"
            alt="Dylan Hoover"
            width={400}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
          */}
        </ProfilePhoto>

        <AboutDetails>
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

          <p>
            I thrive in collaborative environments, valuing clear communication
            and teamwork to achieve common goals. Let&apos;s connect and explore
            how we can work together to bring your ideas to life.
          </p>
        </AboutDetails>
      </AboutContent>
    </AboutSection>
  );
}
