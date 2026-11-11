import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  children?: ReactNode;
}

export function SectionHead({ eyebrow, title, desc, children }: Props) {
  const head = (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section__title">{title}</h2>
      {desc && <p className="section__desc">{desc}</p>}
    </>
  );

  if (children) {
    return (
      <div className="section__head section__head--row reveal">
        <div>{head}</div>
        {children}
      </div>
    );
  }
  return <div className="section__head reveal">{head}</div>;
}
