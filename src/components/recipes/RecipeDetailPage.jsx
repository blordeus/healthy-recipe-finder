import { Link, Navigate, useParams } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeMeta from "../components/recipes/RecipeMeta";
import RecipeCard from "../components/recipes/RecipeCard";
import RecipeList from "../components/recipes/RecipeList";
import { getRecipeBySlug, getRelatedRecipes } from "../utils/helpers";

export default function RecipeDetailPage() {
  const { slug } = useParams();

  const recipe = getRecipeBySlug(recipes, slug);
  const relatedRecipes = getRelatedRecipes(recipes, slug, 3);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  return (
    <div className="page-section">
      <section className="container-app">
        <div className="mb-8 text-sm text-neutral-600 md:mb-10">
          <Link to="/recipes" className="transition hover:text-neutral-900">
            Recipes
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">{recipe.title}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={recipe.image?.large}
              alt={recipe.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <h1 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">
              {recipe.title}
            </h1>

            <p className="mt-5 text-lg leading-[1.6] text-neutral-600">
              {recipe.overview}
            </p>

            <RecipeMeta
              servings={recipe.servings}
              prepMinutes={recipe.prepMinutes}
              cookMinutes={recipe.cookMinutes}
              className="mt-6"
            />

            <div className="mt-8">
              <h2
                className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-neutral-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ingredients:
              </h2>

              <div className="mt-4">
                <RecipeList items={recipe.ingredients} />
              </div>
            </div>

            <div className="mt-8">
              <h2
                className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-neutral-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Instructions:
              </h2>

              <div className="mt-4">
                <RecipeList items={recipe.instructions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 border-t border-neutral-200 pt-16 md:mt-24 md:pt-20">
        <div className="container-app">
          <h2 className="section-title text-[2rem] leading-[1.1] tracking-[-0.02em] md:text-[2.5rem]">
            More recipes
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedRecipes.map((relatedRecipe) => (
              <RecipeCard key={relatedRecipe.slug} recipe={relatedRecipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}