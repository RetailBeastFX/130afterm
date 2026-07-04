import PageHeader from '@/components/ui/PageHeader';
import ProjectCard from '@/components/projects/ProjectCard';

const PROJECTS = [
  {
    name: 'RetailBeastFX SMC Indicator',
    status: 'LIVE' as const,
    problem:
      'Manually identifying ICT/SMC elements (Order Blocks, FVGs, Liquidity Pools) in real-time is slow and error-prone. Miss one and you miss the setup.',
    description:
      'Automated mapping of core ICT / SMC elements on TradingView. Built to eliminate the manual work of identifying order blocks, fair value gaps, and killzones — so you can focus on reading the market, not marking it up.',
    link: 'https://whop.com/130afterm',
    tags: ['TradingView', 'Pine Script', 'ICT', 'SMC', 'Order Blocks', 'FVG'],
  },
  {
    name: 'RBFX Execution Engine',
    status: 'BUILDING' as const,
    problem:
      'Having analysis is one thing. Having a structured framework for entry, position sizing, and exit that stays consistent under pressure is another.',
    description:
      'A companion indicator to RetailBeastFX. Handles execution layer — entry confirmation signals, risk-based position sizing, and exit targets based on the same structural logic used in the main indicator. Currently in v6 testing.',
    tags: ['Pine Script', 'Execution', 'Risk Management', 'v6'],
  },
  {
    name: 'Risk Calculator',
    status: 'LIVE' as const,
    problem:
      'Quick position sizing without leaving TradingView or doing mental math mid-session.',
    description:
      'A simple in-browser tool. Enter account size, risk %, and stop distance — get position size. Built for the moment before execution when you need the number fast.',
    tags: ['Utility', 'Risk', 'Position Sizing'],
  },
  {
    name: 'Strategy Backtester',
    status: 'BUILDING' as const,
    problem:
      'Backtesting ICT setups manually on charts takes hours and introduces recall bias. Need a faster way to validate structure logic against historical data.',
    description:
      'Custom backtester for ICT/SMC methodology. In early development. The goal is a tool that maps historical OBs and FVGs and tests entry/exit rules against them at scale.',
    tags: ['Backtesting', 'ICT', 'Python', 'Data'],
  },
  {
    name: 'RBFX Killzones Plus',
    status: 'LIVE' as const,
    problem:
      'Standard session boxes don\'t account for the nuance of ICT killzone timing — the 20–30 minute windows within sessions where optimal moves occur.',
    description:
      'Session killzone highlighter with precise timing for London open, NY open, and AM killzone windows. Shows where you should be watching the chart — and where you probably shouldn\'t trade.',
    tags: ['TradingView', 'Pine Script', 'Sessions', 'Killzones'],
  },
];

export default function ProjectsPage() {
  const live = PROJECTS.filter((p) => p.status === 'LIVE');
  const building = PROJECTS.filter((p) => p.status === 'BUILDING');

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['projects']}
        title="Projects"
        subtitle="Indicators and utilities. Everything starts from a problem I ran into myself."
        stats={[
          { label: 'LIVE', value: String(live.length) },
          { label: 'BUILDING', value: String(building.length) },
          { label: 'PLATFORM', value: 'TradingView' },
        ]}
      />

      {/* Live projects */}
      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#3B9B5E',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          // SHIPPED
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {live.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>

      {/* Building projects */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          // IN THE LAB
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {building.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>

      {/* Note */}
      <div
        style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '1px solid #1E1E22',
          maxWidth: '540px',
        }}
      >
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#454550', lineHeight: 1.65, margin: 0 }}>
          None of these are sold as signals. None are automation. They&apos;re layers of precision on top
          of the same manual analysis process. The work doesn&apos;t disappear — the friction does.
        </p>
      </div>
    </div>
  );
}
