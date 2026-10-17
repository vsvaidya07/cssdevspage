import { useState } from 'react';
import Section from './Section.jsx';
import SkillCard from './SkillCard.jsx';
import FilterChips from './FilterChips.jsx';

export default function Skills({ skills }) {
  // Two pieces of state: which category is filtered, and which skill is open.
  const [category, setCategory] = useState('All');
  const [selectedName, setSelectedName] = useState(skills[0]?.name ?? null);

  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];
  const visible = category === 'All' ? skills : skills.filter((skill) => skill.category === category);
  const selected = skills.find((skill) => skill.name === selectedName);

  return (
    <Section id="skills" command="ls skills/">
      <FilterChips options={categories} value={category} onChange={setCategory} label="Filter skills by category" />

      <div className="skills-grid">
        {visible.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            selected={skill.name === selectedName}
            onSelect={setSelectedName}
          />
        ))}
      </div>

      {selected && (
        <div className="skill-detail" aria-live="polite">
          <p className="prompt">man {selected.name.toLowerCase().replace(/ & /g, '-')}</p>
          <p>
            <strong>{selected.name}</strong> · {selected.category} · {selected.status}
          </p>
          <p className="muted">{selected.blurb}</p>
        </div>
      )}
    </Section>
  );
}
