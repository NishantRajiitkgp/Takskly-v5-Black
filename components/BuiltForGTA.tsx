'use client';

import { motion } from 'motion/react';
const neighborhoods = [
  'King West', 'Liberty Village', 'The Annex', 'Yorkville',
  'Leslieville', 'Queen West', 'North York', 'Midtown',
  'Etobicoke', 'Scarborough', 'Mississauga', 'Brampton',
  'Vaughan', 'Markham', 'Richmond Hill', 'Oakville',
];


export function BuiltForGTA() {
  return (
    <section className="relative bg-cream text-rich-black py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 gold-mesh opacity-30 pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] font-700 uppercase tracking-[0.3em] text-gold">
            Built for the GTA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[88px] font-800 leading-[0.88] tracking-[-0.03em] max-w-[700px]">
            Your neighborhood<span className="text-gold">.</span><br />
            Your people<span className="text-gold">.</span>
          </h2>
          <p className="font-sans text-[13px] font-600 text-rich-black/65 leading-[1.7] max-w-[300px] pb-3">
            We don&apos;t just serve Toronto. We understand it. Every neighborhood, every building type, every season.
          </p>
        </motion.div>

        {/* Neighborhood Map — Interactive coverage visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-rich-black p-5 sm:p-8 md:p-12 overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="font-mono text-[9px] font-700 uppercase tracking-[0.3em] text-green-400/80">
                  Live Coverage
                </span>
              </div>
              <h3 className="font-display text-[22px] sm:text-[28px] md:text-[40px] font-800 tracking-[-0.03em] text-cream">
                16 Neighborhoods<span className="text-gold">.</span> Growing<span className="text-gold">.</span>
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold" />
                <span className="font-mono text-[8px] font-600 uppercase tracking-[0.2em] text-cream/40">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border border-cream/20" />
                <span className="font-mono text-[8px] font-600 uppercase tracking-[0.2em] text-cream/40">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Neighborhood pills — flowing layout */}
          <div className="relative z-10 flex flex-wrap gap-2 md:gap-2.5">
            {neighborhoods.map((hood, i) => (
              <motion.div
                key={hood}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative bg-gold/[0.08] border border-gold/20 px-4 py-3 sm:px-5 md:px-6 md:py-3.5 group cursor-default hover:bg-cream hover:border-cream hover:text-rich-black active:bg-cream transition-all duration-400 overflow-hidden min-h-[44px] flex items-center"
              >
                {/* Shine sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10 font-display text-[13px] md:text-[15px] font-700 text-cream/80 group-hover:text-rich-black transition-colors duration-400 whitespace-nowrap">
                  {hood}
                </span>
              </motion.div>
            ))}

            {/* Coming soon pills */}
            {['Hamilton', 'Kitchener', 'Ottawa'].map((hood, i) => (
              <motion.div
                key={hood}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="relative border border-dashed border-cream/15 px-4 py-3 sm:px-5 md:px-6 md:py-3.5 cursor-default min-h-[44px] flex items-center"
              >
                <span className="font-display text-[13px] md:text-[15px] font-700 text-cream/20 whitespace-nowrap">
                  {hood}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="relative z-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-5 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cream/[0.06]">
            {[
              { val: '7M+', label: 'Population Served' },
              { val: '2.7M', label: 'GTA Households' },
              { val: '15 min', label: 'Avg Response Time' },
              { val: '24/7', label: 'Emergency Coverage' },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-display text-[18px] sm:text-[22px] md:text-[28px] font-800 text-cream tracking-[-0.02em]">{s.val}</span>
                <span className="font-mono text-[7px] sm:text-[8px] font-600 uppercase tracking-[0.2em] text-cream/30">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
