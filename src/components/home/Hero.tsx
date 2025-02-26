import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <main>
          <div className="hero-text">
            <h1>
              <span>Dylan Hoover</span>{" "}
              <span className="highlight">Senior Software Engineer</span>
            </h1>
            <p>
              Building innovative solutions with React, .NET, and cloud
              technologies. Focused on creating efficient, scalable, and
              user-friendly applications.
            </p>
            <div className="hero-buttons">
              <Link href="/projects" className="button">
                View Projects
              </Link>
              <Link href="/contact" className="button secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">Your Profile Photo</div>
      </div>
    </div>
  );
}
