export default function BulletList({ items = [], compact = false }) {
  return (
    <ul className={compact ? "space-y-3" : "space-y-6"}>
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-4">
          <span className="mt-[0.55rem] inline-block h-0 w-0 shrink-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-neutral-900 border-t-transparent" />
          <div>
            <h3
              className="text-[1.5rem]md:text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-neutral-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-[1.7] text-neutral-600 md:text-lg">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}