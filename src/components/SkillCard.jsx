export default function SkillCard({ skill, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`skill${selected ? ' selected' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(skill.name)}
    >
      <span className="skill-name">{skill.name}</span>
      <span className="skill-status">{skill.status}</span>
    </button>
  );
}
