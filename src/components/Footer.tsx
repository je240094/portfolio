import { profile } from '../data/content';

export function CallToAction() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-box reveal">
          <h2>Bereit für den nächsten <span className="gradient-text">Schritt</span>.</h2>
          <p>Ich suche eine Stelle in einem professionellen Entwicklungsteam, in dem ich meine Kenntnisse einbringen und weiter ausbauen kann.</p>
          <a href="#contact" className="btn btn--primary btn--large magnetic">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__big" aria-hidden="true">{profile.name}</div>
        <div className="footer__inner">
          <p>© {new Date().getFullYear()} {profile.name}. Mit ♥ und viel ☕ gestaltet.</p>
          <nav className="footer__links" aria-label="Rechtliches">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#home" className="back-top">Nach oben ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
