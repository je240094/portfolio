import { useEffect, useState } from 'react';
import { profile } from '../data/content';

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    let finishTimer = 0;
    const id = window.setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      setProgress(Math.floor(p));
      if (p >= 100) {
        window.clearInterval(id);
        finishTimer = window.setTimeout(() => {
          setDone(true);
          onDone();
        }, 300);
      }
    }, 70);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(finishTimer);
    };
  }, [onDone]);

  return (
    <div className={`preloader${done ? ' is-done' : ''}`} aria-hidden={done}>
      <div className="preloader__inner">
        <div className="preloader__logo">{profile.initial}<span>.</span></div>
        <div className="preloader__bar"><span style={{ width: `${progress}%` }} /></div>
        <div className="preloader__count">{progress}%</div>
      </div>
    </div>
  );
}
