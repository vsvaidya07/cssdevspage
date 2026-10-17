import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

export default function Uptime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return <span className="uptime">uptime {pad(h)}:{pad(m)}:{pad(s)}</span>;
}
