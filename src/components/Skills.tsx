import { skillGroups, techStack, type SkillIcon } from '../data/content';
import { Code, Cpu, Server, Tool } from './Icons';
import { SectionHead } from './SectionHead';

const icons: Record<SkillIcon, typeof Code> = { code: Code, server: Server, tool: Tool, ai: Cpu };

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHead
          eyebrow="02 — Skills"
          title={<>Technische <span className="gradient-text">Kenntnisse</span></>}
          desc="Technologien, mit denen ich arbeite: vom Frontend über REST-Schnittstellen bis zur Datenbank."
        />
        <div className="skills__grid">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon];
            return (
              <div className="skill-card reveal" key={g.title}>
                <div className="skill-card__icon"><Icon /></div>
                <h3>{g.title}</h3>
                <div className="skill-chips">
                  {g.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                <p className="skill-card__note">{g.note}</p>
              </div>
            );
          })}
        </div>
        <div className="tech-cloud reveal" aria-hidden="true">
          {techStack.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}
