'use client';

import type { TradeEntry } from '@/lib/trades';

interface TradeEntryCardProps {
  trade: TradeEntry;
}

export default function TradeEntryCard({ trade }: TradeEntryCardProps) {
  const pnlPositive = trade.pnl > 0;
  const pnlColor = trade.outcome === 'win' ? '#3B9B5E' : trade.outcome === 'loss' ? '#8B4040' : '#454550';
  const pnlSign = trade.pnl > 0 ? '+' : '';

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div
      style={{
        background: '#111113',
        border: '1px solid #1E1E22',
        borderLeft: `3px solid ${pnlColor}`,
        borderRadius: '2px',
        padding: '20px 24px',
        transition: 'background-color 100ms ease-out',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#141418'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111113'; }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: date + instrument + type */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: '#454550',
            }}
          >
            {formatDate(trade.date)}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#E8E8E8',
              fontWeight: 500,
            }}
          >
            {trade.instrument}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#8A8A95',
              background: '#1E1E22',
              padding: '2px 6px',
              borderRadius: '2px',
            }}
          >
            {trade.type}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#454550',
            }}
          >
            {trade.session}
          </span>
        </div>

        {/* Right: P&L */}
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '14px',
            fontWeight: 500,
            color: pnlColor,
          }}
        >
          {pnlSign}${Math.abs(trade.pnl)}
        </span>
      </div>

      {/* Entry / Exit */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '12px' }}>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#454550',
              letterSpacing: '0.08em',
              display: 'block',
            }}
          >
            ENTRY
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#8A8A95',
            }}
          >
            ${trade.entry.toFixed(2)}
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#454550',
              letterSpacing: '0.08em',
              display: 'block',
            }}
          >
            EXIT
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#8A8A95',
            }}
          >
            ${trade.exit.toFixed(2)}
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#454550',
              letterSpacing: '0.08em',
              display: 'block',
            }}
          >
            CONTRACTS
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#8A8A95',
            }}
          >
            {trade.contracts}
          </span>
        </div>
      </div>

      {/* Note */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: '#8A8A95',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {trade.note}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
        {trade.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#2A2A30',
              letterSpacing: '0.05em',
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
