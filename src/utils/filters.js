export function filterRecipes(recipes, { searchValue, prepValue, cookValue }) {
  const normalizedSearch = searchValue.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesSearch =
      normalizedSearch.length === 0
        ? true
        : recipe.title.toLowerCase().includes(normalizedSearch) ||
          recipe.ingredients.join(" ").toLowerCase().includes(normalizedSearch);

    const matchesPrep =
      prepValue === null ? true : recipe.prepMinutes <= prepValue;

    const matchesCook =
      cookValue === null ? true : recipe.cookMinutes <= cookValue;

    return matchesSearch && matchesPrep && matchesCook;
  });
}