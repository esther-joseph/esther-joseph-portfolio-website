import {
  contact,
  projects,
  devpostProjects,
  devpostUrl,
  experience,
  experienceXr,
  skills,
  education,
} from "@/data/resume";
import styles from "./HomePage.module.css";

function Job({ job }: { job: typeof experience[number] | typeof experienceXr[number] }) {
  return (
    <div className={styles.job}>
      <div className={styles.jobMeta}>
        <div>
          <div className={styles.company}>
            {job.company}
            {job.org && <span className={styles.subOrg}>{job.org}</span>}
          </div>
        </div>
        <div className={styles.period}>{job.period}</div>
        <div className={styles.loc}>{job.location}</div>
      </div>
      <div className={styles.jobBody}>
        <div className={styles.role}>{job.role}</div>
        <ul>
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <article id="top">
      {/* ——— Hero ——— */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLead}>
            <div className={styles.heroEyebrow}>
              <span className={`${styles.label} ${styles.avail}`}>
                <span className={styles.pulse} />
                Available for work
              </span>
              <span className={styles.label}>{contact.location}</span>
            </div>
            <h1 className={styles.name}>
              Esther<br /><span>Joseph</span>
            </h1>
            <p className={styles.heroLede}>
              Frontend-focused full stack engineer shipping <b>secure, accessible</b> applications
              for federal operations — and an XR developer building{" "}
              <b>immersive stories that put people first</b>.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.label}>Engineering</span>
                <span className={styles.val}>React · TypeScript · USWDS</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>Immersive</span>
                <span className={styles.val}>Unity · HoloLens · Three.js</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>Links</span>
                <span className={styles.val}>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {" · "}
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.portraitCol}>
            <div className={styles.portraitWrap} aria-hidden />
            <div className={styles.portraitCap}>
              <span className={styles.label}>EST. TX</span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— About ——— */}
      <section className={styles.block} id="about">
        <div className={`${styles.wrap} ${styles.row}`}>
          <div className={styles.secHead} style={{ margin: 0 }}>
            <span className={`${styles.label} ${styles.idx}`}>01 / About</span>
            <h2>Engineering for trust.</h2>
          </div>
          <div className={styles.aboutBody}>
            <p>
              Frontend-focused full-stack engineer with 3+ years building React, TypeScript, and
              USWDS-compliant applications for federal operations — shipping 60%+ Exceptional-rated
              tasks within a year. Accessible by design, scalable by architecture, purposeful by intent.
            </p>
            <p>
              In parallel, I work as an XR developer and creative technologist with a lifelong practice
              of storytelling — building immersive experiences for human-centered design, federal agencies,
              and game jams across Unity, HoloLens, Three.js, and WebXR, applying AI, computer vision,
              and real-time rendering to put people first.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3+<span>y</span></span>
                <span className={styles.statCap}>Years building<br />for federal ops</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>190<span>+</span></span>
                <span className={styles.statCap}>Production tasks<br />shipped in 1 year</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>8<span>+</span></span>
                <span className={styles.statCap}>Federal DHS<br />applications</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>60<span>%</span></span>
                <span className={styles.statCap}>Tasks rated<br />Exceptional</span>
              </div>
            </div>
            <div className={styles.aboutTags}>
              <span className={styles.label}>Currently</span>
              <span className={styles.aboutTagVal}>Software Developer Consultant · Figgy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Experience ——— */}
      <section className={styles.block} id="experience">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <span className={`${styles.label} ${styles.idx}`}>02 / Experience</span>
            <h2>Where I've built</h2>
          </div>
          <div className={styles.xpList}>
            {experience.map((job, i) => <Job key={i} job={job} />)}
          </div>
          <div className={styles.subhead}>
            <span className={styles.label}>XR &amp; Immersive</span>
            <span className={styles.rule} />
          </div>
          <div className={styles.xpList}>
            {experienceXr.map((job, i) => <Job key={i} job={job} />)}
          </div>
        </div>
      </section>

      {/* ——— Projects ——— */}
      <section className={styles.block} id="projects">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <span className={`${styles.label} ${styles.idx}`}>03 / Selected work</span>
            <h2>Featured projects</h2>
            <p className={styles.secSub}>Full-stack, AR, and design-system work — selected from GitHub.</p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <a
                key={p.name}
                className={styles.proj}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.projKind}>{p.kind}</span>
                <div className={styles.projTop}>
                  <h3>{p.name}</h3>
                  <span className={styles.arrow}>↗</span>
                </div>
                <p className={styles.projDesc}>{p.description}</p>
                <div className={styles.projStack}>{p.stack}</div>
              </a>
            ))}
          </div>

          <div className={styles.vrHead}>
            <h3>Hackathon &amp; VR</h3>
            <a href={devpostUrl} target="_blank" rel="noopener noreferrer">View all on Devpost ↗</a>
          </div>
          <div className={styles.vrList}>
            {devpostProjects.map((d) => (
              <div key={d.name} className={styles.vrItem}>
                <div className={styles.vrName}>
                  {d.name}
                  {d.badge && <span className={styles.badge}>{d.badge}</span>}
                </div>
                <div className={styles.vrStack}>{d.stack}</div>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Skills ——— */}
      <section className={styles.block} id="skills">
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <span className={`${styles.label} ${styles.idx}`}>04 / Capabilities</span>
            <h2>Tools &amp; skills</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.title} className={styles.skillset}>
                <span className={`${styles.label} ${styles.skillsetLabel}`}>{s.title}</span>
                {s.sub ? (
                  s.sub.map((sub) => (
                    <div key={sub.label} className={styles.skillSub}>
                      <span className={`${styles.label} ${styles.skillSubLabel}`}>{sub.label}</span>
                      <div className={styles.chips}>
                        {sub.items.map((item) => (
                          <span key={item} className={styles.chip}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.chips}>
                    {s.items!.map((item) => (
                      <span key={item} className={styles.chip}>{item}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Education ——— */}
      <section className={styles.block} id="education">
        <div className={`${styles.wrap} ${styles.row}`}>
          <div className={styles.secHead} style={{ margin: 0 }}>
            <span className={`${styles.label} ${styles.idx}`}>05 / Education</span>
            <h2>Background</h2>
          </div>
          <div>
            <div className={styles.edu}>
              <div>
                <div className={styles.school}>{education.school}</div>
                <div className={styles.degree}>{education.degree}</div>
              </div>
              <div className={styles.eduPeriod}>{education.period} · {education.location}</div>
            </div>
            <div className={styles.eduExtra}>
              <div className={styles.eduBlk}>
                <span className={`${styles.label} ${styles.eduBlkLabel}`}>Relevant coursework</span>
                <p>{education.coursework}</p>
              </div>
              <div className={styles.eduBlk}>
                <span className={`${styles.label} ${styles.eduBlkLabel}`}>Activities</span>
                <p>{education.activities}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Contact ——— */}
      <section className={styles.contact} id="contact">
        <div className={styles.wrap}>
          <span className={`${styles.label} ${styles.idx}`} style={{ color: "var(--clay)" }}>06 / Contact</span>
          <h2 className={styles.contactHeading}>Let's work<br />together.</h2>
          <a href={`mailto:${contact.email}`} className={styles.bigEmail}>{contact.email}</a>
          <div className={styles.contactLinks}>
            <div className={styles.contactItem}>
              <span className={styles.label}>LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">in/esther-joseph-dev</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>GitHub</span>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">github.com/esther-joseph</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Devpost</span>
              <a href={contact.devpost} target="_blank" rel="noopener noreferrer">devpost.com/esther8joseph</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Phone</span>
              <a href={`tel:+14695349668`}>{contact.phone}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Location</span>
              <a href="#top">{contact.location}</a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footInner}`}>
          <span className={styles.label}>© {new Date().getFullYear()} Esther Joseph</span>
          <span className={styles.label}>Designed &amp; built with care</span>
        </div>
      </footer>
    </article>
  );
}
