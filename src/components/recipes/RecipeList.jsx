export default function RecipeList({ items = [] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg leading-[1.6] text-neutral-600">
          <span className="mt-[0.55rem] inline-block h-0 w-0 shrink-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-neutral-900 border-t-transparent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}