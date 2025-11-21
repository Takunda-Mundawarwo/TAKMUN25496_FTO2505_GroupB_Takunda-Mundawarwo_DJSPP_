import type {
  EpisodePreviewData,
  Favourite,
  FetchEpisodePreviewProps,
} from "../types/types";

/**
 * Checks if a given object is of type Favourite
 *
 * @param {object}
 * @returns {boolean} - A type predicate, true if the object is of type Favourite
 */
export function isObjectFavourite(
  object: Favourite | FetchEpisodePreviewProps | EpisodePreviewData,
): object is Favourite {
  return (object as Favourite).dateAdded !== undefined;
}
