'use client';

import { useState } from 'react';

interface GuestbookEntry {
  name: string;
  message: string;
  time: string;
}

const INITIAL_ENTRIES: GuestbookEntry[] = [
  {
    name: 'system',
    message: 'guestbook initialized. leave your mark.',
    time: '2026.01.01',
  },
];

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_ENTRIES);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const now = new Date();
    const formatted = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

    setEntries((prev) => [
      ...prev,
      { name: name.trim(), message: message.trim(), time: formatted },
    ]);
    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#080808',
    border: '1px solid #1E1E22',
    borderRadius: '2px',
    padding: '10px 12px',
    color: '#E8E8E8',
    fontFamily: 'var(--font-jetbrains), monospace',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 100ms',
  };

  return (
    <div
      style={{
        background: '#111113',
        border: '1px solid #1E1E22',
        borderRadius: '2px',
        padding: '24px',
      }}
    >
      {/* Header */}
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11px',
          color: '#8A8A95',
          letterSpacing: '0.08em',
          marginBottom: '20px',
        }}
      >
        // GUESTBOOK
      </div>

      {/* Existing entries */}
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {entries.map((entry, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '11px',
                color: '#D4973B',
                minWidth: '72px',
                flexShrink: 0,
                paddingTop: '1px',
              }}
            >
              {entry.name}
            </span>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '12px',
                  color: '#8A8A95',
                  lineHeight: 1.5,
                }}
              >
                {entry.message}
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  color: '#2A2A30',
                  marginTop: '2px',
                }}
              >
                {entry.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="handle"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={24}
            style={{ ...inputStyle, flex: '0 0 120px' }}
            onFocus={(e) => { e.target.style.borderColor = '#2A2A30'; }}
            onBlur={(e) => { e.target.style.borderColor = '#1E1E22'; }}
          />
          <input
            type="text"
            placeholder="leave a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={140}
            style={{ ...inputStyle, flex: 1 }}
            onFocus={(e) => { e.target.style.borderColor = '#2A2A30'; }}
            onBlur={(e) => { e.target.style.borderColor = '#1E1E22'; }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: '1px solid',
              borderColor: submitted ? '#3B9B5E' : '#2A2A30',
              borderRadius: '2px',
              padding: '6px 16px',
              color: submitted ? '#3B9B5E' : '#8A8A95',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 100ms ease-out',
            }}
            onMouseEnter={(e) => {
              if (!submitted) {
                e.currentTarget.style.borderColor = '#D4973B';
                e.currentTarget.style.color = '#D4973B';
              }
            }}
            onMouseLeave={(e) => {
              if (!submitted) {
                e.currentTarget.style.borderColor = '#2A2A30';
                e.currentTarget.style.color = '#8A8A95';
              }
            }}
          >
            {submitted ? '✓ posted' : '+ add'}
          </button>
        </div>
      </form>
    </div>
  );
}
