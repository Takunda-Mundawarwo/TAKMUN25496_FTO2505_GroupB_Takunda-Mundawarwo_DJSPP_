import { useQuery } from "@tanstack/react-query";
import { fetchPodcasts } from "../api/fetchPodcasts";

export function usePodcasts() {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: fetchPodcasts,
    staleTime: 1000 * 60 * 5,
  });
}
