'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BeforeAfterReveal() {
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeClipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(55); // track current position without re-renders

  const updateDOM = useCallback((pos: number) => {
    posRef.current = pos;
    const pct = `${pos}%`;
    if (beforeClipRef.current) beforeClipRef.current.style.width = pct;
    if (lineRef.current) lineRef.current.style.left = pct;
    if (handleRef.current) handleRef.current.style.left = pct;
  }, []);

  const getPos = useCallback((clientX: number) => {
    if (!sliderRef.current) return null;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  // Track container width for the before image sizing
  useEffect(() => {
    if (!sliderRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(sliderRef.current);
    return () => ro.disconnect();
  }, []);

  // Pointer down on the container — attach window listeners for move/up
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    const pos = getPos(e.clientX);
    if (pos !== null) updateDOM(pos);

    const onMove = (ev: PointerEvent) => {
      const p = getPos(ev.clientX);
      if (p !== null) updateDOM(p);
    };

    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, [getPos, updateDOM]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); updateDOM(Math.max(0, posRef.current - 2)); }
    if (e.key === 'ArrowRight') { e.preventDefault(); updateDOM(Math.min(100, posRef.current + 2)); }
  }, [updateDOM]);

  return (
    <section className="relative bg-rich-black text-cream py-28 md:py-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[10px] font-700 uppercase tracking-[0.3em] text-gold block mb-6">
            The Taskly Effect
          </span>
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[80px] font-800 leading-[0.88] tracking-[-0.03em] text-cream">
            See the<br />difference<span className="text-gold">.</span>
          </h2>
          <p className="font-sans text-[14px] font-600 text-cream/75 mt-6 max-w-[400px] mx-auto">
            Drag the slider to reveal the transformation. This is what professional cleaning looks like.
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          ref={sliderRef}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-col-resize select-none border border-cream/10 group touch-none"
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
        >
          {/* AFTER image (full background — the clean result) */}
          <Image
            src="/assets/after.jpg"
            alt="After — Pristine clean"
            fill
            quality={95}
            className="object-cover pointer-events-none"
            priority
          />

          {/* BEFORE image (clipped to slider position) */}
          <div
            ref={beforeClipRef}
            className="absolute inset-0 overflow-hidden"
            style={{ width: '55%' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/before.png"
              alt="Before — Needs cleaning"
              className="absolute inset-0 h-full object-cover pointer-events-none"
              style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100vw', maxWidth: 'none' }}
            />
          </div>

          {/* Slider Line */}
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 w-[2px] bg-white/70 z-20 pointer-events-none"
            style={{ left: '55%', transform: 'translateX(-50%)' }}
          >
            <div className="absolute inset-0 w-[6px] -translate-x-[2px] bg-white/10 blur-sm" />
          </div>

          {/* Slider Handle */}
          <div
            ref={handleRef}
            className="absolute top-1/2 z-30 pointer-events-none"
            style={{ left: '55%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="absolute inset-0 w-14 h-14 rounded-full bg-white/20 blur-md" />
            <div className="relative w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-white/60 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_40px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-300">
              <ChevronLeft className="w-3.5 h-3.5 text-rich-black/70 -mr-0.5" strokeWidth={2.5} />
              <div className="w-[1px] h-4 bg-rich-black/15 mx-0.5" />
              <ChevronRight className="w-3.5 h-3.5 text-rich-black/70 -ml-0.5" strokeWidth={2.5} />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 bg-rich-black/70 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 pointer-events-none">
            <span className="font-mono text-[9px] sm:text-[10px] font-700 uppercase tracking-[0.2em] text-cream">Before</span>
          </div>
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 bg-cream backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 pointer-events-none">
            <span className="font-mono text-[9px] sm:text-[10px] font-700 uppercase tracking-[0.2em] text-rich-black">After</span>
          </div>

          {/* Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-rich-black/60 backdrop-blur-sm px-5 py-2.5 pointer-events-none opacity-70">
            <span className="font-mono text-[9px] font-600 uppercase tracking-[0.25em] text-cream flex items-center gap-2">
              <ChevronLeft className="w-3 h-3" />
              Drag to compare
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
