import SessionClock from '@/components/home/SessionClock';
import NowBlock from '@/components/home/NowBlock';
import FolderNav from '@/components/home/FolderNav';
import Guestbook from '@/components/home/Guestbook';

export default function Home() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      {/* ── Identity header ──────────────────────────────────────── */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            className="pulse-amber"
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#D4973B',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: '#D4973B',
              letterSpacing: '0.1em',
            }}
          >
            ONLINE · AFTER HOURS
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '48px',
            fontWeight: 200,
            color: '#E8E8E8',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          }}
        >
          130AfterM
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 300,
            color: '#8A8A95',
            lineHeight: 1.6,
            maxWidth: '480px',
            margin: 0,
          }}
        >
          Trader. Builder. Documenting the process.{' '}
          <span style={{ color: '#454550' }}>
            SPY 0DTE · XAUUSD · Technical Analysis.
          </span>
        </p>
      </div>

      {/* ── Main grid ────────────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '24px',
          marginBottom: '32px',
          alignItems: 'start',
        }}
      >
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SessionClock />
          <FolderNav />
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <NowBlock />

          {/* About snippet */}
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
                color: '#8A8A95',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              // ABOUT ME
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#E8E8E8',
                lineHeight: 1.6,
                margin: '0 0 8px 0',
              }}
            >
              I trade and build things.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 300,
                color: '#8A8A95',
                lineHeight: 1.6,
                margin: '0 0 12px 0',
              }}
            >
              Most of what I make starts from solving problems I run into myself.
              Forex, options, price structure — I study it, document it, and build tools around it.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '12px',
                color: '#454550',
                margin: 0,
              }}
            >
              This space is part archive, part workspace. Not a highlight reel.
            </p>
          </div>
        </div>
      </div>

      {/* ── Responsive override for small screens ──────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid #1E1E22',
          margin: '32px 0',
        }}
      />

      {/* ── Guestbook ─────────────────────────────────────────── */}
      <div style={{ marginBottom: '0', maxWidth: '720px' }}>
        <Guestbook />
      </div>
    </div>
  );
}
