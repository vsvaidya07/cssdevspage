import { useState } from 'react';
import Section from './Section.jsx';

// Modern clipboard API first; older execCommand route as a fallback for
// contexts where navigator.clipboard is blocked (e.g. a file opened directly).
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const box = document.createElement('textarea');
    box.value = text;
    box.setAttribute('readonly', '');
    box.style.position = 'fixed';
    box.style.opacity = '0';
    document.body.appendChild(box);
    box.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(box);
    return ok;
  }
}

export default function Contact({ contact }) {
  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied' | 'failed'

  const handleCopy = async (text) => {
    const ok = await copyToClipboard(text);
    setCopyState(ok ? 'copied' : 'failed');
    setTimeout(() => setCopyState('idle'), 1800);
  };

  const copyLabel = { idle: 'copy', copied: 'copied ✓', failed: 'copy failed' }[copyState];

  return (
    <Section id="contact" command="cat contact.txt">
      <ul className="contact-list">
        {contact.map((item) => (
          <li key={item.label}>
            <span className="k">{item.label}</span> —{' '}
            <a
              href={item.href}
              {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.text}
            </a>
            {item.copy && (
              <button type="button" className="copy-btn" onClick={() => handleCopy(item.text)}>
                {copyLabel}
              </button>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
