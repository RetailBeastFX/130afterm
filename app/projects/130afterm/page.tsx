import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

export default function AfterMPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['projects', '130afterm']}
        title="130AfterM (Portfolio)"
        subtitle="A custom-built operator log designed to document the process of trading, building, and learning."
        stats={[
          { label: 'STACK', value: 'Next.js' },
          { label: 'STYLE', value: 'Tailwind' },
          { label: 'HOST', value: 'Netlify' },
        ]}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '48px',
          alignItems: 'start',
          marginBottom: '64px',
        }}
      >
        {/* Left — content */}
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
              This website exists because I grew tired of social media algorithms and sterile Notion templates. I wanted a digital space that felt like opening my actual laptop while I stepped away from the desk.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '11px',
                color: '#D4973B',
                letterSpacing: '0.1em',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              // DESIGN PHILOSOPHY
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              If MySpace had continued evolving into 2026 instead of disappearing, this is what a personal page would feel like. It's not a resume. It's not a marketing funnel for a trading course. It's a highly curated, dense dashboard of exactly what I'm working on right now.
            </p>

            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>The Desk Layout:</strong> The homepage uses a masonry grid that acts as a structural map to my physical and digital workspace (TradingView, Coinexx, etc.).
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Live Data:</strong> The trading log and system status components pull from a centralized data layer, keeping the site factual and historically accurate.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>No Fluff:</strong> No autoplay videos, no pop-up newsletter captures, no scrolling parallax animations. Just raw information and intentional design.
              </li>
            </ul>

            <div
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '11px',
                color: '#D4973B',
                letterSpacing: '0.1em',
                marginTop: '16px',
                marginBottom: '8px',
              }}
            >
              // TECHNICAL STACK
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              The site is a statically exported Next.js (App Router) application. It is styled entirely from a custom Tailwind CSS configuration and deployed on Netlify. It uses a strictly defined color token system to maintain the "after-hours terminal" aesthetic across all pages.
            </p>

          </div>
        </div>

        {/* Right — sidebar info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              background: '#111113',
              border: '1px solid #1E1E22',
              borderRadius: '2px',
              padding: '24px',
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
              // SOURCE
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#E8E8E8', marginBottom: '8px' }}>
                GitHub Repository
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                The full source code for this portfolio is public.
              </div>
            </div>

            <a 
              href="https://github.com/RetailBeastFX/130afterm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 0',
                background: '#D4973B',
                color: '#080808',
                textAlign: 'center',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '2px',
                marginBottom: '16px',
              }}
            >
              VIEW SOURCE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
