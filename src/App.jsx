import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <div className="brand">Bakul Arora</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div>
            <a className="btn" href="/assets/resume.pdf" download>
              Download Resume
            </a>
            <button
              className="btn btn-ghost toggle"
              onClick={() => setLight((s) => !s)}
            >
              {light ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero" id="about">
          <div>
            <div className="pill">Hello, I'm Bakul 👋</div>
            <h1 className="title">Full-Stack Developer & Problem Solver</h1>
            <p className="subtitle">
              Building fast, reliable web apps. I enjoy React, Node.js and solving DSA problems.
              Currently exploring AI integrations into real-world apps.
            </p>
            <div className="badges">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express</span>
              <span className="badge">MongoDB / SQL</span>
              <span className="badge">Java</span>
              <span className="badge">DSA</span>
            </div>
          </div>
          <div className="hero-card">
            <h3 style={{ marginTop: 0 }}>Quick Info</h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                lineHeight: 1.8,
                color: "var(--sub)",
              }}
            >
              <li>B.Tech CSE (AI) — MIET, Meerut</li>
              <li>Open to SDE/Intern roles</li>
              <li>Based in India</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="card-grid">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "SQL",
              "HTML",
              "CSS",
              "Java",
              "DSA",
            ].map((s) => (
              <div key={s} className="card">
                <div className="body">
                  <h3>{s}</h3>
                  <p>
                    Hands-on experience with {s} in projects and problem solving.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="card-grid">
            <div className="card">
              <img src="/assets/ai-courtroom.png" alt="AI Courtroom" />
              <div className="body">
                <h3>AI Courtroom</h3>
                <p>
                  AI-powered court case query system to speed up legal research
                  and insights.
                </p>
                <a
                  className="btn"
                  href="https://ai-court-room-iota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="card">
              <img src="/assets/brainbuzz.png" alt="BrainBuzz" />
              <div className="body">
                <h3>BrainBuzz</h3>
                <p>
                  A React-based interactive quiz platform with animations and
                  category-wise questions.
                </p>
                <a
                  className="btn"
                  href="http://react-brainbuzz-final.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="links">
            <a href="mailto:bakularora413@gmail.com">📧 Email</a>
            <a
              href="https://github.com/bakularora"
              target="_blank"
              rel="noreferrer"
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bakul-arora-b83128296/"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/_bakularora_/"
              target="_blank"
              rel="noreferrer"
            >
              🧩 LeetCode
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Bakul Arora • All Rights Reserved
      </footer>
    </div>
  );
}
