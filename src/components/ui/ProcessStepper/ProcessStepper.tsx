const ProcessStepper = ({ steps }: { steps: string[] }) => {
  return (
    <div className="h-auto w-full pt-4">
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-10 pb-16 last:pb-0">
          {i !== steps.length - 1 && (
            <div 
              className="absolute left-[23px] top-[46px] w-[1px] h-[calc(100%-46px)] bg-[var(--color-blue-text-light)] shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
            />
          )}

          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[var(--color-blue-text-light)] shadow-[0_0_10px_rgba(59,130,246,0.5)] text-sm font-medium uppercase text-[var(--color-glass-bg-border-hover)] shadow-[0_0_10px_rgba(var(--color-glass-bg-border-hover-rgb),0.2)]">
            {i + 1}
          </div>

          <div className="flex-1 pt-2">
             <p className="text-base font-thin text-white leading-relaxed">
                {step}
             </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessStepper;