'use client';

interface ModuleCard {
  title: string;
  tag: 'CORE' | 'SYSTEM' | 'TOOL' | 'PSYCHOLOGY' | 'AI';
  items: string[];
  link?: string;
  status?: 'active' | 'studying' | 'reference';
}

export interface ModuleSection {
  number: string;
  label: string;
  comment: string;
  cards: ModuleCard[];
}

interface ModuleProps {
  section: ModuleSection;
}

const TAG_COLORS: Record<string, string> = {
  CORE: '#3B9B5E',
  SYSTEM: '#D4973B',
  TOOL: '#8A8A95',
  PSYCHOLOGY: '#8B7355',
  AI: '#6B8FA8',
};

export default function Module({ section }: ModuleProps) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Section label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            background: 'rgba(212, 151, 59, 0.08)',
            border: '1px solid rgba(212, 151, 59, 0.2)',
            padding: '3px 8px',
            borderRadius: '2px',
            letterSpacing: '0.05em',
          }}
        >
          {section.number}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '13px',
            color: '#E8E8E8',
            letterSpacing: '0.05em',
          }}
        >
          {section.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#454550',
          }}
        >
          // {section.comment}
        </span>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}
      >
        {section.cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: '#111113',
              border: '1px solid #1E1E22',
              borderRadius: '2px',
              padding: '24px',
              transition: 'background-color 100ms ease-out, border-color 100ms ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#141418';
              e.currentTarget.style.borderColor = '#2A2A30';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111113';
              e.currentTarget.style.borderColor = '#1E1E22';
            }}
          >
            {/* Card title + tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#E8E8E8',
                  margin: 0,
                }}
              >
                {card.title}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: TAG_COLORS[card.tag] || '#8A8A95',
                  border: `1px solid ${TAG_COLORS[card.tag] || '#8A8A95'}44`,
                  padding: '2px 6px',
                  borderRadius: '2px',
                  flexShrink: 0,
                }}
              >
                {card.tag}
              </span>
            </div>

            {/* Items */}
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {card.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '12px',
                    color: '#8A8A95',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ color: '#2A2A30', flexShrink: 0 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Link */}
            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid #1E1E22',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: '#454550',
                  textDecoration: 'none',
                  transition: 'color 100ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4973B'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#454550'; }}
              >
                → {card.link.replace('https://', '').split('/')[0]}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
