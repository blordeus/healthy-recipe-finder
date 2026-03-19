import { Search } from "lucide-react";

export default function SearchInput({
  value = "",
  onChange = () => {},
  placeholder = "Search by name or ingredient...",
}) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600"
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-base h-[44px] pl-11 pr-4"
      />
    </div>
  );
}