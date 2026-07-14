'use client';

import Link from 'next/link';

const DESTINATIONS = [
  {
    path: '/links',
    label: 'links',
    description: 'socials and external resources.',
  },
  {
    path: '/archive',
    label: 'archive',
    description: 'the vault. resources. system changelog.',
  },
  {
    path: '/workspace',
    label: 'workspace',
    description: 'operating stack. tools. setup playbooks.',
  },
  {
    path: '/gallery',
    label: 'gallery',
    description: 'photography. visual world.',
  },
  {
    path: '/projects',
    label: 'projects',
    description: "in production. indicators and utilities.",
  },
  {
    path: '/about',
    label: 'about',
    description: 'the story. how this started.',
  },
];

export default function FolderNav() {
  return (
    <div
      style={{
        background: '#111',
        border: '2px solid #333',
        borderRadius: '0px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 24px',
          borderBottom: '2px solid #333',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11px',
          color: '#454550',
          letterSpacing: '0.08em',
        }}
      >
        130AfterM /
      </div>

      {/* Items */}
      {DESTINATIONS.map((dest, i) => (
        <Link
          key={dest.path}
          href={dest.path}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
            padding: '14px 24px',
            borderBottom: i < DESTINATIONS.length - 1 ? '2px solid #333' : 'none',
            textDecoration: 'none',
            transition: 'background-color 100ms ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#141418';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '13px',
              color: '#8A8A95',
              minWidth: '90px',
              flexShrink: 0,
            }}
          >
            /{dest.label}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              color: '#454550',
            }}
          >
            {dest.description}
          </span>
        </Link>
      ))}
    </div>
  );
}
