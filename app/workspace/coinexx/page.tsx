import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

export default function CoinexxPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['workspace', 'coinexx']}
        title="Why I Use Coinexx (MT5)"
        subtitle="Forex execution, tight spreads, and crypto funding."
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
              While Webull is my tool for options, my forex execution (specifically XAUUSD and major currency pairs) goes through MetaTrader 5 connected to Coinexx. 
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              As with options, I keep execution strictly on mobile to enforce the separation between analysis (TradingView on laptop) and action (MT5 on phone).
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
              // THE BROKER LAYER
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              MT5 is just the terminal. The actual liquidity and execution speed depend entirely on the broker you connect it to. I route my MT5 through Coinexx for three primary reasons:
            </p>

            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Tight Spreads on Gold:</strong> XAUUSD is highly sensitive to spread slippage, especially during the London/NY overlap. Coinexx provides consistently tight pricing.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>Crypto Funding:</strong> Fast deposits and withdrawals directly via crypto, which aligns with my background in that space.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>High Leverage Availability:</strong> When trading strict SMC/ICT risk models, higher leverage allows for precise position sizing on tight stop losses without tying up massive amounts of capital.
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
              If you trade forex or metals and prioritize execution speed, low spreads, and crypto-native funding over a flashy UI, it’s a robust choice. If you prefer a highly regulated traditional fiat broker or only trade equities, you don't need this.
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
              // FOREX BROKER
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#E8E8E8', marginBottom: '8px' }}>
                Coinexx
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                My broker connection for MT5, primarily for XAUUSD execution.
              </div>
            </div>

            <a 
              href="https://my.coinexx.com/register?refLink=NTAxMDA2&refRm=11"
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
