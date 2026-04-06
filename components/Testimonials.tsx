'use client';

import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I've tried every service in Toronto. Taskly is the first time I felt completely comfortable leaving someone alone in my condo.",
    author: 'Sarah Johnson',
    initials: 'SJ',
    location: 'King West, Toronto',
    service: 'Deep Cleaning',
    rating: 5,
    bookings: 24,
    color: 'bg-amber-800',
  },
  {
    quote: 'The level of transparency is unmatched. Real-time GPS tracking and the background check clearance completely changes the game.',
    author: 'Michael Torres',
    initials: 'MT',
    location: 'The Annex, Toronto',
    service: 'Emergency Plumbing',
    rating: 5,
    bookings: 8,
    color: 'bg-emerald-800',
  },
  {
    quote: "They don't just send anyone. You can tell these are vetted professionals. The $10K property protection sealed the deal for me.",
    author: 'Elena Rossi',
    initials: 'ER',
    location: 'Leslieville, Toronto',
    service: 'Move-in Cleaning',
    rating: 5,
    bookings: 12,
    color: 'bg-sky-800',
  },
  {
    quote: "We switched our entire building's maintenance to Taskly. The property management portal alone saves us 20 hours a month.",
    author: 'David Park',
    initials: 'DP',
    location: 'Liberty Village',
    service: 'Property Management',
    rating: 5,
    bookings: 156,
    color: 'bg-violet-800',
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-rich-black text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(197,164,126,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_80%,rgba(197,164,126,0.05),transparent)]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-28 md:py-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="font-mono text-[10px] font-700 uppercase tracking-[0.3em] text-amber-400 block mb-4">
              What They Say
            </span>
            <h3 className="font-display text-[28px] sm:text-[36px] md:text-[56px] font-800 tracking-[-0.03em] text-cream">
              Real People<span className="text-amber-400">.</span><br className="md:hidden" /> Real Reviews<span className="text-amber-400">.</span>
            </h3>
          </div>
        </motion.div>

        {/* Featured first review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-cream/[0.06] to-cream/[0.02] border border-cream/[0.1] p-6 sm:p-10 md:p-14 mb-[1px] group overflow-hidden"
        >
          <div className="absolute top-4 right-4 sm:right-8 font-display text-[120px] sm:text-[200px] md:text-[300px] font-800 leading-none text-cream/[0.04] select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-6" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-[18px]" aria-hidden="true">&#9733;</span>
                ))}
                <span className="font-mono text-[10px] font-700 text-cream/65 ml-2">5.0</span>
              </div>
              <p className="font-sans text-[16px] sm:text-[20px] md:text-[26px] font-500 leading-[1.6] text-cream/90 max-w-[600px]">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
            </div>

            <div className="flex flex-col justify-end md:items-end md:text-right min-w-[200px]">
              <div className={`w-14 h-14 ${testimonials[0].color} flex items-center justify-center mb-4`}>
                <span className="font-mono text-[14px] font-700 text-cream tracking-wider">
                  {testimonials[0].initials}
                </span>
              </div>
              <p className="font-sans text-[16px] font-700 text-cream">{testimonials[0].author}</p>
              <p className="font-mono text-[10px] font-600 uppercase tracking-[0.15em] text-cream/65 mt-1">{testimonials[0].location}</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="font-mono text-[8px] font-700 uppercase tracking-[0.2em] text-amber-400/70 border border-amber-400/20 px-3 py-1.5">
                  {testimonials[0].service}
                </span>
                <span className="font-mono text-[8px] font-700 uppercase tracking-[0.2em] text-cream/60 border border-cream/10 px-3 py-1.5">
                  {testimonials[0].bookings} Bookings
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-cream/[0.04]">
          {testimonials.slice(1).map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-rich-black p-6 sm:p-8 md:p-9 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] group overflow-hidden hover:bg-cream/[0.05] transition-colors duration-700"
            >
              <div className="absolute top-2 right-4 font-display text-[100px] font-800 leading-none text-cream/[0.03] select-none pointer-events-none group-hover:text-cream/[0.05] transition-colors duration-700">
                &ldquo;
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1" role="img" aria-label={`${test.rating} out of 5 stars`}>
                    {Array.from({ length: test.rating }).map((_, s) => (
                      <span key={s} className="text-amber-400 text-[12px]" aria-hidden="true">&#9733;</span>
                    ))}
                  </div>
                  <span className="font-mono text-[7px] font-700 uppercase tracking-[0.2em] text-cream/50 border border-cream/20 px-2 py-1 group-hover:border-cream/30 group-hover:text-cream/70 transition-all duration-500">
                    {test.service}
                  </span>
                </div>

                <p className="font-sans text-[14px] md:text-[15px] font-500 leading-[1.75] text-cream/60 group-hover:text-cream/85 transition-colors duration-500">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-3.5 mt-8 pt-6 border-t border-cream/[0.05] group-hover:border-cream/[0.1] transition-colors duration-500">
                <div className={`w-10 h-10 ${test.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-mono text-[10px] font-700 text-cream/90 tracking-wider">
                    {test.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[13px] font-700 text-cream/90 truncate">{test.author}</p>
                  <p className="font-mono text-[8px] font-600 uppercase tracking-[0.15em] text-cream/60 mt-0.5">{test.location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-display text-[18px] font-800 text-cream/80 leading-none group-hover:text-cream transition-colors duration-500">{test.bookings}</p>
                  <p className="font-mono text-[7px] font-600 uppercase tracking-[0.15em] text-cream/25 mt-1">Bookings</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
