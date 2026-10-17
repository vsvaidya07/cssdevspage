import useInView from '../hooks/useInView.js';

// Shared wrapper for every portfolio section: adds the anchor id, the
// terminal-style heading and the scroll-reveal animation.
export default function Section({ id, command, children }) {
  const [ref, inView] = useInView();

  return (
    <section id={id} ref={ref} className={`section reveal${inView ? ' in' : ''}`}>
      {command && (
        <h2 className="section-title">
          <span className="prompt">{command}</span>
        </h2>
      )}
      {children}
    </section>
  );
}
