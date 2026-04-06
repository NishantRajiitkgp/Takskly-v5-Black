'use client';

import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import Link from 'next/link';
import { Fingerprint, Search, FileCheck, Shield, BadgeCheck, Navigation, Camera, Award, Lock, Users, ArrowLeft } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { CursorProvider } from '@/components/CursorProvider';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.floor(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value === 4.9 ? display.toFixed(1) : display.toLocaleString()}
      {suffix}
    </span>
  );
}

const trustStack = [
  { icon: Fingerprint, title: 'Verified Identity', desc: 'Government ID verified for every provider on the platform' },
  { icon: Search, title: 'CPIC Background Check', desc: 'Criminal record check via Certn, renewed annually' },
  { icon: FileCheck, title: 'Trade Licence Verification', desc: 'Licence numbers verified with Skilled Trades Ontario' },
  { icon: Shield, title: '$2M Liability Insurance', desc: 'Every provider carries minimum $2M coverage' },
  { icon: BadgeCheck, title: 'WSIB Compliance', desc: 'Workplace safety clearance certificates on file' },
  { icon: Navigation, title: 'Real-Time GPS Tracking', desc: 'Know exactly when your professional arrives' },
  { icon: Camera, title: 'Before/After Photos', desc: 'Every job documented with photo evidence' },
  { icon: Award, title: 'Satisfaction Guarantee', desc: 'Re-do within 48 hours or full refund' },
  { icon: Lock, title: '$10K Property Protection', desc: 'Damage coverage beyond provider insurance' },
  { icon: Users, title: 'Two-Way Ratings', desc: 'Both parties are held accountable' },
];

const stats = [
  { value: 4.9, display: '4.9', suffix: '★', label: 'Avg Rating' },
  { value: 50000, display: '50,000+', suffix: '+', label: 'Bookings' },
  { value: 0, display: '$0', suffix: '', label: 'Claims Paid' },
  { value: 100, display: '100%', suffix: '%', label: 'CPIC Checked' },
];

export default function TasklyAdvantages() {
  return (
    <main className="min-h-screen bg-rich-black text-cream noise-overlay">
      <CursorProvider />
      <NavBar variant="dark" />

      {/* Hero */}
      <section className="relative bg-rich-black text-cream overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(197,164,126,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_80%,rgba(197,164,126,0.05),transparent)]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Back link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-600 uppercase tracking-[0.15em] text-cream/40 hover:text-cream transition-colors duration-300 mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>

          {/* Section Tag */}
          <div className="mb-8">
            <span className="font-mono text-[10px] font-600 uppercase tracking-[0.3em] text-gold">
              The Taskly Advantages
            </span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="font-display text-[48px] md:text-[96px] font-800 leading-[0.88] tracking-[-0.03em] text-cream">
              Someone is<br />entering your<br />home<span className="text-gold">.</span>
            </h1>
            <p className="font-sans text-[14px] font-500 text-cream/40 mt-6 italic">
              We take that seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stack */}
      <section className="relative bg-rich-black text-cream overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 pb-28 md:pb-40">
          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-cream/[0.04] mb-24">
            {trustStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-rich-black px-7 py-6 md:px-9 md:py-7 flex items-center gap-5 md:gap-7 group cursor-default overflow-hidden hover:bg-cream/[0.03] transition-colors duration-600"
              >
                {/* Hover line left */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                {/* Layer number watermark */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-[80px] md:text-[100px] font-800 leading-none text-cream/[0.02] group-hover:text-cream/[0.05] select-none pointer-events-none transition-colors duration-700">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-cream/[0.04] group-hover:bg-cream/10 flex-shrink-0 transition-all duration-500">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-cream/30 group-hover:text-cream transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-[9px] font-700 text-gold/50 group-hover:text-cream transition-colors duration-500">
                      Layer {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-display text-[16px] md:text-[20px] font-800 tracking-[-0.02em] text-cream/80 group-hover:text-cream transition-colors duration-500 truncate">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[11px] md:text-[12px] font-500 text-cream/25 group-hover:text-cream/50 transition-colors duration-500 mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="relative z-10 flex-shrink-0 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/50 group-hover:bg-green-400 transition-colors duration-500" />
                  <span className="hidden md:block font-mono text-[8px] font-600 uppercase tracking-[0.15em] text-cream/20 group-hover:text-green-400/70 transition-colors duration-500">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="border-y border-cream/[0.08] flex flex-col md:flex-row mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`flex-1 py-12 px-4 md:px-6 flex flex-col items-center md:items-start justify-center ${
                  i !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-cream/[0.08]' : ''
                }`}
              >
                <span className="font-display text-[52px] md:text-[68px] font-800 leading-none mb-3 tracking-[-0.03em] text-cream">
                  {stat.display}
                </span>
                <span className="font-mono text-[9px] font-600 uppercase tracking-[0.3em] text-gold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-[36px] md:text-[56px] font-800 tracking-[-0.03em] text-cream mb-6">
              Ready to experience<br />the difference<span className="text-gold">?</span>
            </h2>
            <p className="font-sans text-[14px] font-500 text-cream/40 mb-10 max-w-[500px] mx-auto">
              Every Taskly professional passes through all 10 layers of verification before they ever enter your home.
            </p>
            <Link
              href="/#book"
              className="inline-flex items-center justify-center px-10 py-5 bg-cream text-rich-black font-mono text-[11px] font-700 uppercase tracking-[0.15em] hover:bg-cream/90 transition-colors duration-300 group"
            >
              <span className="mr-2">Book Your First Clean</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
