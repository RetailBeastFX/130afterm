'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DeskLayout() {
  return (
    <div
      style={{
        background: '#0B0B0C',
        border: '1px solid #1E1E22',
        borderRadius: '4px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '10px',
          color: '#2A2A30',
          letterSpacing: '0.1em',
        }}
      >
        // THE DESK
      </div>

      {/* Monitor — real chart */}
      <Link
        href="/workspace/tradingview"
        style={{
          display: 'block',
          width: '100%',
          position: 'relative',
          borderRadius: '6px',
          overflow: 'hidden',
          border: '1px solid #2A2A30',
          textDecoration: 'none',
          transition: 'border-color 0.2s ease',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4973B')}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2A2A30')}
      >
        <Image
          src="/images/chart-monitor.png"
          alt="USDJPY 4H chart — Jul 14, 2026"
          width={1232}
          height={869}
          style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
          priority
        />
        {/* Overlay label */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '12px',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            color: '#D4973B',
            letterSpacing: '0.08em',
            background: 'rgba(8,8,8,0.7)',
            padding: '3px 8px',
            borderRadius: '2px',
          }}
        >
          USDJPY · 4H · LIVE
        </div>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '12px',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '10px',
            color: '#8A8A95',
            letterSpacing: '0.08em',
            background: 'rgba(8,8,8,0.7)',
            padding: '3px 8px',
            borderRadius: '2px',
          }}
        >
          → explore setup
        </div>
      </Link>

      {/* Bottom row — Keyboard + Phone */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {/* Keyboard → workspace */}
        <Link
          href="/workspace"
          style={{
            flex: 2,
            padding: '14px 16px',
            background: '#111113',
            border: '1px solid #1E1E22',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'border-color 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4973B')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1E22')}
        >
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', letterSpacing: '0.08em' }}>
            SETUP
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#E8E8E8', fontWeight: 500 }}>
            My Stack
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#8A8A95' }}>
            Tools, hardware & workflow
          </span>
        </Link>

        {/* Phone → coinexx */}
        <Link
          href="/workspace/coinexx"
          style={{
            flex: 1,
            padding: '14px 16px',
            background: '#111113',
            border: '1px solid #1E1E22',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'border-color 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4973B')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1E22')}
        >
          <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '10px', color: '#454550', letterSpacing: '0.08em' }}>
            BROKER
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#E8E8E8', fontWeight: 500 }}>
            Coinexx
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#8A8A95' }}>
            Execution
          </span>
        </Link>
      </div>
    </div>
  );
}
