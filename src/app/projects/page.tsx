"use client";
import Link from "next/link";
import styled from "styled-components";
import ProjectCard from "../../components/projects/ProjectCard";

const ProjectsSection = styled.div`
  padding: 20px;
`;

const ProjectsHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--color-text);
`;

const ProjectsIntro = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--color-text);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between project cards */
  color: var(--color-text);
`;

// Example project data
const testProject = {
  title: "Test Project",
  description: "A test project description",
  details: "Detailed information about the test project",
  githubLink: "https://github.com/test/project",
  technologyGroups: [
    {
      technologies: [
        {
          name: "React",
          type: "Frontend"
        },
        {
          name: "MongoDB",
          type: "Database"
        }
      ]
    }
  ]
};

// Using fetch to test
// fetch('/api/projects', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(testProject)
// });


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

  const handleAddProject = async () => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testProject)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      
      const data = await response.json();
      console.log('Project added:', data);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };


  return (
    <ProjectsSection>
      <ProjectsHeading>Projects</ProjectsHeading>

      <ProjectsIntro>
        Here&apos;s a collection of my most significant projects, showcasing my
        skills in software development, algorithm optimization, and system
        design.
      </ProjectsIntro>

      <ProjectsList>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsList>
    </ProjectsSection>
  );
}
