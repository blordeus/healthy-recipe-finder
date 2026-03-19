export default function ResponsiveImage({
  small,
  large,
  alt,
  className = "",
  aspect = "aspect-[16/9]",
  priority = false,
}) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={large} />
      <img
        src={small}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full object-cover ${aspect} ${className}`}
      />
    </picture>
  );
}