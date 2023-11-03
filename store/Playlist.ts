import { create } from "zustand";

type Video = {
  id: string;
  title: string;
  thumbnails: string;
};

type VideoState = {
  selectVideoID: Video | null;
  setVideoId: (id: string, title: string, thumbnails: string) => void;
};

type VideoTableState = {
  videos: Video[];
  addVideo: (video: Video) => void;
  removeVideo: (id: string) => void;
};

export const usePlayListStore = create<VideoState>((set) => ({
  selectVideoID: null as Video | null,
  setVideoId: (id, title, thumbnails) => set({ selectVideoID: { id, title, thumbnails } }),
}));

export const useVideoStore = create<VideoTableState>((set) => ({
  videos: [],
  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  removeVideo: (id) =>
    set((state) => ({ videos: state.videos.filter((video) => video.id !== id) })),
}));
