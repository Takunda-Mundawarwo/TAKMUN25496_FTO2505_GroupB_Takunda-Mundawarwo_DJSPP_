import Error from "../../components/Error.js";
import Loading from "../../components/Loading.js";
import { usePodcasts } from "../../hooks/usePodcasts.js";
import { Carousel } from "./Components/Carousel.js";
/**
 * A component that displays the podcast app's landing page, with the ability to search for podcasts,
 * filter podcasts by genre and sort podcasts.
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Home />
 *
 * @returns {JSX.Element} - The Home page
 */
export default function Home() {
  const { isPending, error } = usePodcasts();

  if (isPending) return <Loading />;

  if (error) return <Error message={error.message} />;

  return <Carousel />;
}
