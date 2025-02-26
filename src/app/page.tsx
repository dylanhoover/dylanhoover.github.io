import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsOverview from "../components/home/SkillsOverview";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent projects that showcase my technical
            abilities and problem-solving skills.
          </p>
        </div>
        <FeaturedProjects />
        <div className="mt-10 text-center">
          <Link href="/projects" className="button">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">My Expertise</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I specialize in creating scalable and maintainable applications with
            modern technologies.
          </p>
        </div>
        <SkillsOverview />
        <div className="mt-10 text-center">
          <Link href="/skills" className="button">
            Explore My Skills
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <h2 className="heading-lg mb-4">Let&apos;s Work Together</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            I&apos;m currently available for freelance work and open to new
            opportunities.
          </p>
          <Link href="/contact" className="button">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
