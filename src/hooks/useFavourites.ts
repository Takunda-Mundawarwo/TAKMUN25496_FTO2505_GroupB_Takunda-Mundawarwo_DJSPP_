import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  FavouritesState,
  FavouritesSortOption,
  EpisodePreview,
} from "../types/types";

/**
 * A custom hook for using the Favourites store
 *
 * @returns {UseBoundStore<StoreApi<FavouritesState>>} - The store API to access the Favourites state
 */
export const useFavourites = create<FavouritesState>()(
  persist(
    (set) => ({
      favourites: [],
      sort: "a-z",

      addFavourite: (favourite: EpisodePreview) =>
        set((state) => ({
          favourites: [
            ...state.favourites,
            { ...favourite, dateAdded: new Date() },
          ],
        })),

      removeFavourite: (title: string) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (favourite) => favourite.title !== title,
          ),
        })),

      setSort: (sort: FavouritesSortOption) => set({ sort }),
    }),
    {
      name: "favourites",
    },
  ),
);
