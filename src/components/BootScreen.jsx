import { Fragment, useEffect, useState } from 'react';

// Renders a line and colours any [OK] marker.
function Line({ text }) {
  const parts = text.split('[OK]');
  return (
    <div className="boot-line">
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <span className="ok">[OK]</span>}
        </Fragment>
      ))}
    </div>
  );
}

export default function BootScreen({ lines, onDone }) {
  const [typed, setTyped] = useState([]); // finished lines
  const [current, setCurrent] = useState(''); // line being typed
  const [hiding, setHiding] = useState(false);

  // Typewriter effect: types each line character by character.
  useEffect(() => {
    let cancelled = false;
    let timer;

    const finish = () => {
      timer = setTimeout(() => !cancelled && setHiding(true), 350);
    };

    const typeLine = (lineIndex, charIndex) => {
      if (cancelled) return;
      if (lineIndex >= lines.length) return finish();
      const line = lines[lineIndex];
      if (charIndex <= line.length) {
        setCurrent(line.slice(0, charIndex));
        timer = setTimeout(() => typeLine(lineIndex, charIndex + 1), line.length === 0 ? 80 : 14);
      } else {
        setTyped((prev) => [...prev, line]);
        setCurrent('');
        timer = setTimeout(() => typeLine(lineIndex + 1, 0), 120);
      }
    };

    typeLine(0, 0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines]);

  // After the fade-out finishes, tell the parent to unmount us.
  useEffect(() => {
    if (!hiding) return undefined;
    const t = setTimeout(onDone, 550);
    return () => clearTimeout(t);
  }, [hiding, onDone]);

  return (
    <div className={`boot${hiding ? ' hide' : ''}`} onClick={() => setHiding(true)} aria-hidden="true">
      <div className="boot-text">
        {typed.map((line, i) => <Line key={i} text={line} />)}
        <Line text={current} />
        <span className="boot-cursor" />
      </div>
      <div className="boot-skip">click to skip</div>
    </div>
  );
}
