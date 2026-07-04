import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

export default function TradingViewPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['workspace', 'tradingview']}
        title="Why I Use TradingView"
        subtitle="The foundation of the entire system. Pure analysis. Zero execution."
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
              TradingView is where the actual work happens. While execution takes seconds on my phone, analysis takes hours on my laptop. Every trade I take originates from a TradingView chart.
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
              // WHY IT'S NON-NEGOTIABLE
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              The platform is industry standard for a reason, but for my specific workflow, it provides three critical capabilities:
            </p>

            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Custom Pine Script:</strong> My entire system relies on custom indicators I've built (RetailBeastFX v6). TradingView's Pine Script allows me to programmatically map liquidity, session times, and order blocks exactly how I want them.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Multi-Timeframe Layouts:</strong> I need to see the 1H/4H structure alongside the 15m/5m entry timeframes simultaneously. Being able to split the screen and link crosshairs keeps my bias anchored to the higher timeframe.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Cloud Sync:</strong> If I need to step away from the laptop, my drawings and alerts sync perfectly to the mobile app for monitoring.
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
              Everyone. Whether you trade forex, crypto, or options, charting on broker-provided platforms is usually a mistake. Keep your analysis platform dedicated purely to charting, and keep your broker purely for execution.
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
              // ANALYSIS PLATFORM
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#E8E8E8', marginBottom: '8px' }}>
                TradingView
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                The core analysis engine for everything I trade. 
              </div>
            </div>

            <a 
              href="https://www.tradingview.com/pricing/?share_your_love=deboincognito"
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
              GET TRADINGVIEW
            </a>

            <div
              style={{
                borderTop: '1px solid #1E1E22',
                paddingTop: '16px',
              }}
            >
              <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', lineHeight: 1.6, margin: 0 }}>
                Disclosure: If you sign up using my referral link, I may receive a referral reward at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
