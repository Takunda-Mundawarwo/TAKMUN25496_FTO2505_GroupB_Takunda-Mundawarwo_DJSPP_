import type {
  EpisodePreview,
  Favourite,
  FetchEpisodePreviewProps,
} from "../types/types";

/**
 * Checks if a given object is of type Favourite
 *
 * @param {object}
 * @returns {boolean} - True if the object is of type Favourite
 */
export function isObjectFavourite(
  object: Favourite | FetchEpisodePreviewProps | EpisodePreview,
): object is Favourite {
  return (object as Favourite).dateAdded !== undefined;
}
