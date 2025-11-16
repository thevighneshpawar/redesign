import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/content';

export const FaqList = ({ expandedFAQ, setExpandedFAQ }) => {
    return (
        <section id="faq" className="py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">HELP DESK</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">FAQ</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Frequently asked questions</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors bg-white shadow-sm"
                        >
                            <motion.button
                                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                                className="w-full p-6 flex items-center justify-between hover:bg-sky-50 transition text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-cyan-600 text-sm font-mono font-bold">
                                        {faq.code}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 font-mono">
                                        {faq.q}
                                    </h3>
                                </div>

                                <motion.div
                                    animate={{ rotate: expandedFAQ === idx ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Plus size={24} className="text-cyan-600" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {expandedFAQ === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-6 py-4 bg-sky-50 border-t-2 border-dashed border-slate-200"
                                    >
                                        <p className="text-slate-700 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};