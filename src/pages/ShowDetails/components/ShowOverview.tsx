import { useParams } from "react-router-dom";
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

  console.log("ShowOverview:" + showDetails!.title);
  if (showDetails)
    return (
      <>
        <div className="ShowOverview glass">
          <img
            src={showDetails.image}
            alt={`${showDetails.title} Cover Image`}
          />

          <div className="ShowDescription">
            <h2>{showDetails.title}</h2>

            <div className="PodcastSubdetails">
              <h4>
                {showDetails.seasons.length} Seasons |{" "}
                {showDetails.seasons.reduce((accumulator, currentValue) => {
                  return accumulator + currentValue.episodes.length;
                }, 0)}{" "}
                Episodes
              </h4>

              <h4>
                Last Updated: {new Date(showDetails.updated).toDateString()}
              </h4>
            </div>
            <p>
              {showDetails.description.length < 300
                ? showDetails.description
                : `${showDetails.description.slice(0, 300)}...`}
            </p>
            <ul className="genres">
              {showDetails.genres ? (
                showDetails.genres.map((genre) => {
                  return (
                    <li key={genre} className="genre">
                      {genre}
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </>
    );
}
