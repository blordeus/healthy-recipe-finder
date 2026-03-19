import recipes from "../data/recipes";
import RecipeCard from "../components/recipes/RecipeCard";

export default function RecipesPage() {
  return (
    <section className="container-app page-section">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="section-title text-[2.5rem] leading-[1.1] tracking-[-0.02em] md:text-6xl">
          Explore our simple, healthy recipes
        </h1>
        <p className="mt-5 text-lg leading-[1.6] text-neutral-600">
          Discover eight quick, whole-food dishes that fit real-life schedules and
          taste amazing.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}