'use client';

import { useState, useEffect } from 'react';
import { getCurrentSession, isSessionActive, SESSIONS } from '@/lib/sessions';

export default function SessionClock() {
  const [time, setTime] = useState<Date | null>(null);
  const [session, setSession] = useState(getCurrentSession());

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      setSession(getCurrentSession());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const sessionInfo = SESSIONS[session];
  const sessions3 = ['asian', 'london', 'new-york'] as const;

  return (
    <div
      style={{
        background: '#111113',
        border: '1px solid #1E1E22',
        borderRadius: '2px',
        padding: '32px',
      }}
    >
      {/* Session label */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          className={isSessionActive(session) ? 'pulse-amber' : ''}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: session === 'after-hours' ? '#3A3A40' : '#D4973B',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: session === 'after-hours' ? '#454550' : '#D4973B',
          }}
        >
          {sessionInfo.label}
        </span>
      </div>

      {/* Time display */}
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '48px',
          fontWeight: 400,
          color: '#E8E8E8',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '8px',
          minHeight: '56px',
        }}
      >
        {time ? formatTime(time) : '--:-- --'}
      </div>

      {/* Session description */}
      <p
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '12px',
          color: '#454550',
          marginBottom: '20px',
          lineHeight: 1.5,
        }}
      >
        {sessionInfo.description}
      </p>

      {/* Session dots */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {sessions3.map((s) => {
          const active = isSessionActive(s);
          const info = SESSIONS[s];
          return (
            <div
              key={s}
              title={info.description}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'default' }}
            >
              <span
                className={active ? 'pulse-live' : ''}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: active ? '#3B9B5E' : '#3A3A40',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: active ? '#8A8A95' : '#2A2A30',
                  letterSpacing: '0.05em',
                }}
              >
                {info.label === 'ASIAN' ? 'Asian' : info.label === 'LONDON' ? 'London' : 'New York'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
