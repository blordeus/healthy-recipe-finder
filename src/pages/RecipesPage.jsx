import { useEffect, useRef, useState } from "react";
import recipes from "../data/recipes";
import RecipeCard from "../components/recipes/RecipeCard";
import SearchInput from "../components/recipes/SearchInput";
import FilterDropdown from "../components/recipes/FilterDropdown";
import FilterMenu from "../components/recipes/FilterMenu";

const timeOptions = [
  { label: "0 minutes", value: 0 },
  { label: "5 minutes", value: 5 },
  { label: "10 minutes", value: 10 },
  { label: "15 minutes", value: 15 },
  { label: "20 minutes", value: 20 },
  { label: "Clear", value: null },
];

export default function RecipesPage() {
  const [isPrepOpen, setIsPrepOpen] = useState(false);
  const [isCookOpen, setIsCookOpen] = useState(false);
  const [prepValue, setPrepValue] = useState(null);
  const [cookValue, setCookValue] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const filtersRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setIsPrepOpen(false);
        setIsCookOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const prepLabel =
    prepValue === null ? "Max Prep Time" : `${prepValue} minutes`;
  const cookLabel =
    cookValue === null ? "Max Cook Time" : `${cookValue} minutes`;

  return (
    <section className="page-section">
      <div className="container-app">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-6xl">
            Explore our simple, healthy recipes
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.6] text-neutral-600 md:text-lg">
            Discover eight quick, whole-food dishes that fit real-life schedules and
            taste amazing. Use the search bar to find a recipe by name or ingredient,
            or simply scroll the list and let something delicious catch your eye.
          </p>
        </div>

        <div
          ref={filtersRef}
          className="mt-10 flex flex-col gap-4 md:mt-12 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <FilterDropdown
              label="Max Prep Time"
              value={prepLabel}
              isOpen={isPrepOpen}
              onToggle={() => {
                setIsPrepOpen((prev) => !prev);
                setIsCookOpen(false);
              }}
            >
              <FilterMenu
                options={timeOptions}
                selectedValue={prepValue}
                onSelect={(value) => {
                  setPrepValue(value);
                  setIsPrepOpen(false);
                }}
              />
            </FilterDropdown>

            <FilterDropdown
              label="Max Cook Time"
              value={cookLabel}
              isOpen={isCookOpen}
              onToggle={() => {
                setIsCookOpen((prev) => !prev);
                setIsPrepOpen(false);
              }}
            >
              <FilterMenu
                options={timeOptions}
                selectedValue={cookValue}
                onSelect={(value) => {
                  setCookValue(value);
                  setIsCookOpen(false);
                }}
              />
            </FilterDropdown>
          </div>

          <div className="w-full md:max-w-[320px]">
            <SearchInput
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}