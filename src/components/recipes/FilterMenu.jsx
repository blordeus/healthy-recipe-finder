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
            onClick={() => onSelect(option.value)}
            className={[
              "flex w-full items-center px-4 py-2.5 text-left text-sm text-neutral-900 transition hover:bg-neutral-100",
              isSelected ? "bg-neutral-100 font-semibold" : "",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}