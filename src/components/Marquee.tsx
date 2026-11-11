import { Fragment } from 'react';
import { marqueeItems } from '../data/content';

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
