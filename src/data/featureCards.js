import wholeFoodIcon from "../assets/images/icon-whole-food-recipes.svg";
import fussIcon from "../assets/images/icon-minimum-fuss.svg";
import searchIcon from "../assets/images/icon-search-in-seconds.svg";

/**
 * Feature cards data for the HomePage
 * Centralized configuration for easy maintenance and updates
 */
export const FEATURE_CARDS = [
  {
    id: "whole-food-recipes",
    title: "Whole-food recipes",
    text: "Each dish uses everyday, unprocessed ingredients.",
    icon: wholeFoodIcon,
  },
  {
    id: "minimum-fuss",
    title: "Minimum fuss",
    text: "All recipes are designed to make eating healthy quick and easy.",
    icon: fussIcon,
  },
  {
    id: "search-in-seconds",
    title: "Search in seconds",
    text: "Filter by name or ingredient and jump straight to the recipe you need.",
    icon: searchIcon,
  },
];
