import SkillCard from "@/components/skills/SkillCard";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript/TypeScript",
          level: 90,
          description:
            "Primary language for frontend development. Used extensively in React applications.",
        },
        {
          name: "C#/.NET",
          level: 85,
          description:
            "Main backend language. Used for building APIs and server-side applications.",
        },
        {
          name: "Python",
          level: 80,
          description:
            "Used for data processing, API development, and machine learning projects.",
        },
        {
          name: "SQL",
          level: 75,
          description:
            "Database query language for data retrieval and manipulation.",
        },
        {
          name: "C/C++",
          level: 70,
          description:
            "Used for algorithm optimization and system-level programming.",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          level: 90,
          description:
            "Primary frontend framework. Used for building interactive UIs.",
        },
        {
          name: "Node.js",
          level: 80,
          description: "JavaScript runtime for server-side applications.",
        },
        {
          name: "D3.js",
          level: 85,
          description:
            "Data visualization library used for creating interactive charts.",
        },
        {
          name: "Next.js",
          level: 75,
          description: "React framework for production-grade applications.",
        },
        {
          name: "React Native",
          level: 70,
          description: "Framework for building native mobile apps using React.",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          level: 90,
          description: "Version control system for code management.",
        },
        {
          name: "AWS",
          level: 80,
          description: "Cloud platform for hosting and deploying applications.",
        },
        {
          name: "Azure AD",
          level: 85,
          description: "Identity and access management service.",
        },
        {
          name: "Docker",
          level: 75,
          description: "Containerization platform for application deployment.",
        },
        {
          name: "Figma",
          level: 70,
          description: "Design tool for UI/UX prototyping.",
        },
      ],
    },
    {
      title: "Development Practices",
      skills: [
        {
          name: "Agile",
          level: 90,
          description:
            "Iterative approach to project management and software development.",
        },
        {
          name: "CI/CD",
          level: 85,
          description: "Automated testing and deployment processes.",
        },
        {
          name: "Test-Driven Development",
          level: 80,
          description: "Software development approach focused on testing.",
        },
        {
          name: "Quality Assurance",
          level: 85,
          description: "Practices to ensure software quality and reliability.",
        },
        {
          name: "Code Reviews",
          level: 90,
          description: "Collaborative code examination process.",
        },
      ],
    },
  ];

  return (
    <div className="section">
      <h1 className="heading-xl text-center mb-12">Skills & Technologies</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mb-16">
        I&apos;ve developed a diverse skill set throughout my career, focusing
        on modern web technologies, cloud platforms, and effective development
        practices.
      </p>

      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
