import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { usePodcasts } from "./hooks/usePodcasts";
import { Carousel } from "./components/Carousel";
import { PodcastsList } from "./components/PodcastsList";
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
  const { isPending, error, data: podcasts } = usePodcasts();

  if (isPending) return <Loading />;

  if (error) return <Error message={error.message} />;

  if (podcasts.length === 0) {
    return <Error message="Nothing was found here..." />;
  }

  return (
    <>
      <Carousel />
      <PodcastsList />
    </>
  );
}
