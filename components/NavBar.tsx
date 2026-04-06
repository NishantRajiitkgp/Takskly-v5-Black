'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Services', 'How It Works', 'Pricing', 'Trust', 'For Pros'];

export function NavBar({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: isDark ? 0.2 : 1.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'h-[64px] bg-rich-black/90 backdrop-blur-2xl border-b border-cream/5'
            : 'h-[64px] bg-cream/90 backdrop-blur-2xl border-b border-rich-black/5'
          : isDark
            ? 'h-[80px] bg-transparent'
            : 'h-[80px] bg-gradient-to-b from-cream/70 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`font-display text-[22px] font-800 tracking-tight transition-colors duration-500 ${isDark ? 'text-cream' : 'text-rich-black'}`}>
          taskly<span className="text-gold">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-mono text-[13px] font-800 uppercase tracking-[0.12em] transition-colors duration-300 ${
                isDark ? 'text-cream/70 hover:text-cream' : 'text-rich-black hover:text-warm-gray'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className={`hidden md:inline-flex font-mono text-[10px] font-700 uppercase tracking-[0.18em] transition-colors duration-300 ${
              isDark ? 'text-cream/70 hover:text-cream' : 'text-rich-black hover:text-warm-gray'
            }`}
          >
            Login
          </Link>
          <Link
            href="#book-now"
            className={`hidden md:inline-flex items-center justify-center font-mono text-[10px] font-700 uppercase tracking-[0.18em] px-6 py-3 transition-all duration-400 ${
              isDark ? 'bg-cream text-rich-black hover:bg-cream/80' : 'bg-rich-black text-cream hover:bg-warm-gray'
            }`}
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle — 44px minimum for iOS */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-sm active:bg-rich-black/5 ${isDark ? 'text-cream active:bg-cream/10' : 'text-rich-black'}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-border px-6 py-6 flex flex-col gap-1 max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[12px] font-600 uppercase tracking-[0.18em] text-warm-gray hover:text-rich-black active:text-rich-black py-3.5 transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#book-now"
            onClick={() => setMobileOpen(false)}
            className="bg-rich-black text-cream font-mono text-[11px] font-700 uppercase tracking-[0.18em] px-6 py-4 text-center hover:bg-warm-gray active:bg-warm-gray/80 transition-all duration-400 mt-3 min-h-[48px] flex items-center justify-center"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
