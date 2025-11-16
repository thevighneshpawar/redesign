export const PerforatedLine = ({ vertical = false, className = '' }) => (
    <div className={`flex items-center justify-center ${vertical ? 'flex-col h-full w-4' : 'flex-row w-full h-4'} ${className}`}>
        {Array.from({ length: vertical ? 12 : 24 }).map((_, i) => (
            <div
                key={i}
                className={`bg-slate-300 ${vertical ? 'w-1 h-2 mx-0.5' : 'h-1 w-2 my-0.5'}`}
            />
        ))}
    </div>
);