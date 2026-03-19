import { Link } from "react-router-dom";
import RecipeMeta from "./RecipeMeta";

export default function RecipeCard({ recipe }) {
  return (
    <article className="card-surface flex h-full flex-col rounded-2xl p-1.5 transition-shadow duration-200 hover:shadow-md">
      <div className="overflow-hidden rounded-[18px]">
        <img
          src={recipe.image.small}
          alt={recipe.title}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 md:px-4 md:pb-4">
        <h3
          className="line-clamp-2 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {recipe.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-base leading-[1.55] text-neutral-600">
          {recipe.overview}
        </p>

        <RecipeMeta
          servings={recipe.servings}
          prepMinutes={recipe.prepMinutes}
          cookMinutes={recipe.cookMinutes}
          className="mt-4"
        />

        <Link
          to={`/recipes/${recipe.slug}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
}