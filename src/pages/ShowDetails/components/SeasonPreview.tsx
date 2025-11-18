import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShowDetails } from "../hooks/useShowDetails";
import "./SeasonPreview.css";
import EpisodePreview from "./EpisodePreview";

/**
 * The Season section with episodes for the show details page
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <SeasonSelector />
 *
 * @returns {JSX.Element} - The input for selecting a season to view and the season overview and episodes
 */
export function SeasonPreview() {
  const { id } = useParams();
  const { data: showDetails } = useShowDetails(id!);
  const [seasonNumber, setSeasonNumber] = useState("1");
  const season = showDetails!.seasons[parseInt(seasonNumber) - 1];

  return (
    <div className="SeasonPreview">
      <div className="SeasonHeader">
        <select
          name="seasonSelector"
          className="search"
          value={seasonNumber}
          onChange={(e) => setSeasonNumber(e.target.value)}
        >
          {showDetails!.seasons.map((season) => {
            return (
              <option key={season.season} value={season.season}>
                Season {season.season}
              </option>
            );
          })}
        </select>
        <div className="SeasonTitle">
          <h2>{season.title}</h2>
          <p>{season.episodes.length} Episodes </p>
        </div>
      </div>

      {season.episodes.map((episode, index) => {
        return (
          <EpisodePreview
            key={episode.episode}
            episodeIndex={index}
            seasonString={seasonNumber}
          />
        );
      })}
    </div>
  );
}
