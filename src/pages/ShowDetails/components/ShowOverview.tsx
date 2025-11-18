import { useParams } from "react-router-dom";
import { genres } from "../../../constants/genreData";
import { useShowDetails } from "../hooks/useShowDetails";
import "./ShowOverview.css";

/**
 * The Overview for the show on the show details page
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <ShowOverview />
 *
 * @returns { JSX.Element} - An overview of the podcast
 */
export function ShowOverview() {
  const { id } = useParams();
  const { data: showDetails } = useShowDetails(id!);

  if (showDetails)
    return (
      <div className="PodcastOverview glass">
        <div className="PodcastDescription">
          <img
            src={showDetails.image}
            alt={`${showDetails.title} Cover Image`}
          />

          <div>
            <h2>{showDetails.title}</h2>
            <p>
              {showDetails.description.length < 300
                ? showDetails.description
                : `${showDetails.description.slice(0, 300)}...`}
            </p>
          </div>
        </div>

        <div className="PodcastDetails">
          <ul className="genres">
            {showDetails.genres ? (
              showDetails.genres.map((genreID) => {
                const genre = genres.find((genre) => genre.id == genreID);
                return (
                  <li key={genreID} className="genre">
                    {genre ? genre.title : genreID}
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>

          <h4>
            {showDetails.seasons.length} Seasons |{" "}
            {showDetails.seasons.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.episodes.length;
            }, 0)}{" "}
            Episodes
          </h4>

          <h4>Last Updated: {new Date(showDetails.updated).toDateString()}</h4>
        </div>
      </div>
    );
}
