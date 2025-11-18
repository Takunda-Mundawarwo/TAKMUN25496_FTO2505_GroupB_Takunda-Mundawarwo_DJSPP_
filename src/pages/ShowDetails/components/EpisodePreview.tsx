import { useParams } from "react-router-dom";
import AddFavIcon from "../../../assets/add-favourite.svg";
import PlayIcon from "../../../assets/play.svg";
import { useShowDetails } from "../hooks/useShowDetails";
import "./EpisodePreview.css";
// import RemoveFavIcon from "../../../assets/favourited.svg";
// import PauseIcon from "../assets/pause.svg";
// import { useFavourites } from "../hooks/useFavourites";
// import { useAudio } from "../hooks/useAudio";

export default function EpisodePreview(props: {
  episodeIndex: number;
  seasonString: string;
}) {
  const { episodeIndex, seasonString } = props;
  const { id } = useParams();
  const { data: showDetails } = useShowDetails(id!);
  const season = parseInt(seasonString) - 1;

  const episode = showDetails!.seasons[season].episodes[episodeIndex];

  return (
    <div key={episode.episode} className="EpisodePreview glass">
      <div className="seasonImage">
        <img
          src={showDetails!.image}
          alt={`${showDetails!.title} Cover Image`}
          className="seasonImg"
          loading="lazy"
        />
        <img
          src={PlayIcon}
          alt="Play Episode"
          className="playOverlay"
          loading="lazy"
        />
      </div>
      <div>
        <h2>
          Episode {episode.episode}: {episode.title ? episode.title : ""}
        </h2>
        <img
          src={AddFavIcon}
          alt={"Add to Favourites"}
          className="favouriteIcon"
          loading="lazy"
          width={24}
          height={24}
        />
        <p>
          {episode.description === undefined
            ? ""
            : episode.description.length < 200
              ? episode.description
              : `${episode.description.slice(0, 200)}...`}
        </p>
      </div>
    </div>
  );
}
