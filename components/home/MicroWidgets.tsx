'use client';

import React from 'react';

export function WidgetContainer({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div
      style={{
        background: '#111',
        border: '2px solid #333',
        borderRadius: '0px',
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
            color: '#ff5500',
            letterSpacing: '0.1em',
            fontWeight: 700,
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
    { label: '📈 Trading', value: 'Stock Options' },
    { label: '🎯 Building', value: 'RBFX v6' },
    { label: '🌐 Running', value: '130AfterM' },
    { label: '☕ Fuel', value: 'Black Coffee' },
  ];

  return (
    <WidgetContainer title="In The Trenches">
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
    { label: 'Network', value: 'Connected', highlight: true },
    { label: 'System', value: 'RBFX v6' },
    { label: 'Focus', value: 'Options' },
    { label: 'Operator Since', value: '2013' },
  ];

  return (
    <WidgetContainer title="Vitals">
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
                    borderRadius: '0px',
                    background: '#ff5500',
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
    <WidgetContainer title="Heavy Rotation" subtitle="HUSTLE / RAP">
      <div style={{ marginTop: '8px' }}>
        <iframe
          style={{ borderRadius: '0px', border: 'none' }}
          width="100%"
          height="152"
          src="https://www.youtube.com/embed?listType=search&list=Money+Man+24+Lil+Baby"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
