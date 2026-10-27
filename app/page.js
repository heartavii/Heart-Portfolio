"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "Java",
  "Python",
  "SQL",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "Next.js",
  "Networking",
  "Database Design",
  "System Analysis",
  "Troubleshooting",
];

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Cemetery Management System",
    description:
      "A cemetery management website designed to organize cemetery information and make essential details more accessible.",
    stack: ["HTML", "CSS", "Web Design"],
    link: "https://tierrasanta.gt.tc/",
    linkText: "View Website",
  },
  {
    number: "02",
    category: "FRONTEND DEVELOPMENT",
    title: "FaceCode",
    description:
      "A frontend project recreating a Facebook-inspired interface to practice layout design, styling, and user interface development.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://facecode1.netlify.app/",
    linkText: "View Website",
  },
{
  number: "03",
  category: "PERSONAL PROJECT",
  title: "The Angel Effect — Personal Portfolio",
  description:
    "A personal portfolio showcasing my work as a content creator, collaborations with brands, creative projects, and professional journey as an IT student.",
  stack: ["Next.js", "React", "TypeScript", "CSS"],
  link: "https://angel-effect.vercel.app/",
  linkText: "View Live Website",
},
];

/*
  ANDROID SHOWCASE — EDIT THESE CAPTIONS.
  Each entry is one screenshot, in order: screen-01.png ... screen-13.png.
  The captions below are placeholders; rename them to match your real screens.
  The alt text is built from the caption automatically.
*/
const androidScreens = [
  "Login",
  "Admin Dashboard",
  "Admin Installment & Payments",
  "Admin Document Requests",
  "Admin Appointments",
  "Admin Memorial & Tributes",
  "Setup",
  "Client side Documents",
  "New Document Request",
  "Appointments",
  "New Appointment Request",
  "Payments",
  "Profile",
].map((caption, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    number: n,
    caption,
    src: `/images/android-app/screen-${n}.png`,
    alt: `Android app screenshot ${n} of 13: ${caption} screen`,
  };
});

function PhoneFrame({ screen, sizes, priority = false }) {
  return (
    <div className="android-phone">
      <div className="android-phone-screen">
        <span className="android-phone-camera" aria-hidden="true" />
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="android-phone-image"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(null);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const isOpen = activeScreen !== null;

  const closeModal = useCallback(() => {
    setActiveScreen(null);
    triggerRef.current?.focus();
  }, []);

  const showStep = useCallback((step) => {
    setActiveScreen(
      (current) =>
        (current + step + androidScreens.length) % androidScreens.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowRight") {
        showStep(1);
      } else if (event.key === "ArrowLeft") {
        showStep(-1);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll("button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeModal, showStep]);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          AH<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            OPEN TO IT INTERNSHIP OPPORTUNITIES
          </div>

          <h1>
            Hi, I&apos;m
            <br />
            Angel Heart
            <br />
            <span>Avilanes.</span>
          </h1>

          <p className="hero-description">
            An IT student passionate about technology, problem-solving,
            and creating digital experiences. Currently learning,
            building, and exploring where technology can take me.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>
            <a href="#contact" className="button-secondary">
              Let&apos;s Connect
            </a>
          </div>

          <div className="hero-meta">
            <span>INFORMATION TECHNOLOGY STUDENT</span>
            <span className="meta-divider">/</span>
            <span>PHILIPPINES</span>
          </div>
        </div>

        <div className="hero-visual profile-visual">
          <div className="profile-frame">
            <Image
              src="/heart.png"
              alt="Portrait of Angel Heart Avilanes"
              width={500}
              height={600}
              priority
              className="profile-photo"
            />
          </div>

          <span className="floating-tag tag-top">
            IT STUDENT ✳
          </span>

          <span className="floating-tag tag-bottom">
            Always learning ↗
          </span>

          <div className="photo-caption">
            <span>BUILDING MY FUTURE</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>TECHNOLOGY</span><span>✳</span>
          <span>CREATIVITY</span><span>✳</span>
          <span>PROBLEM SOLVING</span><span>✳</span>
          <span>CONTINUOUS LEARNING</span><span>✳</span>
          <span>TECHNOLOGY</span><span>✳</span>
          <span>CREATIVITY</span><span>✳</span>
          <span>PROBLEM SOLVING</span><span>✳</span>
          <span>CONTINUOUS LEARNING</span><span>✳</span>
        </div>
      </div>

      <section className="about section-container" id="about">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT ME</span>
          <h2>
            Learning today.
            <br />
            <span>Building tomorrow.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I&apos;m an Information Technology student who enjoys
            exploring how technology can solve problems and create
            useful experiences.
          </p>

          <p className="about-description">
            Through academic projects and personal exploration, I&apos;m
            developing my skills in web development, databases,
            networking, and software fundamentals. I value curiosity,
            adaptability, and the opportunity to learn from real-world
            experience.
          </p>

          <p className="about-description">
            I&apos;m looking forward to an internship where I can
            contribute to a team, strengthen my technical foundation,
            and discover the areas of IT where I can make the greatest
            impact.
          </p>

          <a href="#contact" className="text-link">
            Get to know me <span>↗</span>
          </a>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-index">02 / TECHNICAL TOOLKIT</span>
            <h2>
              Skills I&apos;m
              <br />
              <span>developing.</span>
            </h2>
            <p className="section-intro">
              The tools and technologies I&apos;ve been learning through
              coursework, projects, and independent practice.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>

          <p className="skills-note">
            My toolkit continues to grow as I take on new challenges
            and projects.
          </p>
        </div>
      </section>

      <section className="projects section-container" id="projects">
        <div className="projects-header">
          <div className="section-heading">
            <span className="section-index">03 / SELECTED WORK</span>
            <h2>
              Made with
              <br />
              <span>curiosity.</span>
            </h2>
          </div>

          <p className="section-intro">
            A selection of academic and personal projects that
            reflect my learning journey.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <span className="project-category">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`${project.linkText}: ${project.title}`}
              >
                {project.linkText} <span>↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="github-banner">
          <div>
            <span className="section-index">MORE ON GITHUB</span>
            <h3>Still building. Always improving.</h3>
          </div>

          <a
            href="https://github.com/heartavii"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Visit My GitHub <span>↗</span>
          </a>
        </div>
      </section>

      <section
        className="android-showcase section-container"
        id="android-app"
        aria-labelledby="android-showcase-title"
      >
        <div className="android-showcase-header">
          <span className="section-index">ANDROID DEVELOPMENT</span>
          <h2 id="android-showcase-title">
            Mobile app,
            <br />
            <span>built in Android Studio.</span>
          </h2>
          <p className="section-intro">
            A mobile application developed using Android Studio. Select any
            screen to view it larger.
          </p>
        </div>

        <ul className="android-gallery">
          {androidScreens.map((screen, index) => (
            <li className="android-gallery-item" key={screen.src}>
              <button
                type="button"
                className="android-phone-button"
                aria-label={`Enlarge screenshot ${screen.number}: ${screen.caption}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveScreen(index);
                }}
              >
                <PhoneFrame
                  screen={screen}
                  priority={index < 2}
                  sizes="(max-width: 650px) 45vw, (max-width: 1100px) 25vw, 210px"
                />
              </button>
              <p className="android-caption">
                <span>{screen.number}</span> {screen.caption}
              </p>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div
            className="android-modal"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot ${androidScreens[activeScreen].number} of 13: ${androidScreens[activeScreen].caption}`}
            onClick={closeModal}
          >
            <button
              type="button"
              ref={closeRef}
              className="android-modal-close"
              aria-label="Close enlarged screenshot"
              onClick={closeModal}
            >
              ✕
            </button>

            <button
              type="button"
              className="android-modal-nav android-modal-prev"
              aria-label="Previous screenshot"
              onClick={(event) => {
                event.stopPropagation();
                showStep(-1);
              }}
            >
              ←
            </button>

            <button
              type="button"
              className="android-modal-nav android-modal-next"
              aria-label="Next screenshot"
              onClick={(event) => {
                event.stopPropagation();
                showStep(1);
              }}
            >
              →
            </button>

            <div
              className="android-modal-body"
              onClick={(event) => event.stopPropagation()}
            >
              <PhoneFrame
                screen={androidScreens[activeScreen]}
                sizes="340px"
                priority
              />
              <p className="android-caption" aria-live="polite">
                <span>{androidScreens[activeScreen].number}</span>{" "}
                {androidScreens[activeScreen].caption}
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="contact-section" id="contact">
        <div className="section-container contact-inner">
          <span className="section-index">04 / LET&apos;S CONNECT</span>

          <h2>
            Good things
            <br />
            start with a <span>hello.</span>
          </h2>

          <p>
            I&apos;m open to internship opportunities, collaborations,
            and conversations about technology. Feel free to reach out.
          </p>

          {/* Replace YOUR_EMAIL@example.com with your actual email. */}
          <a
            href="mailto:avilanesangelheart@gmail.com"
            className="contact-email"
          >
            avilanesangelheart@gmail.com <span>↗</span>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/heartavii"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </section>

      <footer className="footer section-container">
        <a href="#home" className="logo">
          AH<span>.</span>
        </a>
        <p>Designed and built by Angel Heart Avilanes.</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}