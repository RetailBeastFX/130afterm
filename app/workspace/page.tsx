'use client';

import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

const TOOLS = [
  {
    name: 'TradingView',
    category: 'ANALYSIS',
    purpose: 'Primary charting and market analysis platform.',
    why: 'Custom Pine Script indicator support, multi-timeframe analysis, clean chart interface. Everything I need is on one screen.',
    link: '/workspace/tradingview',
    features: ['RetailBeastFX indicators', 'Multi-timeframe layout', 'Alert system', 'Web-based — no install'],
  },
  {
    name: 'MT5 via Coinexx',
    category: 'EXECUTION',
    purpose: 'Forex execution — XAUUSD and currency pairs.',
    why: 'MetaTrader 5 is the standard for forex execution. Coinexx for the broker layer. Mobile execution intentionally separated from desktop analysis.',
    link: '/workspace/coinexx',
    features: ['XAUUSD trading', 'Mobile execution', 'One-click order entry', 'Tight spreads on gold'],
  },
  {
    name: 'Webull',
    category: 'EXECUTION',
    purpose: 'Options execution — SPY 0DTE.',
    why: 'Fast mobile options execution. Commission-free. The interface stays out of the way when speed matters at the NY open.',
    link: '/workspace/webull',
    features: ['SPY 0DTE execution', 'Options chain view', 'Mobile-first', 'Commission-free'],
  },
  {
    name: 'ChatGPT / Claude',
    category: 'AI LAYER',
    purpose: 'Post-trade review and system documentation.',
    why: 'Not for analysis — for review. After a trade, AI helps me identify what the system said vs. what I did. Also used to document methodology changes in the changelog.',
    features: ['Post-trade analysis prompts', 'System rule documentation', 'Pattern journaling', 'Changelog generation'],
  },
];

const SETUP_STEPS = [
  {
    number: '01',
    title: 'TradingView Layout',
    steps: [
      'Primary timeframe: 15M for structure, 5M for entry',
      'HTF overlay: 1H and 4H for bias confirmation',
      'RetailBeastFX SMC indicator on all charts',
      'Session boxes enabled: Asian, London, NY',
      'Killzones Plus overlay for precise timing windows',
      'No other indicators — clean chart or no chart',
    ],
  },
  {
    number: '02',
    title: 'Analysis Protocol',
    steps: [
      'Check HTF (1H/4H) bias before session open',
      'Identify premium and discount zones',
      'Mark open-of-day and prior session high/low',
      'Wait for killzone timing window to open',
      'Look for displacement + mitigation at PD array',
      'Entry only after confirmation — no anticipation',
    ],
  },
  {
    number: '03',
    title: 'Execution Rules',
    steps: [
      'Analysis on laptop. Execution on phone. Always.',
      'Options: Webull mobile. Strike = nearest OB/FVG level.',
      'Forex: MT5 mobile. Entry at key structure level.',
      'Risk max: 1-2% per trade. Non-negotiable.',
      'No averaging down. Either the setup is right or it isn\'t.',
      'Document before you close the chart. Always.',
    ],
  },
  {
    number: '04',
    title: 'Session Schedule',
    steps: [
      'Asian (00:00–09:00 UTC): Watch, don\'t trade unless structure is clear',
      'London open (08:00–09:30 UTC): Primary swing entries',
      'NY open (13:30–14:30 UTC): 0DTE primary window',
      'London/NY overlap (13:00–17:00 UTC): Highest opportunity',
      'After hours: Review, document, plan next session',
    ],
  },
];

const KEYBOARD_SHORTCUTS = [
  { keys: 'Alt + 1–9', action: 'Switch between saved chart layouts' },
  { keys: 'Ctrl + Z', action: 'Undo last drawing' },
  { keys: 'Ctrl + Shift + Z', action: 'Redo' },
  { keys: 'Alt + S', action: 'Save chart to cloud' },
  { keys: '1, 2, 3...', action: 'Switch timeframe (1m, 5m, 15m...)' },
  { keys: 'Escape', action: 'Exit drawing tool / deselect' },
  { keys: 'Ctrl + L', action: 'Toggle crosshair lock' },
  { keys: 'Ctrl + A', action: 'Select all objects on chart' },
  { keys: 'D', action: 'Toggle data window' },
  { keys: 'F', action: 'Toggle fullscreen chart' },
];

export default function WorkspacePage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['workspace']}
        title="Operating Environment"
        subtitle="The tools, setup, and protocols. Analysis on laptop. Execution on phone. Intentional."
        stats={[
          { label: 'PRIMARY', value: 'TradingView' },
          { label: 'FOREX', value: 'MT5 · Coinexx' },
          { label: 'OPTIONS', value: 'Webull' },
          { label: 'SYSTEM', value: 'v6' },
        ]}
      />

      {/* ── Analysis vs Execution split ─────────────────────── */}
      <div
        style={{
          background: '#111113',
          border: '1px solid #1E1E22',
          borderRadius: '2px',
          padding: '28px',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          // OPERATING PRINCIPLE
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#8A8A95', marginBottom: '8px', letterSpacing: '0.05em' }}>
              ANALYSIS
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: 300, color: '#E8E8E8', marginBottom: '8px' }}>Laptop</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
              TradingView. Multiple timeframes. Charts full-screen. No distractions.
              This is where the decision is made — before execution.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#8A8A95', marginBottom: '8px', letterSpacing: '0.05em' }}>
              EXECUTION
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: 300, color: '#E8E8E8', marginBottom: '8px' }}>Phone</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
              MT5 for forex. Webull for options. One-click entry.
              By the time I reach for the phone, the decision is already made.
            </div>
          </div>
        </div>
      </div>

      {/* ── Tools ────────────────────────────────────────────── */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          // TOOLS
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              style={{
                background: '#111113',
                border: '1px solid #1E1E22',
                borderRadius: '2px',
                padding: '24px',
                transition: 'background-color 100ms, border-color 100ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#141418';
                e.currentTarget.style.borderColor = '#2A2A30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111113';
                e.currentTarget.style.borderColor = '#1E1E22';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                {tool.link ? (
                  <Link href={tool.link} style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500, color: '#E8E8E8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {tool.name}
                    <span style={{ color: '#D4973B', fontSize: '12px' }}>↗</span>
                  </Link>
                ) : (
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500, color: '#E8E8E8' }}>{tool.name}</span>
                )}
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', color: '#454550', letterSpacing: '0.08em' }}>{tool.category}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#E8E8E8', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                {tool.purpose}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                {tool.why}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {tool.features.map((f) => (
                  <li key={f} style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#454550', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#2A2A30' }}>·</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Setup steps ──────────────────────────────────────── */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          // PLAYBOOKS
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {SETUP_STEPS.map((section) => (
            <div
              key={section.number}
              style={{
                background: '#111113',
                border: '1px solid #1E1E22',
                borderRadius: '2px',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#D4973B', border: '1px solid rgba(212,151,59,0.2)', padding: '2px 6px', borderRadius: '2px' }}>
                  {section.number}
                </span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#E8E8E8', letterSpacing: '0.05em' }}>
                  {section.title}
                </span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.steps.map((step, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#2A2A30', flexShrink: 0, paddingTop: '2px' }}>·</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.5 }}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyboard shortcuts (easter egg) ──────────────────── */}
      <div
        style={{
          marginBottom: '48px',
          background: '#111113',
          border: '1px solid #1E1E22',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #1E1E22',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#D4973B', letterSpacing: '0.1em' }}>
            // KEYBOARD_SHORTCUTS
          </span>
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550' }}>
            TradingView
          </span>
        </div>
        <div style={{ padding: '0' }}>
          {KEYBOARD_SHORTCUTS.map((shortcut, i) => (
            <div
              key={shortcut.keys}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                padding: '12px 24px',
                borderBottom: i < KEYBOARD_SHORTCUTS.length - 1 ? '1px solid #1E1E22' : 'none',
              }}
            >
              <code
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '12px',
                  color: '#D4973B',
                  minWidth: '140px',
                  flexShrink: 0,
                }}
              >
                {shortcut.keys}
              </code>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95' }}>
                {shortcut.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
