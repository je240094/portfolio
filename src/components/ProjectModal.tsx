import { useEffect, useRef, useState } from 'react';
import type { Project } from '../data/content';
import { ArrowUpRight, GitHub } from './Icons';
import { ProjectMedia } from './ProjectMock';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  // Letztes Projekt behalten, damit die Schließen-Animation Inhalt zeigt
  const [shown, setShown] = useState<Project | null>(project);
  if (project && project !== shown) setShown(project);

  const closeBtn = useRef<HTMLButtonElement>(null);
  const open = project !== null;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <div className={`modal${open ? ' is-open' : ''}`} aria-hidden={!open} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal__backdrop" onClick={onClose} />
      {shown && (
        <div className="modal__panel">
          <button className="modal__close" onClick={onClose} aria-label="Schließen" ref={closeBtn}>✕</button>
          <div className="modal__media">
            <ProjectMedia project={shown} />
          </div>
          <div className="modal__body">
            <div className="project__tags">{shown.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <h3 id="modalTitle">{shown.title}</h3>
            <p>{shown.long}</p>
            <div className="modal__meta">
              <div><small>Art</small><strong>{shown.kind}</strong></div>
              <div><small>Rolle</small><strong>{shown.role}</strong></div>
              {shown.year && <div><small>Zeitraum</small><strong>{shown.year}</strong></div>}
            </div>
            <ul className="modal__highlights">
              {shown.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            {(shown.url || shown.repo) && (
              <div className="modal__actions">
                {shown.repo && (
                  <a href={shown.repo} className="btn btn--primary" target="_blank" rel="noreferrer">
                    <GitHub /> Code auf GitHub
                  </a>
                )}
                {shown.url && (
                  <a href={shown.url} className="btn btn--ghost" target="_blank" rel="noreferrer">
                    Live ansehen <ArrowUpRight />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
