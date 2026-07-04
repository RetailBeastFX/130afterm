'use client';

import PageHeader from '@/components/ui/PageHeader';

const COLLECTIONS = [
  {
    id: 'charts',
    label: 'Charts',
    description: 'Market structure captured at significant levels.',
    count: 4,
  },
  {
    id: 'workspace',
    label: 'Workspace',
    description: 'The environment where the work happens.',
    count: 0,
  },
  {
    id: 'visual',
    label: 'Visual',
    description: 'Whatever catches the eye.',
    count: 0,
  },
];

// Chart screenshots from Downloads folder — real images
const CHART_IMAGES = [
  { file: null, label: 'XAUUSD', date: '2026-06-12', caption: 'GOLD — key level rejection' },
  { file: null, label: 'SPY', date: '2026-06-29', caption: 'SPY — structure break confirmation' },
  { file: null, label: 'SPY', date: '2026-06-30', caption: 'SPY — NY open displacement' },
  { file: null, label: 'SPY', date: '2026-07-03', caption: 'SPY — morning range build' },
];

export default function GalleryPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['gallery']}
        title="Gallery"
        subtitle="What gets photographed. Charts, workspace, and the visual world in between."
      />

      {/* Collection filters */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '40px' }}>
        {COLLECTIONS.map((col, i) => (
          <div
            key={col.id}
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              paddingRight: '24px',
              marginRight: '24px',
              borderRight: i < COLLECTIONS.length - 1 ? '1px solid #1E1E22' : 'none',
            }}
          >
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: i === 0 ? '#D4973B' : '#454550' }}>
              {col.label}
            </span>
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#2A2A30' }}>
              {col.count}
            </span>
          </div>
        ))}
      </div>

      {/* Charts grid */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#454550',
            letterSpacing: '0.08em',
            marginBottom: '20px',
          }}
        >
          // CHARTS
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '12px',
          }}
        >
          {CHART_IMAGES.map((img, i) => (
            <div
              key={i}
              style={{
                background: '#111113',
                border: '1px solid #1E1E22',
                borderRadius: '2px',
                overflow: 'hidden',
                transition: 'border-color 100ms',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2A2A30'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1E1E22'; }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  height: '180px',
                  background: '#080808',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #1E1E22',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#2A2A30', marginBottom: '4px' }}>
                    {img.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#1E1E22' }}>
                    CHART_IMG
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 300, color: '#8A8A95', marginBottom: '4px' }}>
                  {img.caption}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550' }}>
                  {img.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photography coming soon */}
      <div
        style={{
          background: '#111113',
          border: '1px solid #1E1E22',
          borderRadius: '2px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '48px',
        }}
      >
        <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#2A2A30', letterSpacing: '0.1em', marginBottom: '12px' }}>
          // WORKSPACE + VISUAL — LOADING
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#454550', lineHeight: 1.65, margin: 0 }}>
          Personal photography coming. Not stock. Not staged.<br />
          Real desk, real light, real setup.
        </p>
      </div>

      {/* Note */}
      <div style={{ maxWidth: '480px' }}>
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#454550', lineHeight: 1.65, margin: 0 }}>
          No captions needed for everything.<br />
          The image either says something or it doesn&apos;t.
        </p>
      </div>
    </div>
  );
}
