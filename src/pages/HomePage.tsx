import {
  contact,
  summary,
  projects,
  devpostProjects,
  devpostUrl,
  experience,
  experienceXr,
  skills,
  education,
} from "@/data/resume";
import { HexagonAvatar } from "@/components/HexagonAvatar";
import { HeroThreeBackground } from "@/components/HeroThreeBackground";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./HomePage.module.css";

export function HomePage() {
  const heroParallaxRef = useParallax(0.25);
  const heroParallaxRef2 = useParallax(0.08);
  const projectsParallaxRef = useParallax(0.18);
  const aboutRevealRef = useScrollReveal();
  const experienceRevealRef = useScrollReveal();
  const skillsRevealRef = useScrollReveal();
  const contactRevealRef = useScrollReveal();
  const educationRevealRef = useScrollReveal();

  const xr = (() => {
    const list = [...skills.arVrCreative];
    const take = (items: string[]) => {
      const set = new Set(items);
      const picked = list.filter((s) => set.has(s));
      return picked;
    };

    return {
      platforms: take(["HoloLens", "Oculus", "Google Cardboard"]),
      enginesTools: take(["Unity", "Unreal Engine", "Blender", "Adobe Aero"]),
      performance: take(["GPU profiling", "Latency optimization", "Real-time rendering"]),
      aiCv: take(["OpenCV", "TensorFlow (CNNs)", "AWS SageMaker", "Azure Cognitive Services", "Computer vision", "Machine learning"]),
      systems: take(["Media streaming", "IoT synchronization", "Spatial computing"]),
      creative: list.filter((s) =>
        ["Quill", "Maya", "Adobe Premiere", "Photoshop"].includes(s),
      ),
    };
  })();

  return (
    <article className={styles.page}>
      <section
        className={styles.heroWrap}
        aria-labelledby="hero-heading"
        id="top"
      >
        {/* <HeroStarPattern /> */}
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
        <h3 className={styles.skillsCategory}>XR & immersive</h3>
        <ul className={styles.experienceList}>
          {experienceXr.map((job) => (
            <li key={`xr-${job.company}-${job.period}`} className={styles.job}>
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
          <section className={styles.skillsCard} aria-label="Frontend skills">
            <h3 className={styles.skillsCategory}>Frontend</h3>
            <ul className={styles.skillsChips}>
              {skills.frontend.map((s) => (
                <li key={`fe-${s}`} className={styles.skillChip}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.skillsCard} aria-label="Backend and DevOps skills">
            <h3 className={styles.skillsCategory}>Backend & DevOps</h3>
            <ul className={styles.skillsChips}>
              {skills.backendDevOps.map((s) => (
                <li key={`be-${s}`} className={styles.skillChip}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.skillsCard} aria-label="XR and immersive skills">
            <h3 className={styles.skillsCategory}>XR & immersive</h3>
            <div className={styles.skillsSubgrid}>
              <div>
                <h4 className={styles.skillsSubcategory}>Platforms</h4>
                <ul className={styles.skillsChips}>
                  {xr.platforms.map((s) => (
                    <li key={`xr-platform-${s}`} className={styles.skillChip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.skillsSubcategory}>Engines & tools</h4>
                <ul className={styles.skillsChips}>
                  {xr.enginesTools.map((s) => (
                    <li key={`xr-tools-${s}`} className={styles.skillChip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.skillsSubcategory}>AI & computer vision</h4>
                <ul className={styles.skillsChips}>
                  {xr.aiCv.map((s) => (
                    <li key={`xr-aicv-${s}`} className={styles.skillChip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.skillsSubcategory}>Performance & systems</h4>
                <ul className={styles.skillsChips}>
                  {[...xr.performance, ...xr.systems].map((s) => (
                    <li key={`xr-perf-${s}`} className={styles.skillChip}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h4 className={styles.skillsSubcategory}>Creative</h4>
            <ul className={styles.skillsChips}>
              {xr.creative.map((s) => (
                <li key={`xr-creative-${s}`} className={styles.skillChip}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.skillsCard} aria-label="Other skills">
            <h3 className={styles.skillsCategory}>Programming languages</h3>
            <ul className={styles.skillsChips}>
              {skills.programmingLanguages.map((s) => (
                <li key={`lang-${s}`} className={styles.skillChip}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section
            className={styles.skillsCard}
            aria-label="Communication and collaboration skills"
          >
            <h3 className={styles.skillsCategory}>Communication & collaboration</h3>
            <ul className={styles.skillsChips}>
              {skills.communicationCollaboration.map((s) => (
                <li key={`collab-${s}`} className={styles.skillChip}>
                  {s}
                </li>
              ))}
            </ul>
          </section>
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
          <ul className={styles.contactList}>
            <li>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
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
        <p className={styles.footerMeta}>© {new Date().getFullYear()} Esther Joseph</p>
      </footer>
    </article>
  );
}
