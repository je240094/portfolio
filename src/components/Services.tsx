import { interests, processSteps, strengths, type StrengthIcon } from '../data/content';
import { Brain, Cpu, Heart, Layers, Rocket, Users } from './Icons';
import { SectionHead } from './SectionHead';

const icons: Record<StrengthIcon, typeof Brain> = {
  brain: Brain,
  rocket: Rocket,
  layers: Layers,
  cpu: Cpu,
  users: Users,
};

export function Strengths() {
  return (
    <section className="section services" id="strengths">
      <div className="container">
        <SectionHead
          eyebrow="05 — Stärken"
          title={<>Was ich ins Team <span className="gradient-text">mitbringe</span></>}
          desc="Persönliche Stärken, die meine Arbeit als Entwickler prägen."
        />
        <div className="services__grid">
          {strengths.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <div className="service reveal tilt" key={s.title}>
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="service__icon"><Icon /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            );
          })}
          <div className="service service--interests reveal tilt">
            <div className="service__icon"><Heart /></div>
            <h3>Interessen</h3>
            <div className="skill-chips">
              {interests.map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHead eyebrow="06 — Arbeitsweise" title={<>So arbeite <span className="gradient-text">ich</span></>} />
        <div className="process__grid">
          {processSteps.map((s, i) => (
            <div className="step reveal" key={s.title}>
              <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
