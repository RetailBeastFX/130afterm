'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = [
  { label: '/archive', description: 'method + resources', path: '/archive' },
  { label: '/workspace', description: 'operating environment', path: '/workspace' },
  { label: '/gallery', description: 'photography', path: '/gallery' },
  { label: '/projects', description: "what's building", path: '/projects' },
  { label: '/links', description: 'socials and external resources', path: '/links' },
  { label: '/about', description: 'the person', path: '/about' },
];

const HELP_COMMANDS = [
  { label: '/archive', description: 'method, resources, system changelog' },
  { label: '/workspace', description: 'tools, setup playbooks, operating stack' },
  { label: '/gallery', description: 'photography and visual world' },
  { label: '/projects', description: 'indicators and utilities being built' },
  { label: '/links', description: 'socials and external resources' },
  { label: '/about', description: 'the story — how this all started' },
  { label: '', description: '' },
  { label: '// 130AfterM', description: '1:30 after midnight. when noise stops.' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const router = useRouter();

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery('');
    setSelected(0);
    setShowHelp(false);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery('');
    setShowHelp(false);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        open ? handleClose() : handleOpen();
      }
      if (e.key === 'Escape' && open) handleClose();
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, handleOpen, handleClose]);

  const filtered = COMMANDS.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  const isHelp = query.trim() === '/help';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isHelp) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    }
    if (e.key === 'Enter' && filtered[selected]) {
      router.push(filtered[selected].path);
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            key="palette"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
          >
            <div
              style={{
                background: '#111113',
                border: '1px solid #2A2A30',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {/* Input */}
              <div style={{ borderBottom: '1px solid #1E1E22', padding: '16px' }}>
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="type a path or search..."
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#E8E8E8',
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '14px',
                  }}
                />
              </div>

              {/* Results */}
              <div style={{ padding: '8px' }}>
                {isHelp ? (
                  HELP_COMMANDS.map((cmd, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '8px 12px',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'baseline',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '12px',
                          color: cmd.label.startsWith('//') ? '#D4973B' : '#8A8A95',
                          minWidth: '80px',
                        }}
                      >
                        {cmd.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '12px',
                          color: '#454550',
                        }}
                      >
                        {cmd.description}
                      </span>
                    </div>
                  ))
                ) : filtered.length > 0 ? (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.path}
                      onClick={() => {
                        router.push(cmd.path);
                        handleClose();
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        background: i === selected ? '#1E1E22' : 'transparent',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '12px',
                          color: i === selected ? '#D4973B' : '#8A8A95',
                          minWidth: '90px',
                        }}
                      >
                        {cmd.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-jetbrains), monospace',
                          fontSize: '12px',
                          color: '#454550',
                        }}
                      >
                        {cmd.description}
                      </span>
                    </button>
                  ))
                ) : (
                  <div
                    style={{
                      padding: '12px',
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '12px',
                      color: '#454550',
                    }}
                  >
                    no match
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div
                style={{
                  borderTop: '1px solid #1E1E22',
                  padding: '8px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '11px',
                    color: '#2A2A30',
                  }}
                >
                  ↑↓ navigate · ↵ open · esc close
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '11px',
                    color: '#2A2A30',
                  }}
                >
                  type /help
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
