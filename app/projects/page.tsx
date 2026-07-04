import PageHeader from '@/components/ui/PageHeader';
import ProjectCard from '@/components/projects/ProjectCard';

const PROJECTS = [
  {
    name: 'RetailBeastFX [v6]',
    status: 'LIVE' as const,
    problem:
      'Manually identifying ICT/SMC elements (Order Blocks, FVGs, Liquidity Pools) in real-time is slow and error-prone. Miss one and you miss the setup.',
    description:
      'The flagship execution engine. Automated mapping of core ICT / SMC elements on TradingView. Built to eliminate the manual work of marking up charts so you can focus entirely on reading the market.',
    link: '/projects/retailbeastfx',
    tags: ['TradingView', 'Pine Script', 'SMC', 'Order Blocks'],
  },
  {
    name: '130AfterM (Portfolio)',
    status: 'LIVE' as const,
    problem:
      'Social media is algorithmic and sterile. Notion templates are too rigid. I needed a space to document my trading process that felt like my own digital desk.',
    description:
      'This website. A custom-built operator log designed to document the process of trading, building, and learning. Built outside the constraints of traditional portfolio templates.',
    link: '/projects/130afterm',
    tags: ['Next.js', 'React', 'Tailwind', 'Design'],
  },

  {
    name: 'Risk Calculator',
    status: 'BUILDING' as const,
    problem:
      'Quick position sizing without leaving TradingView or doing mental math mid-session.',
    description:
      'A simple in-browser tool. Enter account size, risk %, and stop distance — get position size. Built for the moment before execution when you need the number fast.',
    link: 'https://github.com/RetailBeastFX',
    tags: ['Utility', 'Risk', 'Position Sizing'],
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
        subtitle="Tools, indicators, and systems. Everything here starts from a problem I ran into myself."
        stats={[
          { label: 'LIVE', value: String(live.length) },
          { label: 'BUILDING', value: String(building.length) },
          { label: 'PLATFORM', value: 'TradingView & Web' },
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
          // CORE SYSTEMS
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
          // UTILITIES
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
          The code isn&apos;t the edge. The execution is the edge. These tools simply remove friction so the execution can happen flawlessly.
        </p>
      </div>
    </div>
  );
}
