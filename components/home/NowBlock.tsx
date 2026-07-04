import { NOW } from '@/lib/now';

export default function NowBlock() {
  const rows = [
    { key: 'SESSION', value: NOW.session },
    { key: 'FOCUS', value: NOW.focus },
    { key: 'STUDYING', value: NOW.studying },
    { key: 'SYSTEM', value: NOW.system },
    ...(NOW.playing ? [{ key: 'PLAYING', value: NOW.playing }] : []),
  ];

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
          color: '#D4973B',
          letterSpacing: '0.1em',
          marginBottom: '16px',
        }}
      >
        // NOW
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {rows.map(({ key, value }) => (
          <div key={key} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                color: '#454550',
                letterSpacing: '0.08em',
                minWidth: '72px',
                flexShrink: 0,
              }}
            >
              {key}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '12px',
                color: '#8A8A95',
                lineHeight: 1.4,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Updated */}
      <div
        style={{
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid #1E1E22',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          color: '#2A2A30',
        }}
      >
        updated {NOW.updated}
      </div>
    </div>
  );
}
