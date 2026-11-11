import { useCallback, useState } from 'react';
import { About } from './components/About';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { Experience } from './components/Experience';
import { CallToAction, Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { Process, Strengths } from './components/Services';
import { Skills } from './components/Skills';
import { ToastProvider } from './components/Toast';
import { usePointerEffects } from './hooks/usePointerEffects';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { theme, toggle } = useTheme();
  const onLoaded = useCallback(() => setLoaded(true), []);

  useReveal(loaded);
  usePointerEffects();

  return (
    <ToastProvider>
      <Preloader onDone={onLoaded} />
      <Cursor />
      <ScrollProgress />
      <Background />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Strengths />
        <Process />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </ToastProvider>
  );
}
