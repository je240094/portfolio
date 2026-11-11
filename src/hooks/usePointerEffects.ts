import { useEffect } from 'react';

const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 3D-Tilt für `.tilt`, magnetische Buttons für `.magnetic`, Spotlight für `.service`. */
export function usePointerEffects() {
  useEffect(() => {
    if (!finePointer() || reducedMotion()) return;

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tilt = target.closest<HTMLElement>('.tilt');
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
      }

      const mag = target.closest<HTMLElement>('.magnetic');
      if (mag) {
        const r = mag.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        mag.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      }

      const spot = target.closest<HTMLElement>('.service');
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
        spot.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const onOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const related = e.relatedTarget as Node | null;
      ['.tilt', '.magnetic'].forEach((sel) => {
        const el = target?.closest<HTMLElement>(sel);
        if (el && !el.contains(related)) el.style.transform = '';
      });
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerout', onOut);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onOut);
    };
  }, []);
}
