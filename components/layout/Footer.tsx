'use client';

import Link from 'next/link';

const SOCIAL_LINKS = [
  { label: 'X', href: 'https://x.com/130afterm' },
  { label: 'TradingView', href: 'https://www.tradingview.com/u/130afterm/' },
  { label: 'Whop', href: 'https://whop.com/130afterm' },
  { label: 'GitHub', href: 'https://github.com/130afterm' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1E1E22',
        marginTop: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '32px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left — handle + year */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#E8E8E8',
            }}
          >
            130AfterM
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: '#2A2A30',
            }}
          >
            {new Date().getFullYear()} · trader · builder · documenting the process
          </span>
        </div>

        {/* Center — social links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '11px',
                color: '#454550',
                textDecoration: 'none',
                transition: 'color 100ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#D4973B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#454550';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — keyboard hint */}
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            color: '#1E1E22',
          }}
        >
          press ⌘K to navigate
        </div>
      </div>
    </footer>
  );
}
