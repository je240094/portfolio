import { useState } from 'react';
import { education, practice, type TimelineEntry } from '../data/content';
import { SectionHead } from './SectionHead';

type Tab = 'edu' | 'practice';

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline is-active">
      <div className="timeline__line"><span /></div>
      {entries.map((e) => (
        <div className="tl-item" key={e.title}>
          <div className="tl-item__dot" />
          <div className="tl-item__card">
            <span className="tl-item__date">{e.date}</span>
            <h3>{e.title}</h3>
            <span className="tl-item__company">{e.place}</span>
            <p>{e.text}</p>
            {e.points && <ul className="tl-item__points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            {e.tags && <div className="project__tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  const [tab, setTab] = useState<Tab>('edu');

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHead eyebrow="04 — Werdegang" title={<>Ausbildung &amp; <span className="gradient-text">Praxis</span></>} />

        <div className="tabs reveal" role="tablist">
          <button role="tab" aria-selected={tab === 'edu'} className={`tab${tab === 'edu' ? ' is-active' : ''}`} onClick={() => setTab('edu')}>
            Ausbildung &amp; Qualifikation
          </button>
          <button role="tab" aria-selected={tab === 'practice'} className={`tab${tab === 'practice' ? ' is-active' : ''}`} onClick={() => setTab('practice')}>
            Praxis &amp; Projekte
          </button>
        </div>

        <div className="reveal" role="tabpanel">
          <Timeline key={tab} entries={tab === 'edu' ? education : practice} />
        </div>
      </div>
    </section>
  );
}
