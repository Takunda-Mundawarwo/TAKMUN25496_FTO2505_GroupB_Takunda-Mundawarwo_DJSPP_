import { useFavourites } from "../../../hooks/useFavourites";
import type { Favourite, FavouriteShowGroups } from "../../../types/types";

/**
 * A custom hook for using the grouped & sorted favourites on the favourites page
 *
 * @returns {Record<string, Favourite[]>} - An object indexing favourites by their show titles
 */
export const useGroupedFavourites = () => {
  const favourites = useFavourites((state) => state.favourites);
  const sort = useFavourites((state) => state.sort);

  const showGroups: FavouriteShowGroups = {};

  favourites.forEach((favourite) => {
    if (!showGroups[favourite.showTitle]) showGroups[favourite.showTitle] = [];
    showGroups[favourite.showTitle].push(favourite);
  });

  const sortFn = (favA: Favourite, favB: Favourite) => {
    switch (sort) {
      case "a-z":
        return favA.title.localeCompare(favB.title);
      case "z-a":
        return favB.title.localeCompare(favA.title);
      case "newest":
        return (
          new Date(favB.dateAdded).getTime() -
          new Date(favA.dateAdded).getTime()
        );
      case "oldest":
        return (
          new Date(favA.dateAdded).getTime() -
          new Date(favB.dateAdded).getTime()
        );
    }
  };

  Object.keys(showGroups).forEach((show) => {
    showGroups[show] = showGroups[show].slice().sort(sortFn);
  });

  return showGroups;
};
