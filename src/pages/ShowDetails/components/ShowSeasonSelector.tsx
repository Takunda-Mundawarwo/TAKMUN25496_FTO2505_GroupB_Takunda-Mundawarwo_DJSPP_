import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShowDetails } from "../hooks/useShowDetails";
import { SeasonDetails } from "./SeasonDetails";

/**
 * The Season espisodes section for the show details page
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <SeasonSelector />
 *
 * @returns {JSX.Element} - The input for selecting a season to view and the dropdown showing that season
 */
export function ShowSeasonSelector() {
  const [season, setSeason] = useState("1");
  const { id } = useParams();
  const { data: showDetails } = useShowDetails(id!);

  if (showDetails!.seasons)
    return (
      <>
        <div style={selectorStyles}>
          <h2>Episodes</h2>
          <select
            name="seasonSelector"
            className="search"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            {showDetails!.seasons.map((season) => {
              return (
                <option key={season.season} value={season.season}>
                  Season {season.season}
                </option>
              );
            })}
          </select>
        </div>
        <SeasonDetails seasonIndex={season} />
      </>
    );
}

const selectorStyles = {
  margin: "2rem auto",
  width: "80%",
  display: "flex",
  justifyContent: "space-between",
  color: "var(--text-1)",
};
