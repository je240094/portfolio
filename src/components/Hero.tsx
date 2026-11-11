import { profile } from '../data/content';
import { useTypewriter } from '../hooks/useTypewriter';
import { ArrowRight } from './Icons';
import { Socials } from './Socials';

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="badge reveal">
            <span className="badge__dot" />
            Offen für neue Herausforderungen
          </div>

          <h1 className="hero__title">
            <span className="line reveal">Ich entwickle</span>
            <span className="line reveal"><span className="gradient-text">moderne</span></span>
            <span className="line reveal">Web-Apps<span className="accent">.</span></span>
          </h1>

          <p className="hero__subtitle reveal">
            Hallo, ich bin <strong>{profile.name}</strong> —{' '}
            <span className="typed" aria-hidden="true">{typed}</span>
            <span className="typed-caret" aria-hidden="true">|</span>
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <br />
            Vom Frontend mit TypeScript, Angular und Vue 3 über REST-APIs mit Node.js bis zur Datenbank mit PostgreSQL.
          </p>

          <div className="hero__cta reveal">
            <a href="#projects" className="btn btn--primary magnetic">
              Projekte ansehen <ArrowRight />
            </a>
            <a href={profile.cvUrl} className="btn btn--ghost magnetic" target="_blank" rel="noreferrer">Lebenslauf (PDF)</a>
          </div>

          <div className="reveal">
            <Socials />
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="avatar tilt">
            <div className="avatar__ring" />
            <div className="avatar__img avatar__img--mono">
              {/* Eigenes Foto: Bild in /public ablegen und hier <img src="/foto.jpg" alt={profile.name} /> einsetzen */}
              <span>{profile.initial}</span>
            </div>
            <div className="float-card float-card--1">
              <span className="float-card__icon">⚡</span>
              <div><strong>Full-Stack</strong><small>Frontend &amp; Backend</small></div>
            </div>
            <div className="float-card float-card--2">
              <span className="float-card__icon">🎓</span>
              <div><strong>Zertifiziert</strong><small>Web Application Developer</small></div>
            </div>
            <div className="float-card float-card--3">
              <span className="code-chip">&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Nach unten scrollen">
        <span className="mouse"><span className="wheel" /></span>
        <span>Scroll</span>
      </a>
    </section>
  );
}
