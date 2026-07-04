'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: '/log', path: '/log' },
  { label: '/archive', path: '/archive' },
  { label: '/workspace', path: '/workspace' },
  { label: '/gallery', path: '/gallery' },
  { label: '/projects', path: '/projects' },
  { label: '/about', path: '/about' },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          borderBottom: '1px solid #1E1E22',
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 48px',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '13px',
              fontWeight: 500,
              color: '#E8E8E8',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            130AfterM
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex"
            style={{ gap: '0', alignItems: 'center' }}
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '12px',
                    color: isActive ? '#D4973B' : '#8A8A95',
                    padding: '0 16px',
                    borderLeft: i === 0 ? '1px solid #1E1E22' : 'none',
                    borderRight: '1px solid #1E1E22',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 100ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#E8E8E8';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#8A8A95';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Ctrl+K hint */}
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '10px',
                color: '#2A2A30',
                marginLeft: '16px',
                letterSpacing: '0.05em',
              }}
            >
              ⌘K
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8A8A95',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '12px',
              padding: '8px',
            }}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 20,
                background: 'rgba(0,0,0,0.5)',
              }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: 52,
                left: 0,
                bottom: 0,
                width: '280px',
                zIndex: 25,
                background: '#111113',
                borderRight: '1px solid #1E1E22',
                padding: '24px 0',
              }}
            >
              <div
                style={{
                  padding: '0 24px 16px',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '10px',
                  color: '#454550',
                  letterSpacing: '0.1em',
                }}
              >
                130AFTERM /
              </div>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '14px 24px',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '13px',
                      color: isActive ? '#D4973B' : '#8A8A95',
                      borderLeft: isActive ? '2px solid #D4973B' : '2px solid transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
