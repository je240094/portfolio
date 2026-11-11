import { useEffect } from 'react';

/** Blendet alle `.reveal`-Elemente beim Scrollen ein (gestaffelt). */
export function useReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal')) : [];
          const index = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = `${Math.min(index * 90, 450)}ms`;
          el.classList.add('is-visible');
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
}
