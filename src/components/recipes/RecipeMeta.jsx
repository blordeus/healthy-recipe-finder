import ServingsIcon from "../../assets/images/icon-servings.svg";
import PrepTimeIcon from "../../assets/images/icon-prep-time.svg";
import CookTimeIcon from "../../assets/images/icon-cook-time.svg";

export default function RecipeMeta({
  servings,
  prepMinutes,
  cookMinutes,
  className = "",
}) {
  const items = [
    {
      icon: ServingsIcon,
      label: `Servings: ${servings}`,
    },
    {
      icon: PrepTimeIcon,
      label: `Prep: ${prepMinutes} mins`,
    },
    {
      icon: CookTimeIcon,
      label: `Cook: ${cookMinutes} min${cookMinutes === 1 ? "" : "s"}`,
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-900 ${className}`}>
      {items.map(({ icon, label }) => (
        <div key={label} className="flex items-center gap-1.5">
          <img src={icon} alt={label} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}