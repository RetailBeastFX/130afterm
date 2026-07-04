'use client';

import Link from 'next/link';
interface ProjectCardProps {
  name: string;
  status: 'LIVE' | 'BUILDING' | 'CONCEPT';
  problem: string;
  description: string;
  link?: string;
  tags?: string[];
}

const STATUS_COLORS = {
  LIVE: '#3B9B5E',
  BUILDING: '#D4973B',
  CONCEPT: '#454550',
};

export default function ProjectCard({
  name,
  status,
  problem,
  description,
  link,
  tags = [],
}: ProjectCardProps) {
  return (
    <div
      style={{
        background: '#111113',
        border: '1px solid #1E1E22',
        borderRadius: '2px',
        padding: '28px',
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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            fontWeight: 500,
            color: '#E8E8E8',
            margin: 0,
          }}
        >
          {name}
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            letterSpacing: '0.08em',
            color: STATUS_COLORS[status],
            border: `1px solid ${STATUS_COLORS[status]}44`,
            padding: '3px 8px',
            borderRadius: '2px',
            flexShrink: 0,
          }}
        >
          {status}
        </span>
      </div>

      {/* Problem solved */}
      <div style={{ marginBottom: '12px' }}>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            color: '#454550',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '4px',
          }}
        >
          PROBLEM
        </span>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 400,
            color: '#8A8A95',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {problem}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 300,
          color: '#E8E8E8',
          lineHeight: 1.65,
          margin: '0 0 16px 0',
        }}
      >
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: link ? '16px' : '0' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                color: '#454550',
                letterSpacing: '0.05em',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {link && (
        link.startsWith('/') ? (
          <Link
            href={link}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: '#D4973B',
              textDecoration: 'none',
              transition: 'color 100ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#E8E8E8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#D4973B'; }}
          >
            → explore
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '11px',
              color: '#D4973B',
              textDecoration: 'none',
              transition: 'color 100ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#E8E8E8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#D4973B'; }}
          >
            → external
          </a>
        )
      )}
    </div>
  );
}
