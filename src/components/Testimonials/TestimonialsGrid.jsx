import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { testimonials } from '../../data/content';

export const TestimonialsGrid = () => {
    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">TRAVELER STORIES</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">PASSENGER REVIEWS</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">What our travelers say about their journeys</p>
                </div>

                <style>{`
          .masonry { column-gap: 20px; }
          @media (min-width: 640px) { .masonry { column-count: 1; } }
          @media (min-width: 768px) { .masonry { column-count: 2; } }
          @media (min-width: 1200px) { .masonry { column-count: 3; } }
          .masonry-item { break-inside: avoid; -webkit-column-break-inside: avoid; margin-bottom: 20px; }
        `}</style>

                <div className="masonry mx-auto flex justify-center">
                    {testimonials.map((t, idx) => (
                        <article key={idx} className="masonry-item mx-auto" style={{ maxWidth: 380 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                whileHover={{ translateY: -6, boxShadow: '0 18px 40px rgba(2,6,23,0.12)' }}
                                className="rounded-xl p-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400"
                            >
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-4 relative overflow-hidden">
                                    <span className="absolute -top-2 left-6 w-3 h-3 bg-slate-200 rounded-full border-2 border-white" />

                                    <div className="flex items-start justify-between mb-3 gap-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 font-mono">
                                                {t.name?.charAt(0) ?? '👤'}
                                            </div>
                                            <div>
                                                <div className="text-slate-900 font-bold text-sm font-mono">{t.name}</div>
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    <MapPin size={12} /> <span>{t.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right text-xs">
                                            <div className="text-slate-900 font-mono">{t.flight}</div>
                                            <div className="text-slate-500">SEAT {t.seat}</div>
                                        </div>
                                    </div>

                                    <p className="text-slate-700 italic mb-3 leading-relaxed">"{t.quote}"</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {Array.from({ length: t.rating }).map((_, iStar) => (
                                                <Star key={iStar} size={14} className="text-amber-400" />
                                            ))}
                                        </div>
                                        <div className="text-xs font-mono text-slate-400">Verified traveler</div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="h-2 w-full bg-[repeating-linear-gradient(90deg,#e6eef8,#e6eef8 6px,transparent 6px,transparent 12px)] rounded" />
                                    </div>
                                </div>
                            </motion.div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};