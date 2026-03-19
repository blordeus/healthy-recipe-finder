import { ChevronDown } from "lucide-react";

export default function FilterDropdown({
  label,
  value,
  isOpen = false,
  onToggle = () => {},
  children,
}) {
  return (
    <div className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={onToggle}
        className={[
          "flex h-[44px] w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 text-sm font-medium text-neutral-900 transition",
          isOpen ? "border-neutral-900 shadow-[0_0_0_2px_rgba(22,58,52,0.12)]" : "border-neutral-200",
          "md:min-w-[148px]",
        ].join(" ")}
        aria-expanded={isOpen}
      >
        <span>{value || label}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md md:min-w-[176px]">
          {children}
        </div>
      )}
    </div>
  );
}