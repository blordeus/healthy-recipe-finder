import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";
import ResponsiveImage from "../components/ResponsiveImage";
import RecipeMeta from "../components/recipes/RecipeMeta";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function RecipeDetailPage() {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  useDocumentTitle(recipe ? recipe.title : "Recipe");

  if (!recipe) {
    return (
      <section className="container-app py-16 md:py-20">
        <p className="text-neutral-600">Recipe not found.</p>
        <Link to="/recipes" className="btn-primary mt-6 inline-flex">
          Back to recipes
        </Link>
      </section>
    );
  }

  return (
    <section className="container-app py-16 md:py-20">
      <Link
        to="/recipes"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        ← Back to recipes
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="overflow-hidden rounded-[20px]">
          <ResponsiveImage
            small={recipe.image.small}
            large={recipe.image.large}
            alt={recipe.title}
            aspect="aspect-[4/3]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="section-title text-[2.5rem] leading-[1.1] tracking-[-0.02em] md:text-5xl">
            {recipe.title}
          </h1>

          <p className="mt-5 text-lg leading-[1.6] text-neutral-600">
            {recipe.overview}
          </p>

          <RecipeMeta
            servings={recipe.servings}
            prepMinutes={recipe.prepMinutes}
            cookMinutes={recipe.cookMinutes}
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
}