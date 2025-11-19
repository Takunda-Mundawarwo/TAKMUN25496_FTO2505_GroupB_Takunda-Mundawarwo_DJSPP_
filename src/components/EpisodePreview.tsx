import { useParams } from "react-router-dom";
import { useShowDetails } from "../pages/ShowDetails/hooks/useShowDetails";
import { useFavourites } from "../hooks/useFavourites";
import { isObjectFavourite } from "../utils/isObjectFavourite";
import type {
  EpisodePreview,
  Favourite,
  FetchEpisodePreviewProps,
} from "../types/types";
import AddFavIcon from "../assets/add-favourite.svg";
import RemoveFavIcon from "../assets/favourited.svg";
import PlayIcon from "../assets/play.svg";
import "../styles/EpisodePreview.css";
// import PauseIcon from "../assets/pause.svg";
// import { useFavourites } from "../hooks/useFavourites";
// import { useAudio } from "../hooks/useAudio";

/**
 * The Episode preview for the show details page or Favourites page
 *
 * @component
 * @example <caption>Show Details Page Usage</caption>
 *  <EpisodePreview key={episode.episode} episodeIndex={index} seasonString={seasonNumber} />
 * @example <caption>Favourites Page Usage</caption>
 * <EpisodePreview key={episode.episode} episodeIndex={index} seasonString={seasonNumber} />
 *
 * @param {EpisodePreviewProps} - The required props for the episode preview component
 * @returns {JSX.Element} - The episode preview component
 */
export default function EpisodePreview(
  props: Favourite | FetchEpisodePreviewProps,
) {
  let episode: EpisodePreview;

  //Create Object with episode preview data
  if (isObjectFavourite(props)) {
    episode = props;
  } else {
    const { episodeIndex, seasonString } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: showDetails } = useShowDetails(id!);
    const season = parseInt(seasonString) - 1;

    episode = {
      ...showDetails!.seasons[season].episodes[episodeIndex],
      showTitle: showDetails!.title,
      season: seasonString,
      image: showDetails!.seasons[season].image,
      dateAdded: undefined,
    };
  }

  //Favourites Functionality
  const favourites = useFavourites((state) => state.favourites);
  const addFavourite = useFavourites((state) => state.addFavourite);
  const removeFavourite = useFavourites((state) => state.removeFavourite);
  const isFavourite = favourites.some(
    (favourite) => favourite.title === episode.title,
  );

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(episode.title);
    } else {
      addFavourite(episode);
    }
  };

  return (
    <div key={episode.episode} className="EpisodePreview glass">
      <div className="seasonImage">
        <img
          src={episode.image}
          alt={`${episode.showTitle} Season ${episode.season} Cover Image`}
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
          src={isFavourite ? RemoveFavIcon : AddFavIcon}
          alt={isFavourite ? "Favourited Episode" : "Add to Favourites"}
          onClick={toggleFavourite}
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
        <h4>
          {isObjectFavourite(episode)
            ? `${episode.showTitle}: Season ${episode.season}`
            : ""}
        </h4>
        <h4>
          {isObjectFavourite(episode)
            ? `Favourited: ${new Date(episode.dateAdded).toDateString()}`
            : ""}
        </h4>
      </div>
    </div>
  );
}

/**
 * @typedef { Object } EpisodePreviewProps
 * @property {number} episodeIndex - The index of the episode for the preview in the episodes array
 * @property {string} seasonString - The string representing the season number the episode originates from
 */
