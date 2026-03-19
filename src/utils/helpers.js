export function getRecipeBySlug(recipes, slug) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getRelatedRecipes(recipes, currentSlug, limit = 3) {
  return recipes.filter((recipe) => recipe.slug !== currentSlug).slice(0, limit);
}