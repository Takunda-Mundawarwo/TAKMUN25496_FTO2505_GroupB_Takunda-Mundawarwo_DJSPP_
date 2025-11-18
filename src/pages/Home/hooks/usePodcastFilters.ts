import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type {
  usePodcastFiltersReturn,
  PodcastFilters,
} from "../../../types/types";

/**
 * Custom hook for getting and setting Podcast Filters using search parameters.
 *
 * @returns { usePodcastFiltersReturn } - The podcast filters and a setter function for the filters
 */
export function usePodcastFilters(): usePodcastFiltersReturn {
  const [searchParams, setSearchParams] = useSearchParams();

  let searchQuery = "";
  const searchQueryParam = searchParams.get("query");
  if (searchQueryParam) {
    searchQuery = searchQueryParam;
  }

  let genreFilter: "All" | number = "All";
  const genreFilterParam = searchParams.get("genre");
  if (genreFilterParam) {
    const genre = parseInt(genreFilterParam, 10);
    if (!isNaN(genre) && 0 < genre && genre < 10) {
      genreFilter = genre;
    }
  }

  const sortOrderOptions = ["newest", "a-z", "z-a"];
  let sortOrder = sortOrderOptions[0];
  const sortOrderParam = searchParams.get("sortOrder");
  if (sortOrderParam) {
    const sort = sortOrderParam;
    if (sortOrderOptions.includes(sort)) {
      sortOrder = sort;
    }
  }

  let page = 1;
  const pageParam = searchParams.get("page");
  if (pageParam) {
    const p = parseInt(pageParam, 10);
    if (!isNaN(p) && p > 1) {
      page = p;
    }
  }

  const setFilters = useCallback(
    (filters: PodcastFilters) => {
      {
        if (filters.searchQuery !== undefined) {
          searchParams.set("page", "1");
          searchParams.set(
            "query",
            filters.searchQuery ? filters.searchQuery : "",
          );
          setSearchParams(searchParams);
        }

        if (filters.genreFilter) {
          searchParams.set("page", "1");
          searchParams.set("genre", filters.genreFilter);
          setSearchParams(searchParams);
        }

        if (filters.sortOrder) {
          searchParams.set("page", "1");
          searchParams.set("sortOrder", filters.sortOrder);
          setSearchParams(searchParams);
        }

        if (filters.page) {
          searchParams.set("page", filters.page);
          setSearchParams(searchParams);
        }
      }
    },
    [searchParams, setSearchParams],
  );

  return {
    searchQuery,
    genreFilter,
    sortOrder,
    page,
    setFilters,
  };
}
