export type vantaEffectMethods = { destroy: () => void };

export interface Podcast {
  id: number | string;
  title: string;
  image: string;
  seasons: number;
  updated: string;
  genres: number[];
}

export interface ShowDetails extends Omit<Podcast, "seasons"> {
  description: string;
  seasons: Season[];
}

export interface Season {
  season: number;
  title: string;
  image: string;
  episodes: Episode[];
}

export interface Episode {
  episode: number;
  title: string;
  description?: string;
  image?: string;
  show?: string;
  season?: number;
  file: string;
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
