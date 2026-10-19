import React, { useEffect, useState } from "react";
import profile from "../Data/profile";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = profile.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="site-nav">
      <button className="brand" onClick={() => goTo("home")} type="button">
        <span className="brand-mark">SP</span>
        <span className="brand-name">{profile.name}</span>
      </button>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {profile.nav.map((item) => (
          <button
            key={item.id}
            type="button"
            className={active === item.id ? "active" : ""}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
