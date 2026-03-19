export default function FilterMenu({
  options = [],
  selectedValue,
  onSelect = () => {},
}) {
  return (
    <div className="py-1">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <button
            key={option.label}
            type="button"
            role="menuitemradio"
            aria-checked={isSelected}
            onClick={() => onSelect(option.value)}
            className={[
              "flex w-full items-center px-4 py-2.5 text-left text-sm text-neutral-900 transition",
              "hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none",
              isSelected ? "bg-neutral-100 font-semibold" : "",
            ].join(" ")}
          >
            <span className="flex items-center gap-2">
              <span
                className={[
                  "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                  isSelected
                    ? "border-neutral-900 bg-neutral-900"
                    : "border-neutral-300 bg-white",
                ].join(" ")}
              >
                {isSelected ? (
                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                ) : null}
              </span>
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}