import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';

export default function RetailBeastFXPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['projects', 'retailbeastfx']}
        title="RetailBeastFX [v6]"
        subtitle="The Execution Engine. Automating structural markup so you can focus entirely on reading the market."
        stats={[
          { label: 'VERSION', value: 'v6' },
          { label: 'LINES', value: '2,200+' },
          { label: 'PLATFORM', value: 'TradingView' },
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
              RetailBeastFX is not a signal service or a holy grail bot. It is an automated markup tool built in Pine Script for TradingView. 
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              When I trade SMC/ICT concepts, the first 10 minutes of every session used to be spent drawing boxes, marking previous day highs/lows, finding order blocks, and identifying fair value gaps. This script automates all of that math in real-time, completely removing human error and recall bias.
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
              The V6 architecture is designed around answering four fundamental questions the moment you look at the chart:
            </p>

            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>1. Where is price?</strong> Auto-maps Higher Timeframe (HTF) levels, Order Blocks (OBs), and Fair Value Gaps (FVGs).
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>2. What just happened?</strong> Real-time event engine tracking Sweeps, Break of Structure (BOS), and Change of Character (CHOCH).
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>3. What matters next?</strong> The Liquidity Radar pinpoints equal highs/lows and the active draw on liquidity.
              </li>
              <li style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                <strong style={{ color: '#E8E8E8', fontWeight: 500 }}>4. Should I trade right now?</strong> Session killzone badges and an Execution Checklist tell you if you are in the correct macro window.
              </li>
            </ul>

            <div
              style={{
                background: '#111113',
                border: '1px solid #1E1E22',
                padding: '20px',
                marginTop: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: '#454550',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                // SNIPPET: EVENT ENGINE
              </div>
              <pre
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '12px',
                  color: '#8A8A95',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                }}
              >
{`// Example of the modular event engine in V6
bool showT1 = input.bool(true, "Tier 1 — Major (SWEEP, BOS, CHOCH)")
bool showT2 = input.bool(true, "Tier 2 — Interaction (OB, FVG MIT)")
int minPatternScore = input.int(4, "Min Pattern Score (1-5)", 1, 5)

// The engine only flags setups if the structural conditions 
// meet the minimum pattern score threshold.`}
              </pre>
            </div>
            
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
              // WHY I BUILT THIS
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.75, margin: 0 }}>
              Trading is stressful enough. Doing geometry on a chart while price action is rapidly expanding into a killzone is a recipe for hesitation. 
              By letting the script handle the geometry (drawing the FVGs and OBs based on strict rules), my brain is free to handle the narrative (is this a trap, or is this the move?).
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
              // ACCESS
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#E8E8E8', marginBottom: '8px' }}>
                GitHub / Access
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: '#8A8A95', lineHeight: 1.6 }}>
                RetailBeastFX is a private invite-only script on TradingView. 
              </div>
            </div>

            <a 
              href="https://whop.com/130afterm"
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
              VIEW ON WHOP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
