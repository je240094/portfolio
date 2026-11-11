import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/content';
import type { Theme } from '../hooks/useTheme';
import { Moon, Sun } from './Icons';

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Scroll-Zustand: Hintergrund + ausblenden beim Runterscrollen
  useEffect(() => {
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      setScrolled(y > 30);
      setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-Spy: aktive Sektion markieren
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((s): s is HTMLElement => s !== null);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menü bei Escape schließen
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  const cls = ['nav', scrolled && 'is-scrolled', hidden && !open && 'is-hidden'].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" aria-label="Startseite">
          {profile.initial}<span>.</span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link${active === item.id ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
          >
            <Sun className="icon-sun" />
            <Moon className="icon-moon" />
          </button>
          <a href="#contact" className="btn btn--small btn--primary magnetic nav__cta">Kontakt</a>
          <button
            className={`burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
