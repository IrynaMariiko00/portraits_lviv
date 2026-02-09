import { motion } from "framer-motion";

const ProcessStepper = ({ steps }: { steps: string[] }) => {
  return (
    <div className="h-auto w-full pt-4">
      {steps.map((step, i) => (
        <div key={i} className="group relative flex gap-10 pb-16 last:pb-0">
          {i !== steps.length - 1 && (
            <div className="absolute left-[23px] top-[46px] w-[1px] h-[calc(100%-46px)] bg-[var(--color-blue-text-light)] shadow-[var(--color-blue-shadow)]">
              <div className="absolute inset-0 border-l border-dashed" />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 border-l border-solid border-[var(--color-blue-text-light)] shadow-[var(--color-blue-shadow)]"
              />
            </div>
          )}

          <div className="flex rounded-full bg-[var(--color-gray)] h-[46px] w-[46px] shrink-0 items-center justify-center border border-[var(--color-blue-text-light)] text-[var(--color-blue-text-light)] shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            {i + 1}
          </div>

          <div className="flex-1 pt-2">
            <p className="text-base font-thin text-[var(--color-primary)] leading-relaxed">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessStepper;
