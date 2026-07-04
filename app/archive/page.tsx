import PageHeader from '@/components/ui/PageHeader';
import Module, { type ModuleSection } from '@/components/archive/Module';

const MODULES: ModuleSection[] = [
  {
    number: '01',
    label: 'FOUNDATION_LAYER',
    comment: 'Core',
    cards: [
      {
        title: 'Market Basics',
        tag: 'CORE',
        items: [
          'BabyPips School of Pipsology',
          'Session behavior & overlap timing',
          'Currency pair mechanics',
          'Risk basics & position sizing',
        ],
        link: 'https://babypips.com/learn/forex',
      },
      {
        title: 'Options Mechanics',
        tag: 'CORE',
        items: [
          'Greeks: Delta, Gamma, Theta, Vega',
          'Theta decay & Vega exposure',
          'Contract behavior & expiry mechanics',
          'Base execution strategies',
        ],
      },
    ],
  },
  {
    number: '02',
    label: 'CORE_METHOD',
    comment: 'Primary system',
    cards: [
      {
        title: 'ICT 2022 Mentorship',
        tag: 'SYSTEM',
        items: [
          'Inner Circle Trader — YouTube',
          'Market structure (BOS / ChoCH)',
          'Liquidity & Displacement',
          'Killzones & optimal trade entry',
        ],
        link: 'https://youtube.com/@InnerCircleTrader',
      },
      {
        title: 'SMC — Smart Money Concepts',
        tag: 'SYSTEM',
        items: [
          'TTrades — YouTube',
          'Order Block theory',
          'Supply & Demand zones',
          'Inducement & liquidity sweeps',
        ],
        link: 'https://youtube.com/@TTrades',
      },
    ],
  },
  {
    number: '03',
    label: 'PRICE_DELIVERY',
    comment: 'How price moves',
    cards: [
      {
        title: 'PD Arrays',
        tag: 'SYSTEM',
        items: [
          'Fair Value Gaps (FVG)',
          'Order Blocks (OB)',
          'Breaker Blocks',
          'Mitigation Blocks',
          'Balanced Price Range (BPR)',
        ],
      },
      {
        title: 'Market Structure',
        tag: 'SYSTEM',
        items: [
          'Break of Structure (BOS)',
          'Change of Character (ChoCH)',
          'Higher High / Lower Low analysis',
          'Internal vs. external liquidity',
        ],
      },
    ],
  },
  {
    number: '04',
    label: 'EXECUTION',
    comment: 'Entry & timing',
    cards: [
      {
        title: 'Session Timing',
        tag: 'SYSTEM',
        items: [
          'Asian session: range building',
          'London open: primary move',
          'NY open: continuation or reversal',
          'London/NY overlap: peak volatility',
        ],
      },
      {
        title: '0DTE SPY Framework',
        tag: 'SYSTEM',
        items: [
          'NY open reaction setup',
          'Call / Put selection based on structure',
          'Entry at premium PD arrays',
          'Exit at next liquidity level',
        ],
      },
    ],
  },
  {
    number: '05',
    label: 'TOOLS_LAYER',
    comment: 'Indicators & utilities',
    cards: [
      {
        title: 'RetailBeastFX SMC',
        tag: 'TOOL',
        items: [
          'Auto-maps ICT / SMC elements',
          'Order Blocks, FVGs, Killzones',
          'Liquidity Pool visualization',
          'Built on TradingView (Pine Script)',
        ],
        link: 'https://whop.com/130afterm',
      },
      {
        title: 'ICT Core Suite',
        tag: 'TOOL',
        items: [
          'Session boxes (Asian/London/NY)',
          'HTF bias display',
          'Kill zone timing',
          'Custom alert conditions',
        ],
      },
    ],
  },
  {
    number: '06',
    label: 'PSYCHOLOGY',
    comment: 'Mental framework',
    cards: [
      {
        title: 'Trading in the Zone',
        tag: 'PSYCHOLOGY',
        items: [
          'Mark Douglas — probabilistic thinking',
          'Detaching outcome from process',
          'Consistency over performance',
          'The mental game of execution',
        ],
      },
      {
        title: 'Operating Principles',
        tag: 'PSYCHOLOGY',
        items: [
          'Every setup is just a probability',
          'The system produces results, not trades',
          'Document everything — no exceptions',
          'Losses are data, not failures',
        ],
      },
    ],
  },
  {
    number: '07',
    label: 'AI_LAYER',
    comment: 'Protocol',
    cards: [
      {
        title: 'AI Trade Review Protocol',
        tag: 'AI',
        items: [
          'Post-trade analysis via GPT-4',
          'System version changelog tracking',
          'Pattern recognition documentation',
          'Custom prompting for structure review',
        ],
      },
      {
        title: 'Automation Layer',
        tag: 'AI',
        items: [
          'Trade log organization',
          'Chart screenshot analysis',
          'System rule documentation',
          'In development — not production ready',
        ],
      },
    ],
  },
  {
    number: '08',
    label: 'STILL_LEARNING',
    comment: 'Active research',
    cards: [
      {
        title: 'Futures',
        tag: 'CORE',
        items: [
          'ES / NQ futures structure',
          'CME margin requirements',
          'Contract rollover timing',
          'Planned entry: 2026–2027',
        ],
      },
      {
        title: 'Crypto Markets',
        tag: 'CORE',
        items: [
          'BTC / ETH market structure',
          'Liquidity dynamics vs. TradFi',
          'On-chain data layer',
          'Long-term interest, not active yet',
        ],
      },
    ],
  },
];

const CHANGELOG = [
  { version: 'v6', date: '2026-Q2', note: 'RetailBeastFX v6 — rebuilt SMC core. Execution Engine integration. Cleaner OB mapping.' },
  { version: 'v5', date: '2026-Q1', note: 'Added FVG + BPR detection. Removed lagging indicators. System leaner by ~40%.' },
  { version: 'v4', date: '2025-Q4', note: 'First full ICT killzone integration. Session-based entry filtering added.' },
  { version: 'v3', date: '2025-Q3', note: 'Switched from supply/demand to ICT order flow. Major methodology shift.' },
  { version: 'v2', date: '2025-Q1', note: 'Added SMC concepts. TTrades framework integrated. BOS/ChoCH tracking.' },
  { version: 'v1', date: '2024-Q3', note: 'System started. Basic market structure. BabyPips foundation complete.' },
];

export default function ArchivePage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['archive']}
        title="Archive"
        subtitle="Method, resources, and system history. Self-taught. Open systems over paid dependency."
        stats={[
          { label: 'MODULES', value: '08' },
          { label: 'STATUS', value: 'EVOLVING' },
          { label: 'SYSTEM', value: 'v6' },
          { label: 'SINCE', value: '2024' },
        ]}
      />

      {/* Modules */}
      {MODULES.map((section) => (
        <Module key={section.number} section={section} />
      ))}

      {/* System Changelog */}
      <div style={{ marginTop: '48px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}
        >
          // SYSTEM_CHANGELOG
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {CHANGELOG.map((entry, i) => (
            <div
              key={entry.version}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '16px 0',
                borderBottom: i < CHANGELOG.length - 1 ? '1px solid #1E1E22' : 'none',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#D4973B', minWidth: '32px', flexShrink: 0 }}>
                {entry.version}
              </span>
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', color: '#454550', minWidth: '72px', flexShrink: 0, paddingTop: '1px' }}>
                {entry.date}
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                {entry.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
