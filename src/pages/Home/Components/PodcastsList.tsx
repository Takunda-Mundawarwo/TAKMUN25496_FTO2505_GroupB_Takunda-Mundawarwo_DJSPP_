import { PodcastPreview } from "./PodcastPreview";
import { PodcastFilters } from "./PodcastFilters";
import { usePodcasts } from "../hooks/usePodcasts";
import { PaginationControls } from "./PaginationControls";
import { usePodcastFilters } from "../hooks/usePodcastFilters";
import { filterPodcasts } from "../utils/filterPodcasts";
import { PODCASTS_PER_PAGE } from "../../../constants/constants";
import "./PodcastsList.css";
import Error from "../../../components/Error.js";

/**
 * A component that displays the podcast preview list
 *
 * @component
 * @example <caption>Basic Usage</caption>
 *  <PodcastsList />
 *
 * @returns {JSX.Element} - A section element displaying the podcast list
 */
export function PodcastsList() {
  const { data: podcasts } = usePodcasts();
  const { searchQuery, genreFilter, sortOrder, page } = usePodcastFilters();

  const filteredPodcasts = filterPodcasts(
    podcasts!,
    searchQuery,
    genreFilter,
    sortOrder,
  );

  const totalPages = filteredPodcasts
    ? Math.ceil(filteredPodcasts.length / PODCASTS_PER_PAGE)
    : 1;
  const startIndex = page - 1;

  const currentPodcasts = filteredPodcasts
    ? filteredPodcasts.slice(startIndex, startIndex + PODCASTS_PER_PAGE)
    : [];

  return (
    <>
      <PodcastFilters />
      {currentPodcasts.length === 0 ? (
        <Error message="No results, try a different search." />
      ) : (
        <>
          <section className="podcast-list">
            {currentPodcasts.map((podcast) => (
              <PodcastPreview key={podcast.id} {...podcast} />
            ))}
          </section>
          <PaginationControls totalPages={totalPages} />
        </>
      )}
    </>
  );
}
