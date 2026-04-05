'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Sparkles, AlertTriangle, Wrench, Leaf } from 'lucide-react';

const serviceCategories = [
  { name: 'Cleaning', icon: Sparkles, items: ['Standard Clean', 'Deep Clean', 'Move-in / Move-out'] },
  { name: 'Emergency', icon: AlertTriangle, items: ['Plumbing', 'Electrical', 'Locksmith'] },
  { name: 'Maintenance', icon: Wrench, items: ['Handyman', 'Painting', 'Furniture Assembly'] },
  { name: 'Seasonal', icon: Leaf, items: ['Snow Removal', 'Lawn Care', 'Gutter Cleaning'] },
];

export function Hero() {
  const [selectedService, setSelectedService] = useState('Standard Clean');
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Opening Reveal — Gold Curtain Wipe */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        className="fixed inset-0 z-[100] bg-rich-black origin-top flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-display text-[28px] font-800 tracking-tight text-cream">
            taskly<span className="text-gold">.</span>
          </span>
          <div className="w-12 h-[1px] bg-gold/40" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-gold/60">
            Reimagining Home
          </span>
        </motion.div>
      </motion.div>

      <section ref={heroRef} className="relative min-h-screen w-full bg-cream overflow-hidden flex flex-col">
        {/* Video Background with parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: videoY }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Right side crystal clear, fades to cream on the left for text */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream md:via-cream/20 md:to-cream" />
          {/* Extra left text protection layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/60 to-transparent w-[55%]" />
          {/* Bottom fade for booking bar readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
          {/* Subtle top fade for navbar */}
          <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-cream/40 to-transparent" />
        </div>

        {/* Main Content */}
        <motion.div style={{ opacity: contentOpacity }} className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-[120px] pb-16 max-w-[1600px] mx-auto w-full">
          {/* Section Tag */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-mono text-[10px] font-700 uppercase tracking-[0.3em] text-gold-dark">
                Now in Toronto & GTA
              </span>
            </motion.div>
          </div>

          {/* Headline — 2 lines */}
          <h1 className="font-display leading-[0.92] font-800 tracking-[-0.03em] text-rich-black">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] md:text-[9vw] lg:text-[120px]"
              >
                Your Home<span className="text-gold">.</span>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] md:text-[9vw] lg:text-[120px]"
              >
                Handled<span className="text-gold">.</span>
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="font-sans text-[14px] md:text-[16px] font-500 text-rich-black/60 leading-[1.7] max-w-[440px] mt-8"
          >
            The premium managed marketplace for home services.
            Vetted professionals. Fixed prices. Effortless booking.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.0 }}
            className="flex flex-wrap items-center gap-6 mt-6"
          >
            {[
              'CPIC Verified',
              'Insured to $2M',
              '$10K Protection',
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="text-gold text-[11px]">&#10003;</span>
                <span className="font-mono text-[9px] font-700 uppercase tracking-[0.15em] text-rich-black/50">
                  {badge}
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Booking Card — Vertical card on the right */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-16 lg:right-24 z-30 w-[calc(100%-48px)] md:w-[420px]"
        >
          <div className="bg-white border border-rich-black/[0.08] shadow-[0_8px_40px_rgba(13,13,13,0.08)]">
            {/* Promo banner */}
            <div className="flex items-center gap-2.5 px-6 py-3.5 bg-rich-black">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-mono text-[9px] font-700 uppercase tracking-[0.2em] text-cream">
                First clean free &mdash; New customers only
              </span>
            </div>

            <div className="px-6 py-6 space-y-5">
              {/* Address Input */}
              <div className="flex items-center gap-3 border-b border-rich-black/[0.08] pb-5">
                <MapPin className="w-5 h-5 text-gold-dark flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where should we come? (Address)"
                  className="bg-transparent border-none outline-none font-mono text-[11px] font-600 uppercase tracking-[0.1em] text-rich-black placeholder:text-rich-black/35 w-full"
                />
              </div>

              {/* Service Chips */}
              <div className="flex flex-wrap gap-2">
                {['Standard Clean', 'Plumbing', 'Handyman', 'Snow Removal'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2.5 rounded-full font-mono text-[10px] font-700 uppercase tracking-[0.1em] transition-all duration-300 ${
                      selectedService === service
                        ? 'bg-rich-black text-cream'
                        : 'bg-transparent border border-rich-black/[0.12] text-rich-black/70 hover:border-rich-black/30'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-end justify-between pt-2">
                <div>
                  <span className="font-mono text-[9px] font-600 uppercase tracking-[0.2em] text-warm-gray block">
                    Service from
                  </span>
                  <span className="font-display text-[40px] font-800 leading-none tracking-[-0.03em] text-rich-black">
                    $99
                  </span>
                </div>
                <button className="relative overflow-hidden bg-rich-black text-cream px-7 py-3.5 rounded-full group flex items-center gap-2">
                  <div className="absolute inset-0 bg-warm-gray rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="relative z-10 font-mono text-[10px] font-700 uppercase tracking-[0.15em] group-hover:text-rich-black transition-colors duration-400">
                    Book Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </>
  );
}
