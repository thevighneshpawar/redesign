import { MicrotextStrip } from '../Shared/MicrotextStrip';

export const KpiBoard = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500">DEPARTURE BOARD</div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">TRAVEL STATISTICS</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Essential metrics from Rimigo — simple and clear.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: '242', desc: 'Vacations Planned', code: 'STAT-001' },
                        { label: '4.9', desc: 'Traveller Rating', code: 'STAT-002' },
                        { label: '78', desc: 'Countries', code: 'STAT-003' },
                        { label: '₹8,354', desc: 'Avg Savings', code: 'STAT-004' }
                    ].map((stat, idx) => (
                        <div key={idx} className="rounded-xl p-[1.5px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
                            <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden">
                                <div className="px-5 py-5 flex-1 flex flex-col">
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">{stat.desc}</div>
                                    <div className="text-3xl md:text-4xl font-black font-mono text-slate-900 mt-3">
                                        {stat.label}
                                        {stat.desc.includes('Rating') && <span className="text-amber-400">★</span>}
                                    </div>

                                    <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 mt-3">
                                        <polyline fill="none" stroke="#06b6d4" strokeWidth="2" points="0,14 20,10 40,6 60,8 80,3 100,6" />
                                    </svg>

                                    <div className="mt-auto flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4">
                                        <span>{stat.desc.split(' ')[0]}</span>
                                        <span>{stat.desc.includes('Rating') ? 'Verified' : stat.desc.includes('Savings') ? 'INR' : 'Live'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                    <MicrotextStrip />
                </div>
            </div>
        </section>
    );
};