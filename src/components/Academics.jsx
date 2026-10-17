import { Fragment } from 'react';
import Section from './Section.jsx';
import useInView from '../hooks/useInView.js';

export default function Academics({ academics }) {
  const [ref, inView] = useInView();

  return (
    <Section id="academics" command="cat academics.txt">
      <dl className={`field${inView ? ' in' : ''}`} ref={ref}>
        {academics.map((item) => (
          <Fragment key={item.label}>
            <dt>{item.label}</dt>
            <dd className="bar">
              {item.display}
              <span className="barwrap" aria-hidden="true">
                <span className="barfill" style={{ '--fill': `${item.percent}%` }} />
              </span>
            </dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
