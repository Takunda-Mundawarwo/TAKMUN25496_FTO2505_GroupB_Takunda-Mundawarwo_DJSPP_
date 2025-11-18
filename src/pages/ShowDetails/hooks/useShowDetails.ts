import { useQuery } from "@tanstack/react-query";
import { fetchShowDetails } from "../../../api/fetchShowDetails";

/**
 * A custom hook for fetching show details for a podcast using Tanstack query
 *
 * @returns {UseQueryResult<ShowDetails, Error>} - The data for all podcasts or an error.
 */
export function useShowDetails(id: string) {
  return useQuery({
    queryKey: ["podcast", id],
    queryFn: () => fetchShowDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}
