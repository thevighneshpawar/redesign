import { motion } from 'framer-motion';
import { journeySteps } from '../../data/content';
import * as LucideIcons from 'lucide-react';

export const JourneyGrid = () => {
    return (
        <section id="journey" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">FLIGHT PATH</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">YOUR JOURNEY</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Follow the path to your perfect vacation</p>
                </div>

                <div className="relative">
                    <div className="mx-auto" style={{ maxWidth: '980px' }}>
                        <style>{`
              :root {
                --card-w: 360px;
                --gap-y: 12px;
                --gap-x: 18px;
                --overlap: 30px;
              }
              .journey-grid {
                display: grid;
                grid-template-columns: repeat(2, var(--card-w));
                justify-content: center;
                column-gap: var(--gap-x);
                row-gap: var(--gap-y);
                align-items: start;
              }
              @media (max-width: 767px) {
                .journey-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 12px;
                }
                .row-right { transform: none !important; }
              }
              @media (min-width: 768px) {
                .row-right { transform: translateY(var(--overlap)); }
              }
              .row-left, .row-right { transition: transform 220ms cubic-bezier(.2,.9,.2,1); }
            `}</style>

                        <div className="journey-grid">
                            {journeySteps.map((step, idx) => {
                                const Icon = LucideIcons[step.icon];
                                const isRight = idx % 2 === 1;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.04, type: 'spring', stiffness: 110, damping: 16 }}
                                        className={isRight ? 'row-right' : 'row-left'}
                                        style={{ justifySelf: 'center' }}
                                    >
                                        <div className="rounded-xl p-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-sm" style={{ width: 'var(--card-w)' }}>
                                            <div className="bg-white/95 rounded-xl px-5 py-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                                                        <Icon size={18} className="text-white" />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-sm font-mono text-cyan-600 font-semibold">{step.code}</div>
                                                            <div className="text-xs font-mono text-slate-500 whitespace-nowrap">{step.gate} • {step.time}</div>
                                                        </div>

                                                        <h4 className="mt-2 text-lg font-semibold text-slate-900 truncate">{step.title}</h4>
                                                        <p className="mt-1 text-sm text-slate-600 line-clamp-3">{step.description}</p>

                                                        <div className="mt-3 flex items-center justify-between">
                                                            <button className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Details</button>
                                                            <div className="text-[11px] font-mono text-slate-400">Avg. time: 2m</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};