import { useFavourites } from "../../hooks/useFavourites";
import type { FavouritesSortOption } from "../../types/types";
import { ShowGroup } from "./components/ShowGroup";
import { useGroupedFavourites } from "./hooks/useGroupedFavourites";
import "./components/Favourites.css";

/**
 * The Favourites page component
 *
 */
export function Favourites() {
  const showGroups = useGroupedFavourites();
  const sort = useFavourites((state) => state.sort);
  const setSort = useFavourites((state) => state.setSort);

  return (
    <>
      <div className="FavouritesSorter">
        <h4>Sort Order:</h4>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as FavouritesSortOption)}
          className="search"
        >
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="newest">Newest Favourites</option>
          <option value="oldest">Oldest Favourites</option>
        </select>
      </div>

      {Object.entries(showGroups).map(([showTitle, favourites]) => {
        return (
          <ShowGroup
            key={showTitle}
            title={showTitle}
            favourites={favourites}
          />
        );
      })}
    </>
  );
}
