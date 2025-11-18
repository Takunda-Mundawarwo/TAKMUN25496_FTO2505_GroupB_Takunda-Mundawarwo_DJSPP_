import { useQuery } from "@tanstack/react-query";
import { fetchPodcasts } from "../../../api/fetchPodcasts";

/**
 * A custom hook for fetching all the podcasts from the backend using Tanstack query
 *
 * @returns {UseQueryResult<Podcast[], Error>} - The data for all podcasts or an error.
 */
export function usePodcasts() {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: fetchPodcasts,
    staleTime: 1000 * 60 * 5,
  });
}
