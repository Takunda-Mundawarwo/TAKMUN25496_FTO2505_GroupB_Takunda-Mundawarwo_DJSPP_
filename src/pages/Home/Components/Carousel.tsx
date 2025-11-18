import { useMemo, useEffect, useRef } from "react";
import PodcastPreview from "./PodcastPreview";
import { usePodcasts } from "../../../hooks/usePodcasts";
import getRecommendedPodcasts from "../utils/getRecommendedPodcasts";
import "./Carousel.css";

/**
 * Returns a carousel of Recommended Podcasts
 * @returns {JSX.Element} - The recommended podcasts carousel
 */
export function Carousel() {
  console.log("mounting carousel");
  const { data: podcasts } = usePodcasts();

  const carouselPodcasts = useMemo(() => {
    return getRecommendedPodcasts(podcasts!);
  }, [podcasts]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const repeatedPodcasts = [
    ...carouselPodcasts,
    ...carouselPodcasts,
    ...carouselPodcasts,
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const middleScrollPosition = carousel.scrollWidth / 3;
      carousel.scrollLeft = middleScrollPosition;
    }
  }, []);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth;
    const third = scrollWidth / 3;

    if (scrollLeft >= third * 2) {
      carousel.scrollLeft = scrollLeft - third;
    } else if (scrollLeft <= third * 0.5) {
      carousel.scrollLeft = scrollLeft + third;
    }
  };

  return (
    <section className="carouselContainer">
      <h2>Recommended Podcasts</h2>

      <div
        className="carousel hideScrollBar"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {repeatedPodcasts.map((podcast, index) => (
          <PodcastPreview key={podcast.id + index.toString()} {...podcast} />
        ))}
      </div>
    </section>
  );
}
