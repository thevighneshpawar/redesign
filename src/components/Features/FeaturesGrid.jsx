import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { features } from '../../data/content';

export const FeaturesGrid = () => {
    return (
        <section id="features" className="py-20 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 z-10">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Service Classes</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">Travel Experience</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose your level of service and comfort</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};