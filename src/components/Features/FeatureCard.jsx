import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const FeatureCard = ({ feature, index }) => {
    const Icon = LucideIcons[feature.icon];

    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 p-[2px]"
        >
            <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                <div
                    className="h-36 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200"
                    style={{
                        backgroundImage: "linear-gradient(135deg, #b9e7ff 0%, #d4c5ff 60%, #f6e8ff 100%)",
                    }}
                />

                <div className="absolute top-2 left-4">
                    <div className="bg-white/95 border border-slate-200 px-3 py-1 rounded-full text-xs font-mono font-semibold shadow-sm">
                        <span className="text-amber-500 mr-2">●</span>
                        {feature.code || "SV"}
                    </div>
                </div>

                <div className="p-6 pt-8">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center">
                            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-rose-400 to-indigo-500 flex items-center justify-center">
                                <Icon size={20} className="text-white" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                                    Expert-curated
                                </span>
                                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                                    24/7 Support
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <button className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white shadow-sm hover:opacity-95 transition">
                            Explore <ArrowUpRight size={14} />
                        </button>

                        <div className="text-[11px] font-mono text-slate-400">
                            Avg. savings: ₹8,000
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-multiply" style={{
                    backgroundImage: 'url("/assets/map-texture.svg")',
                    backgroundSize: "cover",
                }} />
            </div>
        </motion.article>
    );
};