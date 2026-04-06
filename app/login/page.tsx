'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, MapPin, Shield, Clock } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <main className="fixed inset-0 w-screen h-screen bg-cream overflow-hidden selection:bg-rich-black/10 selection:text-rich-black">

      {/* ——— LEFT: Form Panel ——— */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[45%] flex flex-col bg-cream z-10">
        {/* Nav */}
        <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-12 py-6 shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-2 text-rich-black/60 hover:text-rich-black transition-colors duration-500"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">Back</span>
          </Link>
          <Link href="/" className="font-display text-[20px] font-800 tracking-tight text-rich-black">
            taskly<span className="text-green-700">.</span>
          </Link>
        </nav>

        {/* Centered Form */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full max-w-[380px]"
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="mb-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[32px] sm:text-[40px] font-800 text-rich-black tracking-[-0.03em] leading-[1]"
                >
                  {isLogin ? (
                    <>Welcome back<span className="text-green-700">.</span></>
                  ) : (
                    <>Get started<span className="text-green-700">.</span></>
                  )}
                </motion.h1>
              </AnimatePresence>
              <p className="mt-3 font-sans text-[14px] font-500 text-rich-black/60">
                {isLogin ? 'Sign in to manage your bookings' : 'Create your account in seconds'}
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div
              variants={fadeUp}
              className="flex p-1 bg-rich-black/[0.04] mb-7 relative"
            >
              <motion.div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
                animate={{ x: isLogin ? 0 : '100%' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 text-[10px] font-mono font-700 uppercase tracking-[0.18em] relative z-10 transition-colors duration-400 min-h-[44px] ${isLogin ? 'text-rich-black' : 'text-rich-black/70 hover:text-rich-black'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 text-[10px] font-mono font-700 uppercase tracking-[0.18em] relative z-10 transition-colors duration-400 min-h-[44px] ${!isLogin ? 'text-rich-black' : 'text-rich-black/70 hover:text-rich-black'}`}
              >
                Create Account
              </button>
            </motion.div>

            {/* Google Sign In */}
            <motion.div variants={fadeUp} className="mb-6">
              <button className="w-full flex items-center justify-center gap-3 py-3.5 border border-rich-black/15 hover:border-rich-black/30 bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-400 group min-h-[48px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-mono text-[11px] font-700 uppercase tracking-[0.12em] text-rich-black group-hover:text-rich-black transition-colors duration-400">
                  Continue with Google
                </span>
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-rich-black/[0.15]" />
              <span className="font-mono text-[9px] font-700 uppercase tracking-[0.25em] text-rich-black/60">or</span>
              <div className="flex-1 h-px bg-rich-black/[0.15]" />
            </motion.div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative pb-1">
                      <label
                        className={`absolute left-0 font-mono text-[10px] font-700 uppercase tracking-[0.18em] transition-all duration-300 pointer-events-none ${
                          nameFocused || nameValue
                            ? '-top-4 text-[9px] text-green-700'
                            : 'top-3 text-rich-black/70'
                        }`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        onFocus={() => setNameFocused(true)}
                        onBlur={() => setNameFocused(false)}
                        className="w-full bg-transparent border-b border-rich-black/25 focus:border-rich-black py-3 text-rich-black font-sans text-[15px] focus:outline-none transition-colors duration-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div variants={fadeUp} className="relative">
                <label
                  className={`absolute left-0 font-mono text-[10px] font-700 uppercase tracking-[0.18em] transition-all duration-300 pointer-events-none ${
                    emailFocused || emailValue
                      ? '-top-4 text-[9px] text-green-700'
                      : 'top-3 text-rich-black/70'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  className="w-full bg-transparent border-b border-rich-black/25 focus:border-rich-black py-3 text-rich-black font-sans text-[15px] focus:outline-none transition-colors duration-500"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <label
                  className={`absolute left-0 font-mono text-[10px] font-700 uppercase tracking-[0.18em] transition-all duration-300 pointer-events-none ${
                    passwordFocused || passwordValue
                      ? '-top-4 text-[9px] text-green-700'
                      : 'top-3 text-rich-black/70'
                  }`}
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="w-full bg-transparent border-b border-rich-black/25 focus:border-rich-black py-3 text-rich-black font-sans text-[15px] focus:outline-none transition-colors duration-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-3 w-10 h-10 flex items-center justify-center text-rich-black/70 hover:text-rich-black transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </motion.div>

              {isLogin && (
                <motion.div variants={fadeUp} className="flex justify-end">
                  <button
                    type="button"
                    className="font-mono text-[9px] font-700 uppercase tracking-[0.18em] text-rich-black/70 hover:text-rich-black transition-colors duration-300 py-1"
                  >
                    Forgot Password?
                  </button>
                </motion.div>
              )}

              <motion.div variants={fadeUp} className="pt-2">
                <button className="w-full relative overflow-hidden bg-rich-black text-cream py-4 group flex items-center justify-center gap-3 min-h-[52px]">
                  <div className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="relative z-10 font-mono text-[11px] font-700 uppercase tracking-[0.25em] group-hover:text-white transition-colors duration-500">
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </span>
                  <span className="relative z-10 text-sm group-hover:translate-x-1.5 group-hover:text-white transition-all duration-500">
                    &rarr;
                  </span>
                </button>
              </motion.div>
            </form>

            {/* Footer */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-rich-black/60 leading-relaxed"
            >
              By continuing, you agree to our{' '}
              <a href="#" className="text-rich-black/80 hover:text-rich-black transition-colors duration-300 underline underline-offset-2">Terms</a>
              {' & '}
              <a href="#" className="text-rich-black/80 hover:text-rich-black transition-colors duration-300 underline underline-offset-2">Privacy</a>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ——— RIGHT: Clean Map ——— */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
        {/* Clean map — no CSS filter hacks */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289994065!2d-79.54286137839818!3d43.71812744790923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            className="w-full h-full border-0 saturate-[0.3] brightness-[1.05]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Taskly Service Area — Toronto & GTA"
          />
        </div>


        {/* Bottom dark overlay for info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rich-black/90 via-rich-black/50 to-transparent h-[35%] pointer-events-none" />

        {/* Coverage info */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[10px] font-700 uppercase tracking-[0.25em] text-green-400">
                Live Coverage — Toronto & GTA
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, label: '16 Neighborhoods', desc: 'Active coverage' },
                { icon: Shield, label: 'CPIC Verified', desc: 'All professionals' },
                { icon: Clock, label: '15 Min Avg', desc: 'Response time' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3 bg-rich-black/60 backdrop-blur-xl border border-white/10 px-4 py-3"
                >
                  <item.icon className="w-4 h-4 text-green-400" />
                  <div>
                    <p className="font-mono text-[10px] font-700 uppercase tracking-[0.1em] text-white">{item.label}</p>
                    <p className="font-mono text-[8px] font-500 uppercase tracking-[0.1em] text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
