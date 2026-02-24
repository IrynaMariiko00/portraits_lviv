import "react-day-picker/dist/style.css";
import Calendar from "../Calendar/Calendar";

const CustomDatePicker = ({
  label,
  subLabel,
}: {
  label: string;
  subLabel?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray flex justify-between items-center">
        {label}
        {subLabel && (
          <span className="text-[0.65rem] normal-case italic opacity-40">
            {subLabel}
          </span>
        )}
      </label>
      <Calendar />
    </div>
  );
};

export default CustomDatePicker;
