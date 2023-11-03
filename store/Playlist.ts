import { create } from "zustand";

type VideoState = {
  selectVideoID: string | null;
  setVideoId: (id: string) => void;
};

type Video = {
  id: string;
  title: string;
  thumbnails: string;
};

type VideoTableState = {
  videos: Video[];
  addVideo: (video: Video) => void;
  removeVideo: (id: string) => void;
};

export const usePlayListStore = create<VideoState>((set) => ({
  selectVideoID: null,
  setVideoId: (id: string) => set({ selectVideoID: id }),
}));
export const useVideoStore = create<VideoTableState>((set) => ({
  videos: [],
  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  removeVideo: (id) =>
    set((state) => ({ videos: state.videos.filter((video) => video.id !== id) })),
}));
