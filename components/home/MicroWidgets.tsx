'use client';

import React from 'react';

export function WidgetContainer({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div
      style={{
        background: '#111113',
        border: '1px solid #1E1E22',
        borderRadius: '2px',
        padding: '20px',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '11px',
            color: '#D4973B',
            letterSpacing: '0.1em',
          }}
        >
          // {title.toUpperCase()}
        </div>
        {subtitle && (
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '10px',
              color: '#454550',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export function CurrentlyBlock() {
  const items = [
    { label: '📈 Trading', value: 'SPY 0DTE, XAUUSD' },
    { label: '📖 Reading', value: 'Market Wizards' },
    { label: '🎯 Building', value: '130AfterM v1.0' },
    { label: '☕ Fuel', value: 'Black Coffee' },
  ];

  return (
    <WidgetContainer title="Currently">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#8A8A95' }}>{item.label}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#E8E8E8', fontWeight: 500 }}>{item.value}</span>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
}

export function StatusBlock() {
  const items = [
    { label: 'Status', value: 'Online', highlight: true },
    { label: 'Last Trade', value: 'Jul 02' },
    { label: 'System', value: 'v6' },
    { label: 'Operator Since', value: '2013' },
  ];

  return (
    <WidgetContainer title="System Status">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#8A8A95' }}>{item.label}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {item.highlight && (
                <span
                  className="pulse-amber"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#D4973B',
                    display: 'inline-block',
                  }}
                />
              )}
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#E8E8E8', fontWeight: 500 }}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
}

export function MusicBlock() {
  return (
    <WidgetContainer title="Rotation" subtitle="NO AUTOPLAY">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            background: '#1A1A1E',
            border: '1px solid #2A2A30',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '20px' }}>🎵</span>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: '#E8E8E8', marginBottom: '4px' }}>
            Nujabes / J Dilla
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#8A8A95' }}>
            Lofi Instrumental
          </div>
        </div>
      </div>
    </WidgetContainer>
  );
}

export function FactBlock({ title, value, detail }: { title: string; value: string; detail?: string }) {
  return (
    <WidgetContainer title={title}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 300, color: '#E8E8E8', marginBottom: '4px' }}>
          {value}
        </div>
        {detail && (
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#8A8A95' }}>
            {detail}
          </div>
        )}
      </div>
    </WidgetContainer>
  );
}
