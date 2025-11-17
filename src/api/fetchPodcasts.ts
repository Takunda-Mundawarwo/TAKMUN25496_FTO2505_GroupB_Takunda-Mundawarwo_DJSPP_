import type { Podcast } from "../types/types";
import { API_URL } from "../constants/constants";

/**
 * A query function to fetch all of the podcasts from the backend
 *
 * @returns { Promise } - A promise that resolves to an array containing the podcasts
 */
export async function fetchPodcasts(): Promise<Podcast[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(
      `Something went wrong. \nResponse status: ${response.status}`,
    );
  }
  return await response.json();
}
