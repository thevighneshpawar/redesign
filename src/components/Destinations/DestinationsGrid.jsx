import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { destinations } from '../../data/content';
import { BarcodeStrip } from '../Shared/BarcodeStrip';

export const DestinationsGrid = ({ savedDestinations, toggleDestination }) => {
    return (
        <section id="destinations" className="py-20 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">DESTINATIONS</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">POPULAR ROUTES</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Top destinations with exclusive deals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="relative group cursor-pointer"
                            onClick={() => toggleDestination(idx)}
                        >
                            <div className="bg-white border-2 border-indigo-500 rounded-lg p-6 shadow-lg relative overflow-hidden">
                                <div className="absolute inset-2 border-2 border-dashed border-rose-400 rounded opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="text-2xl font-black text-slate-900 font-mono mb-1">{dest.code}</div>
                                        <div className="text-slate-600 font-serif">{dest.name}</div>
                                    </div>
                                    <motion.button
                                        animate={{ scale: savedDestinations.has(idx) ? 1.2 : 1 }}
                                        className="text-rose-500 hover:text-amber-600 transition-colors"
                                    >
                                        <Heart size={20} fill={savedDestinations.has(idx) ? 'currentColor' : 'none'} />
                                    </motion.button>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Class:</span>
                                        <span className="font-mono font-bold text-slate-900">{dest.class}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Gate:</span>
                                        <span className="font-mono font-bold text-slate-900">{dest.gate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Save:</span>
                                        <span className="font-mono font-bold text-rose-600">{dest.savings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Rating:</span>
                                        <span className="font-mono font-bold text-rose-600">{dest.reviews}</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <BarcodeStrip height={12} />
                                </div>
                            </div>

                            <motion.div
                                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-rose-400 rounded-full flex items-center justify-center text-white text-xs font-bold font-mono shadow-lg"
                                whileHover={{ rotate: 15, scale: 1.1 }}
                            >
                                {dest.code}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};