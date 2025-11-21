import { useFavourites } from "../hooks/useFavourites";
import { useAudioStore } from "../hooks/useAudio";
import { isObjectFavourite } from "../utils/isObjectFavourite";
import { formatTime } from "../utils/formatTime";
import type { AudioHistoryItem, EpisodePreviewData } from "../types/types";
import AddFavIcon from "../assets/add-favourite.svg";
import RemoveFavIcon from "../assets/favourited.svg";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import "../styles/EpisodePreview.css";

/**
 * The Episode preview for the show details page or Favourites page
 *
 * @component
 * @example <caption>Show Details Page Usage</caption>
 *  <EpisodePreview key={episode.episode} episode={} />
 * @example <caption>Favourites Page Usage</caption>
 * <EpisodePreview key={favourite.title} ...favourite />
 *
 * @returns {JSX.Element} - The episode preview component
 */
export default function EpisodePreview(props: EpisodePreviewData) {
  const episode = props;
  console.log("EpisodePreview:" + episode.title);

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

  const isPlaying = useAudioStore((state) => state.isPlaying);
  const source = useAudioStore((state) => state.source);
  const setSource = useAudioStore((state) => state.setSource);
  const togglePlay = useAudioStore((state) => state.togglePlay);
  const history = useAudioStore((state) => state.history);

  let isEpisodePlaying = false;
  if (isPlaying && source && source.title === episode.title) {
    isEpisodePlaying = true;
  }

  let episodeHistory: false | AudioHistoryItem;

  if (history[episode.title]) {
    episodeHistory = history[episode.title];
  } else {
    episodeHistory = false;
  }

  const handlePlayToggle = () => {
    if (!source || source.title !== episode.title) {
      setSource(episode);
    } else {
      togglePlay();
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
          src={isEpisodePlaying ? PauseIcon : PlayIcon}
          alt={isEpisodePlaying ? "Pause episode" : "Play episode"}
          className="playOverlay"
          loading="lazy"
          onClick={handlePlayToggle}
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
        <h4>
          {!episodeHistory
            ? ""
            : episodeHistory.finished
              ? "Finished"
              : `${formatTime(episodeHistory.playedTill)} / ${formatTime(episodeHistory.duration)}`}
        </h4>
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
