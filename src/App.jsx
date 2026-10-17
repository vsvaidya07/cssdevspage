import { useCallback, useEffect, useRef, useState } from 'react';
import {
  profile, navItems, skills, projects, academics, activities, contact, bootLines,
} from './data/portfolio.js';
import useMediaQuery from './hooks/useMediaQuery.js';
import BootScreen from './components/BootScreen.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Uptime from './components/Uptime.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Academics from './components/Academics.jsx';
import Activities from './components/Activities.jsx';
import Contact from './components/Contact.jsx';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      /* storage unavailable — fall back to dark */
    }
    return 'dark';
  });
  const [booting, setBooting] = useState(() => !prefersReducedMotion());
  const [active, setActive] = useState(navItems[0].id);
  const mainRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 720px)');

  // Apply the theme to <html> so CSS variables switch, and remember it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Scroll-spy: highlight the nav link of the section currently in view.
  useEffect(() => {
    const scroller = isMobile ? window : mainRef.current;
    if (!scroller) return undefined;
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = isMobile ? 0 : mainRef.current.getBoundingClientRect().top;
      const height = isMobile ? window.innerHeight : mainRef.current.clientHeight;
      const line = top + height * 0.3;

      const atBottom = isMobile
        ? window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
        : mainRef.current.scrollTop + mainRef.current.clientHeight >= mainRef.current.scrollHeight - 4;

      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      setActive(atBottom ? navItems[navItems.length - 1].id : current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    setActive(id);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const handleBootDone = useCallback(() => setBooting(false), []);

  return (
    <>
      {booting && <BootScreen lines={bootLines} onDone={handleBootDone} />}

      <div className="crt-frame">
        <header className="titlebar">
          <span className="dot r" />
          <span className="dot y" />
          <span className="dot g" />
          <span className="title">{profile.name} — /home/vidhathri</span>
          <div className="titlebar-right">
            <Uptime />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </header>

        <aside className="sidebar">
          <Navbar items={navItems} active={active} onNavigate={handleNavigate} />
        </aside>

        <main ref={mainRef}>
          <About profile={profile} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Academics academics={academics} />
          <Activities activities={activities} />
          <Contact contact={contact} />
        </main>

        <footer className="footer">
          <span>built by {profile.name} · React + Vite</span>
          <span>process exited 0</span>
        </footer>
      </div>
    </>
  );
}
