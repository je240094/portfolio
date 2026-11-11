import { useState } from 'react';
import { projects, type Project, type ProjectCategory } from '../data/content';
import { ArrowUpRight, GitHub } from './Icons';
import { ProjectMedia } from './ProjectMock';
import { ProjectModal } from './ProjectModal';
import { SectionHead } from './SectionHead';

type Filter = 'all' | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [filtered, setFiltered] = useState(false);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHead eyebrow="03 — Projekte" title={<>Meine <span className="gradient-text">Projekte</span></>}>
          <div className="filters" role="group" aria-label="Projekte filtern">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter${filter === f.id ? ' is-active' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => {
                  setFilter(f.id);
                  setFiltered(true);
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionHead>

        <div className="projects__grid">
          {projects.map((p) => {
            const hidden = filter !== 'all' && p.category !== filter;
            // Nach dem ersten Filtern: Sichtbarkeit fest setzen, da React className neu schreibt
            const cls = ['project', 'reveal', filtered && 'is-visible', p.wide && filter === 'all' && 'project--wide', hidden && 'is-hidden']
              .filter(Boolean)
              .join(' ');
            return (
              <article key={p.id} className={cls} onClick={() => setSelected(p)}>
                <ProjectMedia project={p} />
                <div className="project__info">
                  {p.badge && <span className="project__badge"><span className="badge__dot" />{p.badge}</span>}
                  <div className="project__tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <div className="project__links">
                    <button
                      className="project__link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(p);
                      }}
                    >
                      Details ansehen <ArrowUpRight />
                    </button>
                    {p.repo && (
                      <a
                        href={p.repo}
                        className="project__link project__link--muted"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
