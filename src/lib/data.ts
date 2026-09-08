export interface Position {
  title: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  location: string;
  positions: Position[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details?: string;
  technologies: string[];
  githubLink?: string;
}

export interface Skill {
  name: string;
  level?: number;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export const experiences: Experience[] = [
  {
    company: "Sprout Social",
    location: "San Francisco, CA",
    positions: [
      {
        title: "Software Engineer",
        period: "June 2025 - Present",
        responsibilities: [
          "Redesigned the backend for a paid social-media promotion feature to support richer audience targeting across Facebook, Instagram, and LinkedIn, and migrated 4 codebases off a legacy library to simplify the publishing pipeline.",
          "Delivered a new social network integration end-to-end, coordinating changes across 8 backend and frontend services to support reposting and quoting other users' posts.",
          "Designed and built a feature giving users control over which post-composer settings (audience, tags, campaigns) persist between sessions, from database schema through API and tests, cutting a common source of mis-targeted posts.",
          "Root-caused a recurring error responsible for 60% of failures in one API-error category, then built an AI agent that autonomously diagnoses new errors and drafts pull-request fixes, replacing hours of manual log investigation.",
          "Led backend development of an AI-powered feature (built on Claude models) that recommends relevant tags to users while drafting posts, aiming to lift tagging adoption from a 14.6% baseline.",
        ],
        technologies: ["AI Agents", "Claude Models", "API Integration", "Backend Systems"],
      },
    ],
  },
  {
    company: "SafeinHome",
    location: "Walnut Creek, CA",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "July 2022 - June 2025",
        responsibilities: [
          "Integrated a softphone service into internal tools, reducing call-handling time by 60% and increasing support team productivity.",
          "Designed and implemented a complex alerting platform utilizing sensor data from hundreds of sensors recording constantly.",
          "Migrated legacy graphing functionalities to D3.js, improving visualization load times by 40% and enhancing maintainability.",
          "Designed and developed an in-house text messaging solution, reducing reliance on third-party services, improving response time, and reducing costs by $40,000 per year.",
          "Led Azure AD SSO implementation across a .NET API and 5 React applications, enhancing security and UX.",
          "Optimized and maintained a ReactJS and .NET-based remote support platform, improving uptime to 99.9% and reducing load times by 30%.",
        ],
        technologies: ["React", ".NET", "Azure AD", "D3.js", "TypeScript"],
      },
    ],
  },
  {
    company: "Santa Clara University BioInnovation and Design Lab",
    location: "Santa Clara, CA",
    positions: [
      {
        title: "Undergraduate Research Assistant",
        period: "September 2020 - December 2021",
        responsibilities: [
          "Collaborated with Varian Medical Systems to develop a machine learning image classifier for detecting CT image artifacts from medical implants.",
          "Conducted data preprocessing and feature engineering to optimize model accuracy and performance.",
        ],
        technologies: [
          "Machine Learning",
          "Python",
          "Data Preprocessing",
          "Image Classification",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "robot",
    title: "Autonomous and Interactive Mobile Robot",
    description:
      "Developed an autonomous and manually operated mobile robot with real-time communications and ROS-based architecture. Integrated a ZED 2i camera for object/person detection and built a control interface using an Nvidia Jetson board with WebSockets.",
    details:
      "This project was awarded Best in Section for Computer Science and Engineering Projects. The robot features both autonomous navigation capabilities and manual control options.",
    technologies: [
      "ROS",
      "Computer Vision",
      "WebSockets",
      "Nvidia Jetson",
      "ZED 2i Camera",
    ],
  },
  {
    id: "rental",
    title: "Rental Company Mockup",
    description:
      "Built a full-stack rental system with an Oracle SQL database, Python-based API, and React UI, developed from a detailed requirements document.",
    details:
      "This project simulates a complete rental management system, allowing users to browse available items, make reservations, track rental history, and manage inventory.",
    technologies: [
      "React",
      "Python",
      "Oracle SQL",
      "RESTful API",
      "JWT Authentication",
    ],
  },
  {
    id: "pearson",
    title: "Parallelized Pearson Correlation",
    description:
      "Optimized the Pearson Correlation algorithm using OpenMP, achieving 40% faster performance on large datasets.",
    details:
      "This project focused on improving the computational efficiency of the Pearson Correlation algorithm through parallel processing techniques.",
    technologies: [
      "C++",
      "OpenMP",
      "Parallel Processing",
      "Statistical Computing",
    ],
  },
  {
    id: "cloud-vm",
    title: "Virtual Emulation via Cloud",
    description:
      "Created a web-based platform for on-demand virtual machines (VMs) using AWS Lambda, DynamoDB, and Parsec.",
    details:
      "This project enables users to spin up and access virtual machine instances on demand through a web interface.",
    technologies: [
      "AWS Lambda",
      "DynamoDB",
      "Parsec",
      "Node.js",
      "Serverless Architecture",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "C#" },
      { name: ".NET" },
      { name: "JavaScript (TypeScript)" },
      { name: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "React Native" },
      { name: "D3.js" },
      { name: "Next.js" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "AWS" },
      { name: "Azure AD" },
      { name: "Docker" },
      { name: "Figma" },
    ],
  },
  {
    title: "Development Practices",
    skills: [
      { name: "CI/CD" },
      { name: "Agile" },
      { name: "Quality Assurance" },
      { name: "TDD" },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Science in Computer Science and Engineering",
    institution: "Santa Clara University",
    year: "2022 - 2023",
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Santa Clara University",
    year: "2018 - 2022",
  },
];
