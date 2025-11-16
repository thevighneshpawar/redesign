export const BarcodeStrip = ({ height = 20, className = '' }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <div className="flex space-x-[2px]">
            {Array.from({ length: 80 }).map((_, i) => (
                <div
                    key={i}
                    className="w-[1px] bg-slate-900"
                    style={{ height: Math.random() > 0.3 ? height : height * 0.6 }}
                />
            ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
);