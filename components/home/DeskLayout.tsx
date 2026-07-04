'use client';

import React from 'react';
import Link from 'next/link';

export default function DeskLayout() {
  return (
    <div
      style={{
        background: '#0B0B0C',
        border: '1px solid #1E1E22',
        borderRadius: '4px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11px',
          color: '#454550',
          letterSpacing: '0.1em',
          position: 'absolute',
          top: '24px',
          right: '24px',
        }}
      >
        // THE DESK
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 300, color: '#E8E8E8', margin: '0 0 8px 0' }}>
          Workspace
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#8A8A95', margin: 0 }}>
          Click an element to explore the setup. (Placeholder images until photography is added)
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        
        {/* Monitor Placeholder */}
        <Link 
          href="/workspace/tradingview"
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '500px',
            height: '280px',
            background: 'linear-gradient(180deg, #161619 0%, #111113 100%)',
            border: '1px solid #2A2A30',
            borderRadius: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'border-color 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4973B'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A30'}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>🖥️</span>
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '12px', color: '#8A8A95' }}>MONITOR (TRADINGVIEW)</span>
          </div>
        </Link>

        {/* Desk mat / Keyboard / Mouse Row */}
        <div style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '500px', justifyContent: 'center' }}>
          
          {/* Keyboard Placeholder */}
          <Link
            href="/workspace"
            style={{
              flex: '2',
              height: '100px',
              background: '#111113',
              border: '1px solid #2A2A30',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4973B'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A30'}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '4px' }}>⌨️</span>
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#8A8A95' }}>KEYBOARD</span>
            </div>
          </Link>

          {/* Phone Placeholder */}
          <Link
            href="/workspace/coinexx"
            style={{
              flex: '1',
              height: '100px',
              background: '#111113',
              border: '1px solid #2A2A30',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4973B'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A30'}
          >
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '4px' }}>📱</span>
              <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#8A8A95' }}>PHONE (EXECUTION)</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
