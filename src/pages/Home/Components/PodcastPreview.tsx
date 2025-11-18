import { Link } from "react-router-dom";
import { genres } from "../../../constants/genreData";
import type { Podcast } from "../../../types/types";
import "./PodcastPreview.css";

/**
 * A component that displays a podcast's overview
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <PodcastPreview key={podcast.id} {...podcast} />
 *
 * @param {Podcast} props
 * @returns {JSX.Element} - A Link element to the podcast's details page, wrapping an article element
 * containing podcast preview information.
 */
export default function PodcastPreview(podcast: Podcast) {
  const updatedDate = new Date(podcast.updated);
  const genreIDs = podcast.genres;

  return (
    <Link to={`/podcasts/${podcast.id}`}>
      <article className="podcast glass">
        <img
          src={podcast.image}
          alt={`${podcast.title} Cover Image`}
          className="image"
          loading="lazy"
        />
        <h2>{podcast.title}</h2>
        <h4>
          {podcast.seasons} Seasons | Updated: {updatedDate.toDateString()}
        </h4>

        <ul className="genres">
          {genreIDs.map((genreID) => {
            const genre = genres.find((genre) => genre.id == genreID);
            return (
              <li key={genreID} className="genre">
                {genre ? genre.title : genreID}
              </li>
            );
          })}
        </ul>
      </article>
    </Link>
  );
}
