export type vantaEffectMethods = { destroy: () => void };

export interface Podcast {
  id: number | string;
  title: string;
  image: string;
  seasons: number;
  updated: string;
  genres: number[];
}

export interface Genre {
  id: number;
  title: string;
}

export interface PodcastFilters {
  searchQuery?: string;
  genreFilter?: string;
  sortOrder?: string;
  page?: string;
}

export interface usePodcastFiltersReturn {
  searchQuery: string;
  genreFilter: number | "All";
  sortOrder: string;
  page: number;
  setFilters: (params: PodcastFilters) => void;
}
