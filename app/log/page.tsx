import PageHeader from '@/components/ui/PageHeader';
import TradeEntryCard from '@/components/log/TradeEntryCard';
import { TRADES, MONTHLY_SUMMARIES, getTradeSummary } from '@/lib/trades';

export default function LogPage() {
  const summary = getTradeSummary(TRADES);

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['log']}
        title="Market Log"
        subtitle="Real entries. Documented wins and losses. No highlight reel."
        stats={[
          { label: 'TRADES', value: String(summary.total) },
          { label: 'WIN RATE', value: `${summary.winRate}%` },
          { label: 'TOTAL P&L', value: `+$${summary.totalPnl}` },
          { label: 'STATUS', value: 'ACTIVE' },
        ]}
      />

      {/* ── Main layout ──────────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 260px',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {/* Left — trade entries */}
        <div>
          {/* Month groupings */}
          {MONTHLY_SUMMARIES.map((month) => {
            const monthTrades = TRADES.filter((t) => t.date.startsWith('2026-05'));
            const monthSummary = getTradeSummary(monthTrades);

            return (
              <div key={month.month} style={{ marginBottom: '48px' }}>
                {/* Month header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #1E1E22',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '13px', color: '#E8E8E8' }}>
                    {month.month}
                  </span>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#3B9B5E' }}>
                      {monthSummary.wins}W
                    </span>
                    <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#8B4040' }}>
                      {monthSummary.losses}L
                    </span>
                    <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: monthSummary.totalPnl >= 0 ? '#3B9B5E' : '#8B4040' }}>
                      {monthSummary.totalPnl >= 0 ? '+' : ''}${monthSummary.totalPnl}
                    </span>
                  </div>
                </div>

                {/* Entries */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {monthTrades.map((trade) => (
                    <TradeEntryCard key={trade.id} trade={trade} />
                  ))}
                </div>

                {/* Month summary card */}
                <div
                  style={{
                    background: '#111113',
                    border: '1px solid #1E1E22',
                    borderRadius: '2px',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    KEY LESSON
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.65, margin: 0 }}>
                    {month.keyLesson}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right — sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Instruments */}
          <div
            style={{
              background: '#111113',
              border: '1px solid #1E1E22',
              borderRadius: '2px',
              padding: '20px',
            }}
          >
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#D4973B', letterSpacing: '0.1em', marginBottom: '16px' }}>
              // INSTRUMENTS
            </div>
            {[
              { label: 'SPY 0DTE', note: 'primary — NY open' },
              { label: 'XAUUSD', note: 'forex — MT5 via Coinexx' },
              { label: 'IWM', note: 'experimental' },
            ].map(({ label, note }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#E8E8E8' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550' }}>{note}</span>
              </div>
            ))}
          </div>

          {/* Method */}
          <div
            style={{
              background: '#111113',
              border: '1px solid #1E1E22',
              borderRadius: '2px',
              padding: '20px',
            }}
          >
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#D4973B', letterSpacing: '0.1em', marginBottom: '16px' }}>
              // METHOD
            </div>
            {['ICT / SMC', 'Market Structure', 'Order Blocks', 'Fair Value Gaps', 'Liquidity Pools', 'Session Timing'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#2A2A30', flexShrink: 0 }}>·</span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#454550' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              padding: '16px',
              borderLeft: '2px solid #1E1E22',
            }}
          >
            <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#454550', lineHeight: 1.65, margin: 0 }}>
              This log documents the process, not the performance. Losses are documented the same way as wins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
