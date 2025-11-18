import type { Podcast } from "../../../types/types";

/**
 * Gets an Array of recommnded Podcasts
 * @param {Array<Podcast>} - The array of all podcasts
 * @returns {Array<Podcast>} - The array of recommended podcasts
 */
export default function getRecommendedPodcasts(podcasts: Podcast[]): Podcast[] {
  const recommended = [];
  const gap = Math.floor(podcasts.length / 10);
  const startIndex = Math.floor(Math.random() * gap);

  for (let i = 0; i < 10 && i < podcasts.length; i++) {
    const index = startIndex + i * gap;
    recommended.push(podcasts[index]);
  }

  return recommended;
}
