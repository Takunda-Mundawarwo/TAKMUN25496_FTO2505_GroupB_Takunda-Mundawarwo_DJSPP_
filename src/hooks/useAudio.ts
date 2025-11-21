import { create } from "zustand";
import type { AudioState } from "../types/types";
import { persist } from "zustand/middleware";

/**
 * Custom hook for global audio state
 *
 * @returns {UseBoundStore<WithPersist<StoreApi<AudioState>>>}
 */
export const useAudioStore = create<AudioState>()(
  persist(
    (set, get) => ({
      _audio: null,
      source: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      history: {},

      setSource: (episode) => {
        let audio = get()._audio;

        if (get().isPlaying) {
          get()._pause();
        }

        if (!audio) {
          audio = new Audio();
          set({ _audio: audio });
          get()._bindAudioEvents(audio);
        }

        set({
          source: episode,
          currentTime: 0,
          duration: 0,
        });

        audio.src = episode.file;
        audio.load();

        const episodeHistory = get().history[episode.title];
        if (episodeHistory) {
          get().seek(episodeHistory.playedTill);
        }

        audio.play();
        set({ isPlaying: true });
      },

      _play: () => {
        const audio = get()._audio;
        if (!audio) return;
        audio.play();
        set({ isPlaying: true });
      },

      _pause: () => {
        const audio = get()._audio;
        if (!audio) return;
        audio.pause();
        set({ isPlaying: false });
        get()._updateHistory();
      },

      togglePlay: () => {
        if (get().isPlaying) {
          get()._pause();
        } else {
          get()._play();
        }
      },

      seek: (time: number) => {
        const audio = get()._audio;
        if (!audio) return;
        set({ currentTime: time });
        audio.currentTime = time;
      },

      forwardTen: () => {
        const { currentTime, duration } = get();
        const newTime = Math.min(currentTime + 10, duration);

        get().seek(newTime);
      },

      replayTen: () => {
        const currentTime = get().currentTime;
        const newTime = Math.max(currentTime - 10, 0);

        get().seek(newTime);
      },

      _updateHistory: () => {
        const audio = get()._audio;
        const source = get().source;

        if (!audio || !source) return;

        set((state) => ({
          history: {
            ...state.history,
            [source.title]: {
              playedTill: audio.currentTime,
              duration: audio.duration,
              finished: audio.currentTime >= audio.duration,
            },
          },
        }));
      },

      clearHistory: () => set({ history: {} }),

      _bindAudioEvents: (audio: HTMLAudioElement) => {
        audio.addEventListener("loadedmetadata", () => {
          const duration = Math.floor(audio.duration);
          set({ duration });
        });

        audio.addEventListener("timeupdate", () => {
          const currentTime = Math.floor(audio.currentTime);
          set({ currentTime });
        });

        audio.addEventListener("ended", () => {
          get()._updateHistory();
          set({ isPlaying: false });
        });
      },
    }),
    {
      name: "listening-history",
      partialize: (state) => ({
        history: state.history,
      }),
    },
  ),
);
