import { Fragment } from 'react';
import Section from './Section.jsx';

export default function About({ profile }) {
  const [before, after] = profile.tagline.split(profile.highlight);

  return (
    <Section id="about">
      <pre className="ascii" aria-hidden="true">{profile.ascii}</pre>
      <p className="prompt">whoami</p>
      <h1 className="name">
        {profile.name}
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="subtitle">{profile.role}</p>
      <p className="tagline">
        {before}
        <span className="hl">{profile.highlight}</span>
        {after}
      </p>

      <dl className="field">
        {profile.facts.map((fact) => (
          <Fragment key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
