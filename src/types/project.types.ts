interface Technology {
  name: string;
  type: string;
}

interface TechnologyGroup {
  technologies: Technology[];
}

interface Project {
  _id: string;
  title: string;
  description: string;
  details: string;
  githubLink: string;
  technologyGroups: TechnologyGroup[];
} 