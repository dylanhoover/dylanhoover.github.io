import ExperienceCard from "../../components/experience/ExperienceCard";
import "../../components/experience/ExperienceCard.css";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "SafeinHome",
      location: "Walnut Creek, CA",
      positions: [
        {
          title: "Senior Software Engineer",
          period: "July 2022 - Present",
          responsibilities: [
            "Led Azure AD SSO implementation across a .NET API and 5 React applications, enhancing security and UX.",
            "Optimize and maintain ReactJS and .NET-based remote support platform, improving uptime to 99.9% and reducing load times by 30%.",
            "Integrated a softphone service into internal tools, reducing call-handling time by 60% and increasing support team productivity.",
            "Migrated legacy graphing functionalities to D3.js, improving visualization load times by 40% and enhancing maintainability.",
            "Designed and developed an in-house text messaging solution, reducing reliance on third-party services, improving response time and reducing costs by 40 thousand dollars per year.",
          ],
          technologies: ["React", ".NET", "Azure AD", "D3.js", "TypeScript"],
        },
        {
          title: "Software Engineering Intern",
          period: "June 2021 - June 2022",
          responsibilities: [
            "Developed a full-stack internal tool leveraging a .NET API backend and ReactJS frontend, improving operational efficiency.",
            "Designed and implemented unit and integration tests, increasing test coverage and reducing production bugs.",
          ],
          technologies: [
            "React",
            ".NET",
            "Unit Testing",
            "Integration Testing",
          ],
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

  return (
    <div className="section">
      <h1 className="heading-xl text-center mb-12">Professional Experience</h1>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
