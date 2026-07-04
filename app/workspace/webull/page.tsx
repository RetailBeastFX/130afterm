import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

export default function WebullPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['workspace', 'webull']}
        title="Why I Use Webull"
        subtitle="Fast mobile execution for SPY 0DTE options. No desktop distractions."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '48px',
          alignItems: 'start',
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
              If you’ve read my <Link href="/workspace" style={{ color: '#D4973B', textDecoration: 'none' }}>Operating Environment</Link> breakdown, you know I strictly separate analysis from execution. I chart on my laptop using TradingView, and I execute trades on my phone. 
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              For forex, I use MT5 via Coinexx. But for SPY 0DTE options—which require extreme precision and speed right at the NY open—I use Webull.
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
              // WHY IT WORKS FOR ME
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              When trading 0DTE options, the interface needs to get out of the way. You don't have time to navigate clunky menus or confirm multiple prompts when a setup triggers. Webull’s mobile options chain is the cleanest I’ve found. 
            </p>

            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Zero Commissions:</strong> Critical when scaling in and out of 0DTE contracts.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Options Chain Clarity:</strong> I can see exactly what strike I need relative to the underlying price without squinting.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Speed:</strong> The tap-to-execute flow is seamless.
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
              // WHO IT'S GOOD FOR
            </div>
            
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              It’s ideal if you’re trading options and want a fast, mobile-first execution platform that doesn’t charge you to get into a trade. If you’re looking to chart complex SMC/ICT concepts directly in the app, I wouldn't recommend it—use TradingView for that. Use Webull purely for hitting the button.
            </p>

          </div>
        </div>

        {/* Right — referral block */}
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
              // EXECUTION PLATFORM
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#E8E8E8', marginBottom: '8px' }}>
                Webull
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                My preferred broker for 0DTE options execution on mobile.
              </div>
            </div>

            <a 
              href="https://www.webull.com/ko-yield/1781245463663-9de632?inviteCode=RrvtJjwpsNdI&source=US_WorldCup_50&hl=en"
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
              OPEN ACCOUNT
            </a>

            <div
              style={{
                borderTop: '1px solid #1E1E22',
                paddingTop: '16px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', lineHeight: 1.6, margin: 0 }}>
                Disclosure: If you open an account using my referral link, I may receive a referral reward at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
