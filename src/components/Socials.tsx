import { profile } from '../data/content';
import { GitHub, LinkedIn, Mail, Phone } from './Icons';

const links = [
  { label: 'E-Mail', href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'Telefon', href: `tel:${profile.phoneIntl}`, Icon: Phone, external: false },
  { label: 'GitHub', href: profile.socials.github, Icon: GitHub, external: true },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: LinkedIn, external: true },
].filter((l) => l.href);

export function Socials() {
  return (
    <div className="hero__socials">
      {links.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className="social"
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
