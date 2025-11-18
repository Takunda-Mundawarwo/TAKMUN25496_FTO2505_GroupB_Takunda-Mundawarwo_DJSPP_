import { useNavigate, useParams } from "react-router-dom";
import { useShowDetails } from "./hooks/useShowDetails.js";
import Loading from "../../components/Loading.js";
import Error from "../../components/Error.js";
import { Header } from "../../components/Header.js";
import { ShowOverview } from "./components/ShowOverview.js";
import { ShowSeasonSelector } from "./components/ShowSeasonSelector.js";

/**
 * The show details page component - displays show from id in url
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Route path=":id" element={<ShowDetails />} />
 *
 * @returns {JSX.Element} - The Show Details page
 */
export default function ShowDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isPending, error, data: showDetails } = useShowDetails(id!);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isPending) return <Loading />;

  if (error) return <Error message={error.message} />;

  if (id === undefined || showDetails === undefined) {
    return <Error message="There is nothing here..." />;
  }

  return (
    <>
      <header className="ShowDetailsHeader ">
        <button onClick={handleGoBack}>
          <svg
            viewBox="0 0 72 72"
            id="emoji"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <polyline points="46.1964,16.2048 26.8036,35.6651 46.1964,55.1254"></polyline>
          </svg>
          Back
        </button>

        <Header />
      </header>
      <ShowOverview />
      <ShowSeasonSelector />
    </>
  );
}
