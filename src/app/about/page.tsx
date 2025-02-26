import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-section">
      <h1 className="about-heading">About Me</h1>

      <div className="about-content">
        <div className="profile-photo">
          <div className="photo-placeholder">Profile Photo</div>
          {/* Once you have your photo, uncomment this:
          <Image
            src="/images/profile-about.jpg"
            alt="Dylan Hoover"
            className="profile-image"
            width={400}
            height={500}
          />
          */}
        </div>

        <div className="about-details">
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
        </div>
      </div>
    </div>
  );
}
