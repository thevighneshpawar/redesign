import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { BarcodeStrip } from '../Shared/BarcodeStrip';
import { MicrotextStrip } from '../Shared/MicrotextStrip';

export const Footer = () => {
    return (
        <footer className="relative z-10 bg-slate-800/95 text-slate-400 py-16 px-4 border-t border-slate-800 overflow-hidden">
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/assets/map-texture.svg')] bg-cover bg-center" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest leading-relaxed mb-4">
                        RIMIGO AIR • DIGITAL TRAVEL PLATFORM • VACATION ENGINE • PASSENGER SYSTEMS ONLINE • TICKET NO: 029384-128392
                    </div>

                    <BarcodeStrip height={20} className="opacity-70 mb-4" />
                    <MicrotextStrip text="RIMIGO AIR • TRAVEL TECHNOLOGY • VACATION PLANNING • BOARDING PASS •" className="text-cyan-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="text-white font-extrabold text-xl mb-4 tracking-wide">RIMIGO</div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your vacation made simple with modern travel technology and personalized planning.
                        </p>
                    </div>

                    {[
                        { title: "Company", links: ["About Us", "Careers", "Contact"] },
                        { title: "Resources", links: ["Blog", "Stories", "Guides"] },
                        { title: "Support", links: ["Help Desk", "Policies", "Terms"] }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <div className="text-white font-bold text-sm uppercase tracking-widest mb-3">
                                {col.title}
                            </div>
                            <ul className="space-y-2">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-all text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-xs font-mono tracking-wide">
                        © 2025 RIMIGO AIR • ALL RIGHTS RESERVED • SYSTEM SEQ: 823-493204
                    </div>

                    <div className="flex gap-5">
                        {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ scale: 1.15 }}
                                className="text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};