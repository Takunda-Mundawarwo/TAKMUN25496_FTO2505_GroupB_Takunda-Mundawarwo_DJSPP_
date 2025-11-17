//Background.tsx types
export type vantaEffectMethods = { destroy: () => void };

//Data Types
export interface Podcast {
  id: number | string;
  title: string;
  image: string;
  seasons: number;
  updated: string;
  genres: number[];
}
