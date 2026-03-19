export default function ResponsiveImage({
  small,
  large,
  alt,
  className = "",
  aspect = "aspect-[16/9]",
}) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={large} />
      <img
        src={small}
        alt={alt}
        className={`w-full object-cover ${aspect} ${className}`}
        loading="lazy"
      />
    </picture>
  );
}