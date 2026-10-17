import { useRef } from 'react';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // Subtle 3D tilt that follows the cursor (skipped on touch devices).
  const handleMove = (event) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-2px)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = '';
  };

  return (
    <article className="card" ref={cardRef} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <h3>{project.title}</h3>
      <div className="meta">{project.meta}</div>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      {project.link && (
        <a className="card-link" href={project.link} target="_blank" rel="noopener noreferrer">
          view on GitHub →
        </a>
      )}
    </article>
  );
}
