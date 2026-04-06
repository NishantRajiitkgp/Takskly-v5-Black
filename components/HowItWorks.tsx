'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Shield, Clock, Camera, CreditCard, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Choose',
    subtitle: 'Tell us what you need',
    body: 'Pick your service, enter your address, and see the exact price upfront. No quotes, no callbacks, no waiting games.',
    image: '/assets/CHOOSE.jpg',
    color: 'from-blue-500/20 to-cyan-500/10',
    features: [
      { icon: MapPin, text: 'Enter your address' },
      { icon: Search, text: 'Browse 40+ services' },
      { icon: CreditCard, text: 'See exact price upfront' },
    ],
    stat: '30s',
    statLabel: 'Average booking time',
    mockup: 'choose',
  },
  {
    id: '02',
    title: 'Book',
    subtitle: 'We handle the matching',
    body: 'Instantly matched with a CPIC-verified, insured professional near you. Every pro passes our 10-layer trust screening.',
    image: '/assets/BOOK.jpg',
    color: 'from-emerald-500/20 to-green-500/10',
    features: [
      { icon: Shield, text: 'CPIC background checked' },
      { icon: CheckCircle2, text: '$2M insured professionals' },
      { icon: Clock, text: 'Auto-matched in seconds' },
    ],
    stat: '10',
    statLabel: 'Layers of verification',
    mockup: 'book',
  },
  {
    id: '03',
    title: 'Done',
    subtitle: 'Sit back, we\'ve got this',
    body: 'Track your pro in real-time via GPS. Review before/after photos. Pay only when you\'re 100% satisfied or get a full refund.',
    image: '/assets/DONE.jpg',
    color: 'from-violet-500/20 to-purple-500/10',
    features: [
      { icon: Smartphone, text: 'Real-time GPS tracking' },
      { icon: Camera, text: 'Before/after photo proof' },
      { icon: CheckCircle2, text: '48h satisfaction guarantee' },
    ],
    stat: '100%',
    statLabel: 'Satisfaction guaranteed',
    mockup: 'done',
  },
];

function PhoneMockup({ step }: { step: string }) {
  return (
    <div className="relative mx-auto scale-[0.72] sm:scale-[0.85] md:scale-100 origin-top w-[260px] h-[520px]">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-rich-black rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-cream/10 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-rich-black rounded-b-2xl z-20" />

        {/* Screen content */}
        <div className="absolute inset-[3px] rounded-[33px] overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            {step === 'choose' && (
              <motion.div
                key="choose"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-5 pt-10 h-full flex flex-col"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-[14px] font-800 text-rich-black mb-4"
                >
                  What do you need?
                </motion.p>
                <div className="space-y-2 mb-4">
                  {['Standard Clean', 'Deep Clean', 'Plumbing'].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`px-3 py-2.5 rounded-lg text-[11px] font-600 ${i === 0 ? 'bg-rich-black text-white' : 'bg-gray-100 text-rich-black/60'}`}
                    >
                      {s}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2.5 mb-4"
                >
                  <MapPin className="w-3 h-3 text-rich-black/30" />
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 'auto' }}
                    transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10px] text-rich-black/30 overflow-hidden whitespace-nowrap"
                  >
                    123 King St W, Toronto
                  </motion.span>
                </motion.div>
                <div className="mt-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-[10px] text-rich-black/60 mb-1"
                  >
                    Total
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, type: 'spring', stiffness: 300 }}
                    className="font-display text-[28px] font-800 text-rich-black leading-none"
                  >
                    $99
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="bg-rich-black text-white text-center py-3 rounded-xl text-[12px] font-700 mt-3"
                >
                  Book Now
                </motion.div>
              </motion.div>
            )}

            {step === 'book' && (
              <motion.div
                key="book"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-5 pt-10 h-full flex flex-col"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-[14px] font-800 text-rich-black mb-2"
                >
                  Matching you...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-[10px] text-rich-black/60 mb-5"
                >
                  Finding the best pro nearby
                </motion.p>

                <div className="flex-1 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-rich-black/10"
                      animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-rich-black/10"
                      animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-rich-black/[0.06] flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Shield className="w-8 h-8 text-rich-black" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: 'spring', stiffness: 400 }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-rich-black rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  {['ID Verified', 'CPIC Cleared', 'Insured'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.25, duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.25, type: 'spring', stiffness: 400 }}
                        className="w-4 h-4 rounded-full bg-rich-black/10 flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-rich-black" />
                      </motion.div>
                      <span className="text-[10px] text-rich-black/60">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="bg-rich-black text-white text-center py-3 rounded-xl text-[12px] font-700"
                >
                  Pro Matched!
                </motion.div>
              </motion.div>
            )}

            {step === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-5 pt-10 h-full flex flex-col"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-[14px] font-800 text-rich-black mb-2"
                >
                  Job Complete
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[10px] text-rich-black/60 mb-4"
                >
                  Standard Clean - 123 King St W
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-2 mb-4"
                >
                  <div className="bg-gray-100 rounded-lg p-2 text-center">
                    <div className="text-[8px] text-rich-black/60 mb-0.5">Before</div>
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="w-full h-14 bg-gray-200 rounded"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 text-center">
                    <div className="text-[8px] text-rich-black/60 mb-0.5">After</div>
                    <motion.div
                      initial={{ opacity: 0.3, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="w-full h-14 bg-emerald-50 rounded"
                    />
                  </div>
                </motion.div>

                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 1.0 + s * 0.12, type: 'spring', stiffness: 400 }}
                      className="text-amber-400 text-[14px]"
                    >
                      &#9733;
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-[10px] text-rich-black/60 ml-1"
                  >
                    Rate your experience
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="mt-auto flex items-center justify-between bg-gray-50 rounded-xl p-3"
                >
                  <div>
                    <div className="text-[9px] text-rich-black/60">Amount</div>
                    <div className="font-display text-[18px] font-800 text-rich-black">$99.00</div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, type: 'spring' }}
                    className="bg-rich-black text-white px-4 py-2 rounded-lg text-[10px] font-700"
                  >
                    Pay Now
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Start autoplay only when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setAutoPlay(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  const stopAutoPlay = useCallback(() => {
    setAutoPlay(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleStepClick = useCallback((index: number) => {
    stopAutoPlay();
    setActiveStep(index);
  }, [stopAutoPlay]);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay]);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative bg-cream text-rich-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] font-600 uppercase tracking-[0.3em] text-gold">
            003 &mdash; How It Works
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[88px] font-800 leading-[0.88] tracking-[-0.03em] max-w-[800px]">
            Three steps.<br />
            That&apos;s it.
          </h2>
          <p className="font-sans text-[15px] font-500 text-rich-black/65 leading-[1.7] max-w-[480px] mt-6">
            We engineered the friction out of home services. From choosing a service to job completion — everything happens on one seamless platform.
          </p>
        </motion.div>

        {/* Step Selector — Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-0 mb-16 md:mb-20"
        >
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(i)}
              className="flex-1 group relative"
            >
              {/* Progress line */}
              <div className="h-[2px] bg-rich-black/[0.06] w-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-rich-black"
                  initial={false}
                  animate={{ width: hasStarted && activeStep >= i ? '100%' : '0%' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-5 min-h-[44px]">
                <span className={`font-mono text-[10px] sm:text-[11px] font-700 transition-colors duration-300 ${activeStep === i ? 'text-rich-black' : 'text-rich-black/25'}`}>
                  {step.id}
                </span>
                <span className={`font-display text-[14px] sm:text-[16px] md:text-[20px] font-800 tracking-[-0.02em] transition-colors duration-300 ${activeStep === i ? 'text-rich-black' : 'text-rich-black/25'}`}>
                  {step.title}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Active Step Content */}
        {hasStarted && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left — Content */}
            <div>
              {/* Step badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full bg-rich-black flex items-center justify-center`}>
                  <span className="font-mono text-[12px] font-800 text-cream">{steps[activeStep].id}</span>
                </div>
                <div>
                  <p className="font-display text-[13px] font-700 text-rich-black/60">{steps[activeStep].subtitle}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-[40px] sm:text-[52px] md:text-[72px] font-800 tracking-[-0.03em] text-rich-black leading-[0.9] mb-6">
                {steps[activeStep].title}<span className="text-rich-black/15">.</span>
              </h3>

              {/* Body */}
              <p className="font-sans text-[16px] md:text-[18px] font-400 text-rich-black/70 leading-[1.7] max-w-[460px] mb-10">
                {steps[activeStep].body}
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-10">
                {steps[activeStep].features.map((feature, i) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rich-black/[0.04] flex items-center justify-center group-hover:bg-rich-black group-hover:text-cream transition-all duration-300">
                      <feature.icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-sans text-[14px] font-600 text-rich-black/70">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stat */}
              <div className="flex items-baseline gap-3 pt-6 border-t border-rich-black/[0.06]">
                <span className="font-display text-[36px] sm:text-[44px] font-800 tracking-[-0.03em] text-rich-black">
                  {steps[activeStep].stat}
                </span>
                <span className="font-mono text-[10px] font-600 uppercase tracking-[0.15em] text-rich-black/60">
                  {steps[activeStep].statLabel}
                </span>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="relative flex items-center justify-center">
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} rounded-3xl opacity-50`} />

              {/* Background image — subtle */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-[0.08]">
                <Image src={steps[activeStep].image} alt={steps[activeStep].title} fill quality={90} className="object-cover" />
              </div>

              {/* Phone mockup — scaled container adjusts height */}
              <div className="relative z-10 py-6 sm:py-12 md:py-16 h-[400px] sm:h-[470px] md:h-auto">
                <PhoneMockup step={steps[activeStep].mockup} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center text-center"
        >
          <Link
            href="#book"
            className="inline-flex items-center justify-center bg-rich-black text-cream font-mono text-[11px] font-700 uppercase tracking-[0.18em] px-10 py-5 hover:bg-rich-black/85 transition-all duration-500 group"
          >
            <span className="mr-3">Experience It Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="font-mono text-[10px] font-600 uppercase tracking-[0.12em] text-warm-gray mt-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            First standard cleaning free
          </p>
        </motion.div>
      </div>
    </section>
  );
}
