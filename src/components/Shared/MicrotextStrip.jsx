import { motion } from 'framer-motion';

export const MicrotextStrip = ({ text = "RIMIGO • VACATION TICKET • BOARDING PASS •" }) => {
    const content = Array(10).fill(text).join(' • ');

    const highlightedContent = content.split(/(RIMIGO)/).map((part, index) =>
        part === "RIMIGO"
            ? <span key={index} className="bg-cyan-400 text-white px-1 mx-1">RIMIGO</span>
            : part
    );

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <motion.div
                className="text-[16px] text-slate-500 tracking-widest font-mono inline-block"
                animate={{ x: [0, -100] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                {highlightedContent}
            </motion.div>
        </div>
    );
};