import type { CSSProperties } from 'react';
import type { Project } from '../data/content';

/** Stilisierte Vorschau-Grafik eines Projekts (ersetzbar durch echte Screenshots). */
export function ProjectMedia({ project }: { project: Project }) {
  const style = { '--c1': project.colors[0], '--c2': project.colors[1] } as CSSProperties;
  return (
    <div className="project__media" style={style}>
      <Mock type={project.mock} />
    </div>
  );
}

function Mock({ type }: { type: Project['mock'] }) {
  switch (type) {
    case 'browser':
      return (
        <div className="mock mock--browser">
          <div className="mock__bar"><i /><i /><i /></div>
          <div className="mock__body">
            <div className="mock__hero" />
            <div className="mock__row"><span /><span /><span /></div>
          </div>
        </div>
      );
    case 'kanban':
      return (
        <div className="mock mock--kanban">
          {[3, 2, 2, 1].map((cards, col) => (
            <div className="mock__col" key={col}>
              <i />
              {Array.from({ length: cards }, (_, c) => (
                <span key={c} className={col === 1 && c === 0 ? 'is-drag' : undefined} />
              ))}
            </div>
          ))}
        </div>
      );
    case 'grid':
      return <div className="mock mock--grid">{Array.from({ length: 6 }, (_, i) => <span key={i} />)}</div>;
    case 'dash':
      return (
        <div className="mock mock--dash">
          <div className="mock__side" />
          <div className="mock__chart">
            {[40, 70, 55, 90, 65, 80].map((h, i) => (
              <span key={i} style={{ '--h': `${h}%` } as CSSProperties} />
            ))}
          </div>
        </div>
      );
  }
}
