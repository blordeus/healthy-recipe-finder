import { Clock3, CookingPot, Users } from "lucide-react";

export default function RecipeMeta({
  servings,
  prepMinutes,
  cookMinutes,
  className = "",
}) {
  const items = [
    {
      icon: Users,
      label: `Servings: ${servings}`,
    },
    {
      icon: Clock3,
      label: `Prep: ${prepMinutes} mins`,
    },
    {
      icon: CookingPot,
      label: `Cook: ${cookMinutes} min${cookMinutes === 1 ? "" : "s"}`,
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-900 ${className}`}>
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-1.5">
          <Icon size={15} strokeWidth={2.2} className="shrink-0" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}