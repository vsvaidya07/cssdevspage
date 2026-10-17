import { useState } from 'react';
import Section from './Section.jsx';
import FilterChips from './FilterChips.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ projects }) {
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const visible = category === 'All' ? projects : projects.filter((project) => project.category === category);

  return (
    <Section id="projects" command="cat projects.log">
      <FilterChips options={categories} value={category} onChange={setCategory} label="Filter projects by category" />
      {visible.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
}
