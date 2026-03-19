import { useState } from 'react';

/**
 * FeatureCard Component
 * 
 * Displays a feature item with an icon, title, and description.
 * Optimized for performance and accessibility.
 * 
 * @param {string} title - The card title
 * @param {string} text - The description text
 * @param {string} icon - The icon image source URL
 */
export default function FeatureCard({ title, text, icon }) {
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <article className="max-w-sm text-center md:text-left">
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm md:mx-0"
        role="img"
        aria-label={`${title} icon`}
      >
        {!imgError ? (
          <img 
            src={icon} 
            alt={`${title} icon`}
            width={24}
            height={24}
            loading="lazy"
            onError={handleImgError}
          />
        ) : (
          <span className="text-neutral-400" aria-hidden="true">
            •
          </span>
        )}
      </div>
      <h3 className="mt-5 section-title text-[2rem] leading-[1.15] tracking-[-0.02em]">
        {title}
      </h3>
      <p className="mt-4 text-lg leading-[1.55] text-neutral-600">
        {text}
      </p>
    </article>
  );
}
