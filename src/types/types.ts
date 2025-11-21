//Data //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface Podcast {
  id: number | string;
  title: string;
  image: string;
  seasons: number;
  updated: string;
  genres: number[];
}

export interface ShowDetails extends Omit<Podcast, "seasons" | "genres"> {
  description: string;
  seasons: Season[];
  genres: string[];
}

export interface Season {
  title: string;
  season: number;
  image: string;
  episodes: Episode[];
}

export interface Episode {
  episode: number;
  title: string;
  description?: string;
  file: string;
}

export interface Genre {
  id: number;
  title: string;
}

export interface Favourite extends Episode {
  showTitle: string;
  season: string;
  image: string;
  dateAdded: Date;
}

export interface EpisodePreviewData extends Omit<Favourite, "dateAdded"> {
  dateAdded: Date | undefined;
}

// State Types /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Podcast Filters
export interface usePodcastFiltersReturn {
  searchQuery: string;
  genreFilter: number | "All";
  sortOrder: string;
  page: number;
  setFilters: (params: PodcastFilters) => void;
}

export interface PodcastFilters {
  searchQuery?: string;
  genreFilter?: string;
  sortOrder?: string;
  page?: string;
}

// Favourites
export interface FavouritesState {
  favourites: Favourite[];
  sort: FavouritesSortOption;
  addFavourite: (episode: EpisodePreviewData) => void;
  removeFavourite: (episodeTitle: string) => void;
  setSort: (sort: FavouritesSortOption) => void;
}

export type FavouritesSortOption =
  | "a-z"
  | "z-a"
  | "newest"
  | "newest"
  | "oldest";

export type FavouriteShowGroups = Record<string, Favourite[]>;

// Theme
export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = "light" | "dark";

// Audio
export interface AudioState {
  _audio: HTMLAudioElement | null;
  source: EpisodePreviewData | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  history: ListeningHistory;
  setSource: (episode: EpisodePreviewData) => void;
  _play: () => void;
  _pause: () => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  forwardTen: () => void;
  replayTen: () => void;
  _updateHistory: () => void;
  clearHistory: () => void;
  _bindAudioEvents: (audio: HTMLAudioElement) => void;
}

export type ListeningHistory = Record<string, AudioHistoryItem>;

export interface AudioHistoryItem {
  playedTill: number;
  duration: number;
  finished: boolean;
}

// Prop Types /////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface FetchEpisodePreviewProps {
  episodeIndex: number;
  seasonString: string;
}

export interface ShowGroupProps {
  title: string;
  favourites: Favourite[];
}

// Library Types ////////////////////////////////////////////////////////////////////////////////////////////////////////

export type vantaEffectMethods = { destroy: () => void };
