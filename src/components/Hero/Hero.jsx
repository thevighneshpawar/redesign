import React from 'react'
import { motion } from 'framer-motion'
import { Plane, ArrowUpRight } from 'lucide-react'

export const Hero = ({ onStart }) => {
    return (
        <section
            id="hero"
            className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden"
            aria-label="Hero — Rimigo"
        >
            {/* Subtle dotted/map grain background — pure CSS, no images */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-6"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Huge Rimigo watermark behind content */}
            <h2
                aria-hidden
                className="absolute right-30 top-80 -translate-y-1/2 text-[clamp(32px,8vw,80px)] leading-none font-extrabold select-none pointer-events-none text-slate-900/10 tracking-[0.04em] blur-[0.2px] z-0"
                style={{
                    WebkitFontSmoothing: 'antialiased',
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed'
                }}
            >
                RIMIGO
            </h2>


            {/* Main content (keeps z-high so watermark sits behind) */}
            <div className="relative z-30 max-w-4xl mx-auto text-center">
                <div className="p-8">
                    <motion.h1
                        className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-serif tracking-tight z-30"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        YOUR JOURNEY<br />STARTS HERE
                    </motion.h1>

                    <motion.p
                        className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto font-light z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        End-to-end travel assistance with personalized itineraries and expert guidance
                    </motion.p>

                    <motion.button
                        onClick={onStart}
                        whileHover={{
                            scale: 1.04,
                            boxShadow: '0 20px 40px rgba(56,189,248,0.18)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold text-lg rounded-lg uppercase tracking-widest font-mono z-30"
                    >
                        <Plane size={18} />
                        START YOUR TRIP
                        <ArrowUpRight size={18} />
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
