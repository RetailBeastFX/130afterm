'use client';

const LINKS = [
  {
    platform: 'X / TWITTER',
    url: 'https://x.com/130afterm',
    description: '> rapid fire thoughts & chart setups',
    isAccent: false,
  },
  {
    platform: 'YOUTUBE',
    url: 'https://youtube.com/@130afterm',
    description: '> video breakdowns & system building',
    isAccent: false,
  },
  {
    platform: 'INSTAGRAM',
    url: 'https://instagram.com/130afterm',
    description: '> outside the charts & visual docs',
    isAccent: false,
  },
  {
    platform: 'FACEBOOK',
    url: 'https://www.facebook.com/130AfterM/',
    description: '> community & discussions',
    isAccent: false,
  },
  {
    platform: 'THE VAULT (WHOP)',
    url: 'https://whop.com/130afterm',
    description: '> access the system & community',
    isAccent: true,
  },
];

export default function LinksPage() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '64px 20px 100px',
        color: '#e0e0e0',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px', textTransform: 'uppercase', letterSpacing: '2px' }}>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '32px', fontWeight: 800, margin: '0 0 8px 0', color: '#E8E8E8' }}>
          /LINKS
        </h1>
        <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#ff5500', margin: 0 }}>
          OFFICIAL DIRECTORY // TAPPED IN
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#111',
              border: `2px solid ${link.isAccent ? '#ff5500' : '#333'}`,
              borderRadius: '0px',
              padding: '20px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = link.isAccent ? '#ff5500' : '#e0e0e0';
              e.currentTarget.style.color = '#111';
              e.currentTarget.style.borderColor = link.isAccent ? '#ff5500' : '#e0e0e0';
              e.currentTarget.style.transform = 'translateX(5px)';
              const sub = e.currentTarget.querySelector('.mono-sub') as HTMLElement;
              if (sub) sub.style.color = '#555';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111';
              e.currentTarget.style.color = '#e0e0e0';
              e.currentTarget.style.borderColor = link.isAccent ? '#ff5500' : '#333';
              e.currentTarget.style.transform = 'translateX(0)';
              const sub = e.currentTarget.querySelector('.mono-sub') as HTMLElement;
              if (sub) sub.style.color = '#8A8A95';
            }}
          >
            <div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px', margin: '0 0 5px 0' }}>
                {link.platform}
              </h2>
              <span className="mono-sub" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.75rem', color: '#8A8A95', textTransform: 'uppercase', transition: 'color 0.2s ease' }}>
                {link.description}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '16px' }}>
              ↗
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
