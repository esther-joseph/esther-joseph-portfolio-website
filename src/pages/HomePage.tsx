import {
  contact,
  summary,
  projects,
  devpostProjects,
  devpostUrl,
  experience,
  skills,
  education,
} from "@/data/resume";
import { HexagonAvatar } from "@/components/HexagonAvatar";
import { HeroThreeBackground } from "@/components/HeroThreeBackground";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./HomePage.module.css";

const GITHUB_PROJECTS = "https://github.com/esther-joseph?tab=repositories";

export function HomePage() {
  const heroParallaxRef = useParallax(0.25);
  const heroParallaxRef2 = useParallax(0.08);
  const projectsParallaxRef = useParallax(0.18);
  const aboutRevealRef = useScrollReveal();
  const experienceRevealRef = useScrollReveal();
  const skillsRevealRef = useScrollReveal();
  const contactRevealRef = useScrollReveal();
  const educationRevealRef = useScrollReveal();

  return (
    <article className={styles.page}>
      <section
        className={styles.heroWrap}
        aria-labelledby="hero-heading"
        id="top"
      >
        <div className={styles.heroThreeWrap}>
          <HeroThreeBackground />
        </div>
        <div
          ref={heroParallaxRef}
          className={styles.parallaxLayer}
          aria-hidden
        />
        <div
          ref={heroParallaxRef2}
          className={styles.parallaxLayer2}
          aria-hidden
        />
        <div className={styles.hero}>
          <HexagonAvatar />
          <h1 id="hero-heading" className={styles.name}>
            {contact.name}
          </h1>
          <p className={styles.tagline}>
            Frontend-focused Full Stack Engineer — secure, accessible web
            applications in regulated environments.
          </p>
          <a href="#about" className={styles.scrollHint} aria-label="Scroll to content">
            Scroll
          </a>
        </div>
      </section>

      <section
        ref={aboutRevealRef}
        id="about"
        className={`${styles.section} ${styles.sectionWithAura}`}
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading" className={styles.sectionTitle}>
          About
        </h2>
        <p className={styles.summary}>{summary}</p>
      </section>

      <section
        id="projects"
        className={`${styles.projectsSectionWrap} ${styles.sectionWithAura}`}
        aria-labelledby="projects-heading"
      >
        <div
          ref={projectsParallaxRef}
          className={styles.parallaxLayerProjects}
          aria-hidden
        />
        <div className={styles.projectsSection}>
          <h2 id="projects-heading" className={styles.sectionTitle}>
            Featured projects
          </h2>
          <p className={styles.projectsIntro}>
            Selected work from my GitHub — full-stack, AR, and design systems.
          </p>
          <div className={styles.projectCards}>
            {projects.map((project) => (
              <section
                key={project.name}
                className={styles.projectCard}
                aria-labelledby={`project-${project.name.toLowerCase().replace(/\s+/g, "-")}-title`}
              >
                <h3
                  id={`project-${project.name.toLowerCase().replace(/\s+/g, "-")}-title`}
                  className={styles.projectCardTitle}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectCardLink}
                  >
                    {project.name}
                  </a>
                </h3>
                <p className={styles.projectCardStack}>{project.stack}</p>
                <p className={styles.projectCardDescription}>
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCardCta}
                >
                  View on GitHub →
                </a>
              </section>
            ))}
          </div>
          <section
            id="devpost-projects"
            className={styles.devpostSection}
            aria-labelledby="devpost-heading"
          >
            <h2 id="devpost-heading" className={styles.sectionTitle}>
              Hackathon & VR projects
            </h2>
            <p className={styles.projectsIntro}>
              VR, accessibility, and immersive experiences from hackathons. See full portfolio on{" "}
              <a href={devpostUrl} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                Devpost
              </a>.
            </p>
            <ul className={styles.devpostList}>
              {devpostProjects.map((proj) => (
                <li key={proj.name} className={styles.devpostItem}>
                  <span className={styles.devpostName}>
                    {proj.name}
                    {proj.highlight && (
                      <span className={styles.devpostHighlight}> · {proj.highlight}</span>
                    )}
                  </span>
                  <span className={styles.devpostStack}>{proj.stack}</span>
                  <p className={styles.devpostDescription}>{proj.description}</p>
                </li>
              ))}
            </ul>
            <a
              href={devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectsViewAll}
            >
              View all on Devpost →
            </a>
          </section>
        </div>
      </section>

      <section
        ref={experienceRevealRef}
        id="experience"
        className={`${styles.section} ${styles.sectionWithAura}`}
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading" className={styles.sectionTitle}>
          Experience
        </h2>
        <ul className={styles.experienceList}>
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className={styles.job}>
              <div className={styles.jobHeader}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.jobLocation}>{job.location}</span>
              </div>
              <div className={styles.jobRole}>
                {job.role}
                <span className={styles.period}> {job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section
        ref={skillsRevealRef}
        id="skills"
        className={`${styles.section} ${styles.sectionWithAura}`}
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className={styles.sectionTitle}>
          Skills
        </h2>
        <div className={styles.skillsGrid}>
          <div>
            <h3 className={styles.skillsCategory}>Frontend</h3>
            <p className={styles.skillsList}>{skills.frontend.join(", ")}</p>
          </div>
          <div>
            <h3 className={styles.skillsCategory}>Backend & DevOps</h3>
            <p className={styles.skillsList}>
              {skills.backendDevOps.join(", ")}
            </p>
          </div>
          <div>
            <h3 className={styles.skillsCategory}>AR/VR & creative</h3>
            <p className={styles.skillsList}>{skills.arVrCreative.join(", ")}</p>
          </div>
          <div>
            <h3 className={styles.skillsCategory}>Other</h3>
            <p className={styles.skillsList}>{skills.other.join(", ")}</p>
          </div>
        </div>
      </section>

      <section
        ref={educationRevealRef}
        id="education"
        className={`${styles.section} ${styles.sectionWithAura}`}
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className={styles.sectionTitle}>
          Education
        </h2>
        <div className={styles.education}>
          <strong>{education.school}</strong>, {education.location}
          <br />
          {education.degree} — {education.period}
        </div>
      </section>

      <section
        ref={contactRevealRef}
        id="contact"
        className={`${styles.contactWrap} ${styles.sectionWithAura}`}
        aria-labelledby="contact-heading"
      >
        <div className={styles.contactBlock}>
          <h2 id="contact-heading" className={styles.contactTitle}>
            Let's work together
          </h2>
          <p className={styles.contactIntro}>
            Open to design technologist and frontend engineering roles.
          </p>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
            </li>
            <li>
              <span className={styles.label}>Phone</span>
              <a href="tel:+14695349668" className={styles.contactLink}>
                {contact.phone}
              </a>
            </li>
            <li>
              <span className={styles.label}>Location</span>
              <span className={styles.contactValue}>{contact.location}</span>
            </li>
            <li>
              <span className={styles.label}>LinkedIn</span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/esther-joseph-dev
              </a>
            </li>
            <li>
              <span className={styles.label}>GitHub</span>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                github.com/esther-joseph
              </a>
            </li>
            <li>
              <span className={styles.label}>Devpost</span>
              <a
                href={contact.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                devpost.com/esther8joseph
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <a
          href={GITHUB_PROJECTS}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          Projects on GitHub
        </a>
        <a href="#contact" className={styles.ctaLinkSecondary}>
          Get in touch
        </a>
        <p className={styles.footerMeta}>© {new Date().getFullYear()} Esther Joseph</p>
      </footer>
    </article>
  );
}
