import PageHeader from '@/components/ui/PageHeader';

const TIMELINE = [
  {
    year: '2008',
    label: 'Hardware',
    detail: 'Started fixing computers. Jailbreaking. Taking things apart to see how they work. Still do.',
  },
  {
    year: '2013',
    label: 'Bitcoin',
    detail: 'First awareness of Bitcoin. Didn\'t fully understand it yet. Filed it under "interesting."',
  },
  {
    year: '2017–20',
    label: 'Crypto',
    detail: 'Wallets, mining sites, faucets, exchanges. Learning by doing. Lost some. Learned more.',
  },
  {
    year: '2022',
    label: 'Markets',
    detail: 'Serious transition into financial markets. BabyPips. ICT 2022 Mentorship. Started the real work.',
  },
  {
    year: '2024',
    label: 'Structure',
    detail: 'SMC. Order blocks. Liquidity. Displacement. Started documenting everything. System started forming.',
  },
  {
    year: '2025',
    label: 'RetailBeastFX',
    detail: 'Built first TradingView indicator. Started trading SPY 0DTE with a defined system. Still refining.',
  },
  {
    year: '2026',
    label: 'Now',
    detail: 'Primarily trading XAUUSD and SPY 0DTE options. Execution from phone, analysis on laptop. System v6.',
  },
];

const CURRENTLY = [
  { key: 'TRADING', value: 'XAUUSD · SPY 0DTE options' },
  { key: 'STUDYING', value: 'ICT PD Arrays — Fair Value Gaps' },
  { key: 'BUILDING', value: 'RetailBeastFX Execution Engine v2' },
  { key: 'READING', value: 'Trading in the Zone — Mark Douglas' },
];

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['about']}
        title="The Person"
        subtitle="A father, trader, and lifelong technology enthusiast. I learn by taking things apart."
      />

      {/* ── Two-column layout ──────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Left — narrative */}
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '640px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#E8E8E8', lineHeight: 1.75, margin: 0 }}>
              Before trading, I spent years fixing computers, jailbreaking devices, editing videos, and
              exploring technology out of curiosity. Not for a career. Just because I wanted to understand
              how things worked.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              Around 2013, I became aware of Bitcoin. Years later I experimented with crypto wallets,
              mining sites, faucets, and exchanges—not to get rich, just to understand the technology.
              That curiosity eventually expanded into financial markets.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              Today I primarily trade SPY 0DTE options and XAUUSD. I don&apos;t think of myself as a forex
              trader or an options trader. I&apos;m just a trader. The instrument is the vehicle.
              The framework stays the same.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              My edge comes from technical analysis, market structure, liquidity, timing, and execution.
              Thousands of hours watching charts. Pattern recognition. Repetition.
            </p>

            <div
              style={{
                borderLeft: '2px solid #D4973B',
                paddingLeft: '20px',
                marginTop: '8px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#E8E8E8', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
                &ldquo;The market changes. The framework stays the same.&rdquo;
              </p>
            </div>

            {/* How I work */}
            <div style={{ marginTop: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: '#D4973B',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                // OPERATING STYLE
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Analysis happens on a laptop. TradingView. Charts full-screen.',
                  'Execution happens from the phone. MT5 for forex. Webull for options.',
                  'The separation between analysis and execution is intentional.',
                  'I don\'t trade from the same screen I analyze from. Never have.',
                ].map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#2A2A30', flexShrink: 0, paddingTop: '3px' }}>·</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What this site is */}
            <div
              style={{
                background: '#111113',
                border: '1px solid #1E1E22',
                borderRadius: '2px',
                padding: '20px',
                marginTop: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: '#8A8A95',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                // WHAT THIS IS
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.65, margin: 0 }}>
                This website is not a portfolio. Not a trading signal page. Not a course funnel.
                It&apos;s a digital space that documents who I am, what I&apos;m interested in, and what I&apos;m building.
                Part archive, part workspace. When you leave you shouldn&apos;t feel like you visited a brand.
                You should feel like you visited a person.
              </p>
            </div>
          </div>
        </div>

        {/* Right — currently */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Currently block */}
          <div
            style={{
              background: '#111113',
              border: '1px solid #1E1E22',
              borderRadius: '2px',
              padding: '20px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '11px',
                color: '#D4973B',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              // CURRENTLY
            </div>
            {CURRENTLY.map(({ key, value }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', letterSpacing: '0.08em' }}>
                  {key}
                </span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#8A8A95' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <div style={{ marginTop: '72px', maxWidth: '720px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '28px',
          }}
        >
          // TIMELINE
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {TIMELINE.map((entry, i) => (
            <div
              key={entry.year}
              style={{
                display: 'flex',
                gap: '24px',
                paddingBottom: i < TIMELINE.length - 1 ? '24px' : '0',
                borderBottom: i < TIMELINE.length - 1 ? '1px solid #1E1E22' : 'none',
                paddingTop: i > 0 ? '24px' : '0',
              }}
            >
              <div style={{ flexShrink: 0, width: '72px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#D4973B' }}>
                  {entry.year}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: '#E8E8E8', marginBottom: '4px' }}>
                  {entry.label}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                  {entry.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
