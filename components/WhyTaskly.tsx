'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ShieldCheck, Clock, DollarSign, MapPin, Camera, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (v) => {
      setDisplay(Math.round(v));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const comparisons = [
  {
    label: 'Vetting',
    others: 'Self-reported profiles',
    taskly: '10-layer verification with CPIC background checks',
    icon: ShieldCheck,
  },
  {
    label: 'Pricing',
    others: 'Quote after quote. Hidden fees at the door.',
    taskly: 'Fixed price shown before you book. $0 hidden fees.',
    icon: DollarSign,
  },
  {
    label: 'Tracking',
    others: '"They\'ll be there between 9am and 5pm"',
    taskly: 'Real-time GPS. Know exactly when they arrive.',
    icon: MapPin,
  },
  {
    label: 'Accountability',
    others: 'No photos. No proof. Your word vs theirs.',
    taskly: 'Before/after photos for every single job.',
    icon: Camera,
  },
  {
    label: 'Guarantee',
    others: 'Good luck getting a callback.',
    taskly: 'Re-done free in 48h or full refund. Period.',
    icon: Star,
  },
  {
    label: 'Speed',
    others: 'Days of calling around, comparing, waiting.',
    taskly: '30 seconds to book. Auto-matched instantly.',
    icon: Clock,
  },
];

const stats = [
  { value: 10, suffix: '', label: 'Security Layers', prefix: '' },
  { value: 30, suffix: 's', label: 'To Book', prefix: '' },
  { value: 0, suffix: '', label: 'Hidden Fees', prefix: '$' },
  { value: 48, suffix: 'h', label: 'Guarantee', prefix: '' },
];

export function WhyTaskly() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative bg-cream-dark text-rich-black py-28 md:py-40 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rich-black/[0.02] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rich-black/[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] font-700 uppercase tracking-[0.3em] text-rich-black/60">
            Why Taskly
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[88px] font-800 leading-[0.88] tracking-[-0.03em] max-w-[800px] text-rich-black">
            The <span className="text-red-500">taskly</span><br />freedom?
          </h2>
          <div className="max-w-[320px] pb-3">
            <p className="font-sans text-[14px] font-500 text-rich-black/65 leading-[1.7] mb-4">
              Other platforms connect you and hope for the best. We manage the entire experience. Here&apos;s the difference.
            </p>
            <Link
              href="/the-taskly-advantages"
              target="_blank"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] font-800 uppercase tracking-[0.15em] text-red-500 hover:text-red-600 transition-colors duration-300 group"
            >
              <span>The taskly advantage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-rich-black/[0.06] mb-20 md:mb-28"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-cream-dark py-8 md:py-10 px-6 text-center group hover:bg-cream transition-colors duration-500">
              <div className="font-display text-[36px] sm:text-[48px] md:text-[60px] font-800 leading-none tracking-[-0.04em] text-rich-black mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="font-mono text-[9px] font-600 uppercase tracking-[0.2em] text-rich-black/55">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Comparison — "Others vs Taskly" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-display text-[28px] md:text-[40px] font-800 tracking-[-0.03em] text-rich-black">
              Others vs Taskly
            </h3>
            <div className="flex-1 h-[1px] bg-rich-black/[0.08]" />
          </div>

          {/* Comparison rows */}
          <div className="space-y-[1px]">
            {comparisons.map((item, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="group cursor-pointer"
                >
                  {/* Header row */}
                  <div className={`flex items-center gap-3 sm:gap-4 md:gap-8 px-4 sm:px-6 md:px-8 py-5 md:py-6 transition-all duration-500 ${
                    isExpanded ? 'bg-rich-black/[0.04]' : 'bg-transparent hover:bg-rich-black/[0.02]'
                  }`}>
                    {/* Icon */}
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isExpanded ? 'bg-rich-black text-cream' : 'bg-rich-black/[0.06] text-rich-black/60'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* Label */}
                    <span className={`font-display text-[16px] sm:text-[20px] md:text-[28px] font-800 tracking-[-0.02em] flex-1 transition-colors duration-500 ${
                      isExpanded ? 'text-rich-black' : 'text-rich-black/60'
                    }`}>
                      {item.label}
                    </span>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-rich-black/55"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-rich-black/[0.06]">
                      {/* Others */}
                      <div className="bg-cream-dark px-5 sm:px-8 py-5 sm:py-6 md:py-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="font-mono text-[9px] font-700 uppercase tracking-[0.2em] text-red-400">
                            Others
                          </span>
                        </div>
                        <p className="font-sans text-[15px] md:text-[16px] font-400 text-rich-black/60 leading-[1.7] line-through decoration-red-400/40">
                          {item.others}
                        </p>
                      </div>

                      {/* Taskly */}
                      <div className="bg-cream px-5 sm:px-8 py-5 sm:py-6 md:py-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-rich-black" />
                          <span className="font-mono text-[9px] font-700 uppercase tracking-[0.2em] text-rich-black/70">
                            Taskly
                          </span>
                        </div>
                        <p className="font-sans text-[15px] md:text-[16px] font-600 text-rich-black leading-[1.7]">
                          {item.taskly}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-rich-black/[0.08]"
        >
          <p className="font-display text-[20px] sm:text-[24px] md:text-[36px] font-800 tracking-[-0.03em] text-rich-black">
            Ready to switch?
          </p>
          <Link
            href="#book"
            className="inline-flex items-center justify-center bg-rich-black text-cream font-mono text-[11px] font-700 uppercase tracking-[0.18em] px-10 py-5 hover:bg-rich-black/85 transition-all duration-500 group"
          >
            <span className="mr-3">Book Your First Clean</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
