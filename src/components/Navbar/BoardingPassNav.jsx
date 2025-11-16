import { motion } from 'framer-motion';
import { navItems } from '../../data/content';

export const BoardingPassNav = ({ activeSection, scrollDirection, onNavClick }) => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <div className="bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-xl shadow-xl overflow-hidden relative">
                <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-sky-400 to-rose-400" />

                <div className="relative px-6 py-6">
                    <div className="flex justify-between items-center">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-[16px] font-mono font-bold text-slate-800 tracking-wider hover:text-rose-500 transition-colors relative px-3 py-1 rounded-md"
                                whileHover={{ scale: 1.06 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavClick(item.id);
                                }}
                            >
                                {item.label}
                                <div className="text-[9px] text-slate-500 font-normal mt-0.5 tracking-tight">
                                    {item.gate}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};