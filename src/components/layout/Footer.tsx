export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/dylanhoover"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-hoover-881b2918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p>&copy; {currentYear} Dylan Hoover. All rights reserved.</p>
      </div>
    </footer>
  );
}
