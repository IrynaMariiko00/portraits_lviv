import { useState } from "react";
import CalendarIcon from "~/assets/icons/CalendarIcon";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date>();

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-transparent border-b border-[var(--color-border)] py-3 px-1 flex justify-between items-center"
      >
        <span
          className={
            selected
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-border-dark)]"
          }
        >
          {selected ? format(selected, "PPP") : "Select a date..."}
        </span>

        <CalendarIcon />
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[110%] left-0 z-50 p-2 glass-card bg-[var(--color-bg-calendar)]">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                setSelected(date);
                setIsOpen(false);
              }}
              modifiersStyles={{
                selected: {
                  backgroundColor: "var(--color-blue-light)",
                  color: "white",
                  borderRadius: "8px",
                },
              }}
              styles={{
                // 2. ЗМЕНШУЄМО ШРИФТИ
                caption: {
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: "white",
                },
                head_cell: {
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.6rem",
                  fontWeight: "normal",
                },
                day: {
                  fontSize: "0.75rem",
                  width: "32px", // Зменшуємо ширину клітинки
                  height: "32px", // Зменшуємо висоту клітинки
                },
                nav_button: {
                  width: "24px",
                  height: "24px",
                  color: "white",
                },
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
