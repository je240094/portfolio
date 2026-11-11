import { profile, stats, type Stat } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { Download } from './Icons';
import { SectionHead } from './SectionHead';

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="stat-card reveal tilt">
      <div className="stat-card__num">
        {value}
        {stat.suffix}
      </div>
      <div className="stat-card__label">{stat.label}</div>
    </div>
  );
}

export function About() {
  const [statsRef, statsVisible] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead eyebrow="01 — Über mich" title={<>Motiviert, neugierig, <span className="gradient-text">lösungsorientiert</span></>} />

        <div className="about__grid">
          <div className="about__text reveal">
            <p className="lead">
              Ich bin {profile.firstName}, Junior-Softwareentwickler aus {profile.location} mit praktischer Erfahrung über den gesamten Stack.
            </p>
            <p>
              Diese Erfahrung habe ich in eigenständig umgesetzten Projekten gesammelt: vom Frontend mit <strong>TypeScript</strong>,{' '}
              <strong>Angular</strong> und <strong>Vue 3</strong> über REST-Schnittstellen mit <strong>Node.js</strong> und{' '}
              <strong>Express</strong> bis zur Datenbank mit <strong>PostgreSQL</strong>.
            </p>
            <p>
              KI-Tools wie Claude und Codex setze ich routiniert in Entwicklung und Test ein und prüfe die Ergebnisse kritisch. Ich lege
              Wert auf sauberen, wartbaren Code und arbeite mich schnell in neue Technologien ein. Mein Ziel: diese Kenntnisse in einem
              professionellen Entwicklungsteam einbringen und weiter ausbauen.
            </p>

            <ul className="about__facts">
              <li><span>Standort</span><strong>{profile.location}</strong></li>
              <li><span>Abschluss</span><strong>Certified Web Application Developer</strong></li>
              <li><span>Sprachen</span><strong>{profile.languages}</strong></li>
              <li><span>Status</span><strong className="ok">Offen für Jobangebote</strong></li>
            </ul>

            {profile.cvUrl && (
              <a href={profile.cvUrl} className="btn btn--primary magnetic" target="_blank" rel="noreferrer">
                Lebenslauf ansehen <Download />
              </a>
            )}
          </div>

          <div className="about__stats" ref={statsRef}>
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} start={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
