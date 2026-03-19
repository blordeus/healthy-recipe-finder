import rawRecipes from "./data.json";
import recipeImages from "./recipeImages";

const recipes = rawRecipes.map((recipe) => ({
  ...recipe,
  image: recipeImages[recipe.slug],
}));

export default recipes;