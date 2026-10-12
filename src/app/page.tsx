const projects = [
  {
    number: "01",
    type: "EDUCATION · CONCEPT",
    title: "Word Hunter",
    subtitle: "字靈獵人 · formerly 啱腦",
    description:
      "A learning experience that turns a child’s own Chinese homework into a starting point for exploring character meaning, Cantonese pronunciation, and formation.",
    note: "COMPUTHON 2026 · award wording to confirm",
    className: "project-card--teal",
  },
  {
    number: "02",
    type: "COMPUTER VISION · PYTHON",
    title: "YOLOv4 Object Detection",
    subtitle: "A computer vision project",
    description:
      "An exploration of object detection with Python. Implementation details and results will be added after a review of the project repository.",
    link: "https://github.com/Dan1el730/YOLOv4-Object-Detection-Project",
    className: "project-card--violet",
  },
];

const skills = [
  { label: "AI & machine learning", detail: "Technical interests" },
  { label: "Computer vision", detail: "Technical interests" },
  { label: "Python", detail: "Primary language" },
  { label: "C / C++", detail: "Additional languages" },
  { label: "Software engineering", detail: "Technical interest" },
  { label: "AI automation & agents", detail: "Technical interest" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Daniel Yeung, home">
          <span className="wordmark-mark">DY</span>
          <span>Daniel Yeung</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a className="nav-contact" href="#contact">
            Contact <ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              COMPUTER SCIENCE GRADUATE <span className="eyebrow-divider">/</span>{" "}
              HONG KONG
            </p>
            <h1 id="hero-title">
              Building useful
              <br />
              things with <span className="gradient-text">AI.</span>
            </h1>
            <p className="hero-summary">
              I’m Daniel, a Computer Science graduate interested in turning
              artificial intelligence into thoughtful, practical software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-quiet" href="#about">
                A little about me <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-credentials">
              <span>The Hong Kong Polytechnic University</span>
              <span className="credential-divider" aria-hidden="true" />
              <span>AI and Big Data stream</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="AI developer focus areas">
            <div className="visual-orbit visual-orbit-outer" />
            <div className="visual-orbit visual-orbit-inner" />
            <div className="visual-glow" />
            <div className="visual-cross visual-cross-one" />
            <div className="visual-cross visual-cross-two" />
            <div className="focus-card">
              <div className="focus-card-top">
                <span className="focus-card-label">A PRACTICAL MINDSET</span>
                <span className="focus-card-index">01 — 03</span>
              </div>
              <div className="focus-graphic" aria-hidden="true">
                <div className="focus-graphic-ring focus-graphic-ring-one" />
                <div className="focus-graphic-ring focus-graphic-ring-two" />
                <div className="focus-graphic-ring focus-graphic-ring-three" />
                <span className="focus-graphic-core">AI</span>
                <span className="focus-node focus-node-one" />
                <span className="focus-node focus-node-two" />
                <span className="focus-node focus-node-three" />
              </div>
              <div className="focus-card-bottom">
                <span>Curiosity into systems</span>
                <span className="focus-card-signal">
                  <i /> LEARNING BY BUILDING
                </span>
              </div>
            </div>
            <span className="visual-caption visual-caption-top">
              HUMAN-CENTRED
            </span>
            <span className="visual-caption visual-caption-bottom">
              MADE TO BE USEFUL
            </span>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-inner">
            <span>ARTIFICIAL INTELLIGENCE</span>
            <i aria-hidden="true" />
            <span>COMPUTER VISION</span>
            <i aria-hidden="true" />
            <span>SOFTWARE SYSTEMS</span>
            <i aria-hidden="true" />
            <span>THOUGHTFUL AUTOMATION</span>
          </div>
        </section>

        <section className="section page-shell" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">SELECTED WORK</p>
              <h2>Ideas made tangible.</h2>
            </div>
            <p className="section-intro">
              A couple of projects that bring together problem-solving,
              software, and curiosity.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.className}`}
                key={project.number}
              >
                <div className="project-card-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>
                <div className="project-card-art" aria-hidden="true">
                  <span className="project-art-orbit" />
                  <span className="project-art-core">
                    {project.number === "01" ? "字" : "YOLO"}
                  </span>
                  <span className="project-art-line project-art-line-one" />
                  <span className="project-art-line project-art-line-two" />
                </div>
                <div className="project-card-copy">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repository <ArrowIcon />
                    </a>
                  ) : (
                    <p className="project-note">{project.note}</p>
                  )}
                </div>
              </article>
            ))}
            <div className="project-next">
              <span className="project-next-mark" aria-hidden="true">
                +
              </span>
              <p className="eyebrow">ROOM FOR WHAT’S NEXT</p>
              <p>
                More work will appear here when there’s a project worth
                sharing.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="page-shell about-layout">
            <div>
              <p className="eyebrow section-kicker">THE PERSON BEHIND THE CODE</p>
              <h2>
                Grounded in
                <br />
                <span className="gradient-text">computer science.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I recently graduated in Computer Science from The Hong Kong
                Polytechnic University, where I followed the AI and Big Data
                stream.
              </p>
              <p>
                I’m drawn to the space between intelligent technology and
                useful products: understanding a problem, exploring an
                approach, and building something people can actually use.
              </p>
              <div className="education-card">
                <div>
                  <p className="education-label">EDUCATION</p>
                  <h3>BSc in Computer Science</h3>
                  <p>The Hong Kong Polytechnic University</p>
                </div>
                <div className="education-result">
                  <strong>3.37</strong>
                  <span>GPA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section page-shell focus-section" id="focus">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">CURRENT TOOLKIT & CURIOSITY</p>
              <h2>What I’m exploring.</h2>
            </div>
            <p className="section-intro">
              A snapshot of the languages I use and the areas I’m keen to keep
              learning.
            </p>
          </div>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li className="skill-item" key={skill.label}>
                <span className="skill-index">0{index + 1}</span>
                <span className="skill-label">{skill.label}</span>
                <span className="skill-detail">{skill.detail}</span>
                <span className="skill-arrow" aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-inner">
            <div>
              <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
              <h2>Good work starts with a conversation.</h2>
            </div>
            <a
              className="button button-primary"
              href="https://github.com/Dan1el730"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark">DY</span>
          <span>Daniel Yeung</span>
        </a>
        <p>Thoughtful software, built with curiosity.</p>
        <a href="#top" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
