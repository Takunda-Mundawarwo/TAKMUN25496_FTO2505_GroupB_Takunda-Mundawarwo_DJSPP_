import { useParams } from "react-router-dom";
import { useShowDetails } from "../hooks/useShowDetails";
import EpisodePreview from "./EpisodePreview";
import "./SeasonDetails.css";

export function SeasonDetails(props: { seasonIndex: string }) {
  const { seasonIndex } = props;
  const { id } = useParams();
  const { data: showDetails } = useShowDetails(id!);

  const season = showDetails!.seasons[parseInt(seasonIndex) - 1];

  return (
    <div className="SeasonDetails">
      <div className="SeasonOverview glass">
        <img
          src={showDetails!.image}
          alt={`${showDetails!.title} Cover Image`}
        />
        <div className="SeasonDescription">
          <h2>
            Season {seasonIndex}: {season.title}
          </h2>
          <p>{season.episodes.length} Episodes </p>
        </div>
      </div>

      {season.episodes.map((episode, index) => {
        return (
          <EpisodePreview
            key={episode.episode}
            episodeIndex={index}
            seasonString={seasonIndex}
          />
        );
      })}
    </div>
  );
}
