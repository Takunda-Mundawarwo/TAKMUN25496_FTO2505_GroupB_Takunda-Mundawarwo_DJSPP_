import { useNavigate, useParams } from "react-router-dom";
import { useShowDetails } from "./hooks/useShowDetails.js";
import Loading from "../../components/Loading.js";
import Error from "../../components/Error.js";
import { Header } from "../../components/Header.js";
import { ShowOverview } from "./components/ShowOverview.js";
import { SeasonPreview } from "./components/SeasonPreview.js";

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

  console.dir(showDetails);
  return (
    <>
      <header style={headerStyles}>
        <button onClick={handleGoBack} style={backBtnStyles}>
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--text-1)"
            width={36}
            height={36}
          >
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
          </svg>
        </button>

        <Header />
      </header>
      <ShowOverview />
      <SeasonPreview />
    </>
  );
}

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "baseline",
  width: "100%",
};

const backBtnStyles = {
  display: "flex",
  alignItems: "center",
  margin: "0 0 0 0.5rem",
};
