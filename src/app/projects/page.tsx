import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "robot",
      title: "Autonomous and Interactive Mobile Robot",
      description:
        "Developed an autonomous and manually operated mobile robot with real-time communications and ROS-based architecture. Integrated a ZED 2i camera for object/person detection and built a control interface using an Nvidia Jetson board with WebSockets.",
      details:
        "This project was awarded Best in Section for Computer Science and Engineering Projects. The robot features both autonomous navigation capabilities and manual control options. It can detect obstacles and people in its environment, making real-time decisions for path planning and interaction.",
      technologies: [
        "ROS",
        "Computer Vision",
        "WebSockets",
        "Nvidia Jetson",
        "ZED 2i Camera",
      ],
      githubLink: "https://github.com/",
    },
    {
      id: "rental",
      title: "Rental Company Mockup",
      description:
        "Built a full-stack rental system with an Oracle SQL database, Python-based API, and React UI, developed from a detailed requirements document.",
      details:
        "This project simulates a complete rental management system, allowing users to browse available items, make reservations, track rental history, and manage inventory. The system includes user authentication, payment processing simulation, and administrative dashboards.",
      technologies: [
        "React",
        "Python",
        "Oracle SQL",
        "RESTful API",
        "JWT Authentication",
      ],
      githubLink: "https://github.com/",
    },
    {
      id: "pearson",
      title: "Parallelized Pearson Correlation",
      description:
        "Optimized the Pearson Correlation algorithm using OpenMP, achieving 40% faster performance on large datasets.",
      details:
        "This project focused on improving the computational efficiency of the Pearson Correlation algorithm through parallel processing techniques. The implementation leverages OpenMP to distribute the workload across multiple cores, significantly reducing processing time for large datasets used in statistical analysis.",
      technologies: [
        "C++",
        "OpenMP",
        "Parallel Processing",
        "Statistical Computing",
        "Algorithm Optimization",
      ],
      githubLink: "https://github.com/",
    },
    {
      id: "cloud-vm",
      title: "Virtual Emulation via Cloud",
      description:
        "Created a web-based platform for on-demand virtual machines (VMs) using AWS Lambda, DynamoDB, and Parsec.",
      details:
        "This project enables users to spin up and access virtual machine instances on demand through a web interface. The solution uses AWS Lambda for serverless compute, DynamoDB for state management, and Parsec for low-latency streaming. Users can select from various VM configurations based on their needs and access them remotely from any device.",
      technologies: [
        "AWS Lambda",
        "DynamoDB",
        "Parsec",
        "Node.js",
        "Serverless Architecture",
      ],
      githubLink: "https://github.com/",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-heading">Projects</h1>

      <p className="projects-intro">
        Here&apos;s a collection of my most significant projects, showcasing my
        skills in software development, algorithm optimization, and system
        design.
      </p>

      <div className="projects-list">
        {projects.map((project, index) => (
          <section key={project.id} id={project.id} className="project-item">
            <div
              className={`project-content ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="project-image">
                <div className="image-placeholder">{project.title} Image</div>
              </div>

              <div className="project-details">
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <p>{project.details}</p>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
