import { ChevronDown } from "lucide-react";

export default function FilterDropdown({
  label,
  value,
  isOpen = false,
  onToggle = () => {},
  children,
  menuId,
}) {
  return (
    <div className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={onToggle}
        className={[
          "flex h-[44px] w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 text-sm font-medium text-neutral-900 transition duration-200",
          isOpen
            ? "border-neutral-900 shadow-[0_0_0_2px_rgba(22,58,52,0.12)]"
            : "border-neutral-200 hover:border-neutral-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
          "md:min-w-[148px]",
        ].join(" ")}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
      >
        <span>{value || label}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-[calc(100%+8px)] z-20 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md md:min-w-[176px]"
        >
          {children}
        </div>
      )}
    </div>
  );
}