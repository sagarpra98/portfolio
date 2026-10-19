import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav";
import profile from "./Data/profile";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 40 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        profile.contact.emailjs.serviceId,
        profile.contact.emailjs.templateId,
        formRef.current,
        profile.contact.emailjs.publicKey
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
        },
        () => setSending(false)
      );
    e.target.reset();
  };

  return (
    <div className="app-shell">
      <Nav />

      <main>
        <section id="home" className="hero">
          <div className="hero-copy" data-aos="fade-up">
            <p className="eyebrow">{profile.availability}</p>
            <h1>
              {profile.name}
              <span>{profile.title}</span>
            </h1>
            <p className="lede">{profile.tagline}</p>
            <p className="meta">
              {profile.location} · {profile.email}
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={profile.resume} target="_blank" rel="noreferrer">
                Download updated resume
              </a>
              <a className="btn" href="#contact">
                Discuss a project
              </a>
            </div>
            <div className="social-row">
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.social.email}>Email</a>
            </div>
          </div>

          <div className="phone-wrap" data-aos="fade-left">
            <div className="phone">
              <div className="notch" />
              <img src={profile.photo} alt={profile.name} />
              <div className="phone-caption">
                <strong>{profile.firstName}</strong>
                <span>iOS · Swift · React Native</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {profile.stats.map((stat) => (
            <article key={stat.label} data-aos="fade-up">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="about">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">How I work</p>
            <h2>Mobile products built around real user problems</h2>
            <p>{profile.summary}</p>
          </div>
          <ul className="pitch-list">
            {profile.impactPoints.map((item) => (
              <li key={item} data-aos="fade-up">
                {item}
              </li>
            ))}
          </ul>
          <div className="focus-grid">
            {profile.focusAreas.map((area) => (
              <article key={area.title} data-aos="fade-up">
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">Experience</p>
            <h2>Products shipped, problems solved</h2>
          </div>
          <div className="experience-list">
            {profile.experience.map((item) => (
              <article
                className={item.period ? "" : "without-period"}
                key={`${item.company}-${item.period}`}
                data-aos="fade-up"
              >
                {item.period ? <span>{item.period}</span> : null}
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">Skills</p>
            <h2>What I use to ship mobile products</h2>
          </div>
          <div className="skill-groups">
            {profile.skillGroups.map((group) => (
              <article key={group.title} data-aos="fade-up">
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="apps">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">Selected apps</p>
            <h2>Production work, not just demos</h2>
            <p>
              Each card is a shipped product: role, stack, and App Store link when public.
            </p>
          </div>
          <div className="app-grid">
            {profile.apps.map((app) => (
              <article className="app-card" key={app.title} data-aos="fade-up">
                <div className="app-shot">
                  {app.image ? (
                    <img src={app.image} alt={app.title} />
                  ) : (
                    <div className="app-fallback">{app.title.charAt(0)}</div>
                  )}
                </div>
                <div className="app-body">
                  <p className="client">{app.client}</p>
                  <h3>{app.title}</h3>
                  <p>{app.highlight}</p>
                  <p className="role-line">
                    {[app.role, app.architecture, app.tenure].filter(Boolean).join(" · ")}
                  </p>
                  {app.solution ? (
                    <p className="app-solution">
                      <strong>Problem solved:</strong> {app.solution}
                    </p>
                  ) : null}
                  <div className="chips">
                    {app.technologies.slice(0, 6).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {app.appStore ? (
                    <a className="store-link" href={app.appStore} target="_blank" rel="noreferrer">
                      View on App Store
                    </a>
                  ) : (
                    <span className="store-link muted">Store link not listed</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">Education</p>
            <h2>Foundation in computer engineering and iOS</h2>
          </div>
          <div className="edu-list">
            {profile.education.map((item) => (
              <article key={item.course} data-aos="fade-up">
                <span>{item.year}</span>
                <div>
                  <h3>{item.course}</h3>
                  <p>
                    {item.institute}
                    {item.grade ? ` · ${item.grade}` : ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-head" data-aos="fade-up">
            <p className="eyebrow">Contact</p>
            <h2>{profile.contact.heading}</h2>
            <p>{profile.contact.blurb}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card" data-aos="fade-up">
              <h3>Direct</h3>
              <a href={profile.social.email}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>
            <form ref={formRef} onSubmit={sendEmail} data-aos="fade-up">
              <input name="user_name" placeholder="Your name" required />
              <input name="user_email" type="email" placeholder="Work email" required />
              <input name="user_contact" placeholder="Phone (optional)" />
              <input name="user_subject" placeholder="Role / company" required />
              <textarea name="user_message" rows="4" placeholder="A short note" required />
              <button className="btn primary" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </button>
              {sent ? <p className="thanks">Thanks — I’ll get back to you soon.</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {profile.name} · Mobile app developer
      </footer>
    </div>
  );
}

export default App;
