import "react-day-picker/dist/style.css";
import Calendar from "../Calendar/Calendar";

const CustomDatePicker = ({
  label,
  subLabel,
}: {
  label: string;
  subLabel?: string;
}) => {
  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: var(--color-blue-light, #0070f3);
      --rdp-background-color: rgba(0, 112, 243, 0.2);
      margin: 0;
    }
    .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) {
      background-color: var(--rdp-accent-color);
      border-radius: 8px;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }
  `;

  return (
    <div className="flex flex-col gap-2 relative">
      <style>{css}</style>

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
