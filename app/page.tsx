import SessionClock from '@/components/home/SessionClock';
import NowBlock from '@/components/home/NowBlock';
import FolderNav from '@/components/home/FolderNav';
import Guestbook from '@/components/home/Guestbook';
import DeskLayout from '@/components/home/DeskLayout';
import {
  CurrentlyBlock,
  StatusBlock,
  MusicBlock,
  FactBlock,
} from '@/components/home/MicroWidgets';

export default function Home() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      {/* ── Identity header ──────────────────────────────────────── */}
      <div style={{ marginBottom: '48px' }}>
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
            maxWidth: '600px',
            margin: 0,
          }}
        >
          Father. Trader. Builder.{' '}
          <span style={{ color: '#454550' }}>
            Documenting the process. Not the highlight reel.
          </span>
        </p>
      </div>

      {/* ── Dashboard Grid ───────────────────────────────────────── */}
      <div
        className="dashboard-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '16px',
          marginBottom: '64px',
        }}
      >
        {/* ROW 1 */}
        <div style={{ gridColumn: 'span 3' }}>
          <StatusBlock />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <DeskLayout />
        </div>
        <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SessionClock />
          <NowBlock />
        </div>

        {/* ROW 2 */}
        <div style={{ gridColumn: 'span 4' }}>
          <FolderNav />
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <CurrentlyBlock />
        </div>
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <MusicBlock />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', height: '100%' }}>
            <FactBlock title="Bitcoin" value="2013" detail="Mt. Gox era." />
            <FactBlock title="Markets" value="2020" detail="First real trade." />
          </div>
        </div>
      </div>

      {/* ── Responsive override for small screens ──────────────── */}
      <style>{`
        @media (max-width: 1024px) {
          .dashboard-grid > div {
            grid-column: span 12 !important;
          }
          .dashboard-grid {
            display: flex !important;
            flex-direction: column;
          }
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
