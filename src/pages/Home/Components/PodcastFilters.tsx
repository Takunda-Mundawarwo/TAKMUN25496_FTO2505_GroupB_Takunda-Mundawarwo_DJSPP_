import { usePodcastFilters } from "../hooks/usePodcastFilters.ts";
import { genres } from "../../../constants/genreData.ts";

/**
 * The Podcast filtering and search options for the home page
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <PodcastFilters />
 *
 * @returns {JSX.Element} - The inputs for filters
 */
export function PodcastFilters() {
  const { searchQuery, genreFilter, sortOrder, setFilters } =
    usePodcastFilters();

  return (
    <div className="podcastListHeader">
      <h2>All Podcasts</h2>
      <div className="filters">
        <input
          name="search"
          type="search"
          placeholder="Search..."
          className={`search glass`}
          value={searchQuery}
          onChange={(e) => setFilters({ searchQuery: e.target.value })}
        />
        <select
          name="genreFilter"
          className={`search glass`}
          value={genreFilter}
          onChange={(e) => setFilters({ genreFilter: e.target.value })}
        >
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
        <select
          name="sortOrder"
          className={`search glass`}
          value={sortOrder}
          onChange={(e) => setFilters({ sortOrder: e.target.value })}
        >
          <optgroup>
            <option className="glass" value="newest">
              Newest First
            </option>
            <option className="glass" value="a-z">
              Sort A-Z
            </option>
            <option className="glass" value="z-a">
              Sort Z-A
            </option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
