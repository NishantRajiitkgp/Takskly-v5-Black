'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';

export function Hero() {
  const [selectedService, setSelectedService] = useState('Standard Clean');
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Start video only after splash screen reveal finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 2400); // splash: 0.6s delay + 1.8s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Opening Reveal */}
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
              ref={videoRef}
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/Hero.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Desktop: left side cream for text, right side crystal clear */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-cream via-cream/80 via-40% to-transparent to-55%" />
          {/* Mobile: top overlay for text readability */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/30 to-transparent h-[60%]" />
          {/* Bottom fade — just enough for booking card */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-cream/80 to-transparent" />
          {/* Top fade for navbar */}
          <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-cream/30 to-transparent" />
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
              <div className="w-2.5 h-2.5 rounded-full bg-green-700 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-[11px] font-900 uppercase tracking-[0.3em] text-green-800">
                Now in Toronto & GTA
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[0.85] font-800 tracking-[-0.04em]">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] md:text-[9vw] lg:text-[120px] text-rich-black"
              >
                Your Home
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] md:text-[9vw] lg:text-[120px]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-black via-rich-black/70 to-rich-black/40">Handled</span><span className="text-rich-black">.</span>
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="font-sans text-[14px] md:text-[16px] font-500 text-rich-black/70 leading-[1.7] max-w-[440px] mt-5"
          >
            The premium managed marketplace for home services.
            Vetted professionals. Fixed prices. Effortless booking.
          </motion.p>

          {/* Booking Card — inline below subtitle */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 w-full max-w-[500px]"
          >
            <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-5 sm:p-8">
              {/* Address Input */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-rich-black/70 flex-shrink-0" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Where should we come?"
                  className="bg-transparent border-none outline-none font-mono text-[12px] font-600 uppercase tracking-[0.08em] text-rich-black placeholder:text-rich-black/30 w-full"
                />
              </div>

              {/* Service Chips */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-10">
                {['Standard Clean', 'Plumbing', 'Handyman'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 sm:px-6 py-3 rounded-full font-mono text-[10px] sm:text-[11px] font-700 uppercase tracking-[0.06em] transition-all duration-300 min-h-[44px] ${
                      selectedService === service
                        ? 'bg-rich-black text-cream'
                        : 'bg-transparent border border-rich-black/15 text-rich-black/70 hover:border-rich-black/30 active:bg-rich-black/5'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-end justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] font-600 uppercase tracking-[0.15em] text-rich-black/60 block mb-1">
                    Service from
                  </span>
                  <span className="font-display text-[36px] sm:text-[48px] font-800 leading-none tracking-[-0.03em] text-rich-black">
                    $99
                  </span>
                </div>
                <button className="bg-rich-black text-cream px-6 sm:px-8 py-4 rounded-full font-mono text-[12px] sm:text-[14px] font-800 uppercase tracking-[0.08em] hover:bg-rich-black/85 active:bg-rich-black/75 transition-colors duration-300 min-h-[48px] whitespace-nowrap">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6"
          >
            {[
              'CPIC Verified',
              'Insured to $2M',
              '$10K Protection',
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="text-green-700 text-[13px] font-800" aria-hidden="true">&#10003;</span>
                <span className="font-mono text-[10px] font-800 uppercase tracking-[0.15em] text-rich-black">
                  {badge}
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}
