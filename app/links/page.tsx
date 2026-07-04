'use client';

import PageHeader from '@/components/ui/PageHeader';

const LINKS = [
  {
    platform: 'X (Twitter)',
    handle: '@130afterm',
    url: 'https://x.com/130afterm',
    description: 'Trading thoughts, system updates, and daily observations.',
  },
  {
    platform: 'YouTube',
    handle: '@130afterm',
    url: 'https://youtube.com/@130afterm',
    description: 'Video breakdowns and behind-the-scenes system building.',
  },
  {
    platform: 'Instagram',
    handle: '@130afterm',
    url: 'https://instagram.com/130afterm',
    description: 'Life outside the charts and visual documentation.',
  },
  {
    platform: 'Facebook',
    handle: '@130AfterM',
    url: 'https://www.facebook.com/130AfterM/',
    description: 'Community, updates, and discussions.',
  },
  {
    platform: 'RetailBeastFX',
    handle: 'whop.com',
    url: 'https://whop.com/130afterm',
    description: 'Access the V6 Execution Engine indicator suite.',
  },
];

export default function LinksPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 48px 0',
      }}
    >
      <PageHeader
        path={['links']}
        title="Socials"
        subtitle="Where I document the journey outside of this workspace."
        stats={[
          { label: 'HANDLE', value: '@130afterm' }
        ]}
      />

      <div style={{ maxWidth: '640px', marginTop: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#111113',
                border: '1px solid #1E1E22',
                borderRadius: '4px',
                padding: '24px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4973B';
                e.currentTarget.style.backgroundColor = '#161619';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1E1E22';
                e.currentTarget.style.backgroundColor = '#111113';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#E8E8E8' }}>
                  {link.platform}
                </span>
                <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#D4973B' }}>
                  ↗
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#454550', marginBottom: '12px' }}>
                {link.handle}
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: '#8A8A95', margin: 0 }}>
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
