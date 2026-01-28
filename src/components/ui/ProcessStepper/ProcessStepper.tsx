const ProcessStepper = ({ steps }: { steps: string[] }) => {
  return (
    <div className="h-auto w-[100%]">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-1">
          <div>{`Step${i}`}</div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
};

export default ProcessStepper;
