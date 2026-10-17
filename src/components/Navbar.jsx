import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Sidebar (desktop) / top bar (mobile). A highlight pill slides and resizes
// to whichever link is hovered, then settles back on the active section.
export default function Navbar({ items, active, onNavigate }) {
  const linkRefs = useRef({});
  const [hovered, setHovered] = useState(null);
  const [box, setBox] = useState(null);
  const [tick, setTick] = useState(0);

  const target = hovered ?? active;

  useLayoutEffect(() => {
    const el = linkRefs.current[target];
    if (el) setBox({ x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight });
  }, [target, tick]);

  // Re-measure when the layout changes (rotate phone, resize window).
  useEffect(() => {
    const onResize = () => setTick((t) => t + 1);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const highlightStyle = box
    ? { opacity: 1, width: box.w, height: box.h, transform: `translate(${box.x}px, ${box.y}px)` }
    : undefined;

  return (
    <nav className="nav" aria-label="Sections" onMouseLeave={() => setHovered(null)}>
      <span className="nav-highlight" aria-hidden="true" style={highlightStyle} />
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          ref={(el) => { linkRefs.current[item.id] = el; }}
          className={item.id === active ? 'active' : ''}
          aria-current={item.id === active ? 'true' : undefined}
          onMouseEnter={() => setHovered(item.id)}
          onFocus={() => setHovered(item.id)}
          onBlur={() => setHovered(null)}
          onClick={(event) => {
            event.preventDefault();
            onNavigate(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
