import { useState } from "react";
import { translations } from "./data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

function App() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  return (
    <div className="portfolio-spa">
      {/*NAVBAR*/}
      <nav className="top-navbar">
        <div className="nav-content">
          <span className="nav-logo">Portafolio</span>
          <button className="btn-lang-nav" onClick={toggleLang}>
            {t.nav.langBtn}
          </button>
        </div>
      </nav>

      <header className="blue-header">
        <img
          src="src/assets/img/perfil.png"
          alt="Perfil"
          className="profile-img"
        />
        <h1>{t.hero.name}</h1>
        <h3>{t.hero.role}</h3>
      </header>

      <main className="main-content-wrapper">
        <section className="card-section">
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
        </section>

        <section className="card-section">
          <h2>{t.skills.title}</h2>
          <div className="skills-grid">
            <div>
              <h4>Front-End</h4>
              <ul>
                {t.skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Data</h4>
              <ul>
                {t.skills.data.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="card-section">
          <h2>{t.experience.title}</h2>
          {t.experience.items.map((job, index) => (
            <div key={index} className="experience-item">
              <h4>
                {job.role} - {job.company}
              </h4>
              <span className="job-date">{job.date}</span>
              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="card-section">
          <h2>{t.education.title}</h2>
          {t.education.items.map((edu, index) => (
            <div key={index} className="education-item">
              <p>
                <strong>{edu.title}</strong> | {edu.place} ({edu.date})
              </p>
            </div>
          ))}
        </section>


              <section className="card-section">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.textFindMe}</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/matías-castro-gonzalez-videla-74a395228/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon icon-linkedin"
            />
          </a>
          <a href="https://github.com/mattzai" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="social-icon icon-github"
            />
          </a>
          <i href="tel:+56926383815" className="contact-link-item">
      <FontAwesomeIcon icon={faPhone} className="social-icon icon-phone" />
      <span className="conNum">  +56 9 2638 3815</span>
    </i>
        </div>
      </section>
      </main>



      <footer className="blue-footer">
        <p>Matías Castro | Email: {t.contact.email}</p>
      </footer>
    </div>
  );
}

export default App;
