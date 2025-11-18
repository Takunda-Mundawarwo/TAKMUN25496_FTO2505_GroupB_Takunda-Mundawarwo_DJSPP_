import type { ShowDetails } from "../types/types";
import { API_URL } from "../constants/constants";

/**
 * A query function to fetch the show details for a podcast
 *
 * @returns { Promise } - A promise that resolves to the show details
 */
export async function fetchShowDetails(id: string): Promise<ShowDetails> {
  const response = await fetch(`${API_URL}/id/${id}`);
  if (!response.ok) {
    throw new Error(
      `Something went wrong. \nResponse status: ${response.status}`,
    );
  }
  return await response.json();
}
