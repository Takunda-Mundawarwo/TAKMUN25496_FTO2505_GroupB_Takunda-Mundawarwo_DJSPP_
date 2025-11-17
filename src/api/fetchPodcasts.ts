import type { Podcast } from "../types/types";
import { API_URL } from "../constants/constants";

export async function fetchPodcasts(): Promise<Podcast[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(
      `Something went wrong. \nResponse status: ${response.status}`,
    );
  }
  return await response.json();
}
