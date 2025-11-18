import type { Podcast } from "../../../types/types";

/**
 * Filters an array of podcasts according to the searchParams
 *
 * @param {Array<Podcast>} podcasts - The array of all available podcasts
 * @param {URLSearchParams} searchParams - The current searchParams
 * @returns {Array<Podcast>} - The filtered array of podcasts
 */
export function filterPodcasts(
  podcasts: Podcast[],
  searchQuery: string,
  genreFilter: "All" | number,
  sortOrder: string,
): Podcast[] {
  const podcastsToFilter = podcasts;

  let searchedPodcasts;
  if (searchQuery) {
    console.log("filtering search with" + searchQuery + " object:");
    searchedPodcasts = podcastsToFilter.filter((podcast) => {
      return podcast.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
    });
  } else {
    searchedPodcasts = podcastsToFilter;
  }

  let genreFilteredPodcasts;
  if (genreFilter && genreFilter !== "All") {
    genreFilteredPodcasts = searchedPodcasts.filter((podcast) => {
      return podcast.genres.includes(genreFilter);
    });
  } else {
    genreFilteredPodcasts = searchedPodcasts;
  }

  let sortedPodcasts;
  if (sortOrder === "a-z") {
    sortedPodcasts = genreFilteredPodcasts.sort((podA, podB) => {
      return podA.title.localeCompare(podB.title);
    });
  } else if (sortOrder === "z-a") {
    sortedPodcasts = genreFilteredPodcasts.sort((podA, podB) => {
      return podB.title.localeCompare(podA.title);
    });
  } else {
    sortedPodcasts = genreFilteredPodcasts.sort((podA, podB) => {
      return (
        new Date(podB.updated).getTime() - new Date(podA.updated).getTime()
      );
    });
  }

  return sortedPodcasts;
}
