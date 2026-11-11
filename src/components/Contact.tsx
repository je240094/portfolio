import { useEffect, useState, type FormEvent } from 'react';
import { profile } from '../data/content';
import { Mail, Phone, Pin, Send } from './Icons';
import { SectionHead } from './SectionHead';
import { useToast } from './Toast';

const projectTypes = ['Vollzeit', 'Teilzeit', 'Remote', 'Hybrid', 'Vor Ort'];
const budgets = ['Jobangebot', 'Vorstellungsgespräch', 'Freelance-Projekt', 'Allgemeine Frage'];

interface FormState {
  name: string;
  email: string;
  budget: string;
  types: string[];
  message: string;
}

type Errors = Partial<Record<'name' | 'email' | 'budget' | 'message', true>>;

const empty: FormState = { name: '', email: '', budget: '', types: [], message: '' };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = true;
  if (!f.budget) e.budget = true;
  if (f.message.trim().length < 10) e.message = true;
  return e;
}

function LocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: profile.timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return <strong>{time}</strong>;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);
  const toast = useToast();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleType = (t: string) =>
    set('types', form.types.includes(t) ? form.types.filter((x) => x !== t) : [...form.types, t]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ ok: false, text: 'Bitte alle Felder korrekt ausfüllen.' });
      return;
    }
    setSending(true);
    setStatus(null);
    // Öffnet das E-Mail-Programm mit vorausgefüllter Nachricht.
    // Für Versand direkt von der Website: Dienst wie Formspree oder EmailJS anbinden.
    const subject = `${form.budget} – Anfrage von ${form.name}`;
    const body = [
      form.message,
      '',
      form.types.length ? `Arbeitsmodell: ${form.types.join(', ')}` : '',
      `Antwort an: ${form.name} <${form.email}>`,
    ]
      .filter((line, i) => i < 2 || line)
      .join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setStatus({ ok: true, text: 'Dein E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht dort ab.' });
    toast('✉️ E-Mail-Entwurf erstellt');
  };

  const fieldCls = (key: keyof Errors) => `field${errors[key] ? ' is-error' : ''}`;

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHead eyebrow="07 — Kontakt" title={<>Lassen Sie uns <span className="gradient-text">sprechen</span></>} />

        <div className="contact__grid">
          <div className="contact__info reveal">
            <p className="lead">Sie suchen einen motivierten Entwickler für Ihr Team? Ich freue mich auf Ihre Nachricht.</p>
            <a href={`mailto:${profile.email}`} className="contact__item">
              <span className="contact__icon"><Mail /></span>
              <div><small>E-Mail</small><strong>{profile.email}</strong></div>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__item">
              <span className="contact__icon"><Phone /></span>
              <div><small>Telefon</small><strong>{profile.phone}</strong></div>
            </a>
            <div className="contact__item">
              <span className="contact__icon"><Pin /></span>
              <div><small>Standort</small><strong>{profile.location} · vor Ort, hybrid oder remote</strong></div>
            </div>
            <div className="contact__time">
              <span className="badge__dot" />
              Lokale Zeit: <LocalTime />
            </div>
          </div>

          <form className="form reveal" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <div className={fieldCls('name')}>
                <input id="name" placeholder=" " value={form.name} onChange={(e) => set('name', e.target.value)} aria-invalid={!!errors.name} />
                <label htmlFor="name">Name / Unternehmen</label>
              </div>
              <div className={fieldCls('email')}>
                <input id="email" type="email" placeholder=" " value={form.email} onChange={(e) => set('email', e.target.value)} aria-invalid={!!errors.email} />
                <label htmlFor="email">E-Mail-Adresse</label>
              </div>
            </div>

            <div className={fieldCls('budget')}>
              <select id="budget" required value={form.budget} onChange={(e) => set('budget', e.target.value)} aria-invalid={!!errors.budget}>
                <option value="" disabled hidden />
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
              <label htmlFor="budget">Anliegen</label>
            </div>

            <div className="chips" role="group" aria-label="Arbeitsmodell">
              {projectTypes.map((t) => (
                <label className="chip" key={t}>
                  <input type="checkbox" checked={form.types.includes(t)} onChange={() => toggleType(t)} />
                  <span>{t}</span>
                </label>
              ))}
            </div>

            <div className={fieldCls('message')}>
              <textarea id="message" rows={5} placeholder=" " value={form.message} onChange={(e) => set('message', e.target.value)} aria-invalid={!!errors.message} />
              <label htmlFor="message">Ihre Nachricht</label>
            </div>

            <button type="submit" className={`btn btn--primary btn--full magnetic${sending ? ' is-loading' : ''}`} disabled={sending}>
              <span>{sending ? 'Wird gesendet' : 'Nachricht senden'}</span>
              <Send />
            </button>
            <p className={`form__status${status ? (status.ok ? ' ok' : ' err') : ''}`} role="status">{status?.text}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
