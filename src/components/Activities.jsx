import Section from './Section.jsx';

export default function Activities({ activities }) {
  return (
    <Section id="activities" command="ls activities/">
      {activities.map((activity) => (
        <article key={activity.title} className="card">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <div className="tags">
            {activity.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </Section>
  );
}
