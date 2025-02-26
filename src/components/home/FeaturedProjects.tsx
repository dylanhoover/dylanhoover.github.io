import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: "robot",
      title: "Autonomous Mobile Robot",
      description:
        "Award-winning autonomous robot with real-time communications and ROS-based architecture.",
      technologies: ["ROS", "Computer Vision", "WebSockets"],
      link: "/projects#robot",
    },
    {
      id: "rental",
      title: "Rental Company System",
      description:
        "Full-stack rental system with Oracle SQL, Python API, and React UI.",
      technologies: ["React", "Python", "Oracle SQL"],
      image: "/images/projects/rental-placeholder.jpg",
      link: "/projects#rental",
    },
    {
      id: "cloud-vm",
      title: "Virtual Emulation via Cloud",
      description:
        "Web-based platform for on-demand virtual machines using AWS services.",
      technologies: ["AWS Lambda", "DynamoDB", "Parsec"],
      image: "/images/projects/cloud-placeholder.jpg",
      link: "/projects#cloud-vm",
    },
  ];

  return (
    <div className="projects-grid">
      {featuredProjects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <div className="image-placeholder">{project.title} Image</div>
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <Link href={project.link} className="button">
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
