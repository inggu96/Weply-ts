import { create } from "zustand";

type Video = {
  id: string;
  title: string;
  thumbnails: string;
};

type VideoState = {
  selectVideoId: string;
  modalId: Video | null;
  setSelectVideoId: (id: string) => void;
  setModalId: (id: string, title: string, thumbnails: string) => void;
};

type VideoTableState = {
  videos: Video[];
  addVideo: (video: Video) => void;
  removeVideo: (id: string) => void;
};

export const usePlayListStore = create<VideoState>((set) => ({
  selectVideoId: "",
  modalId: null as Video | null,
  setSelectVideoId: (id) => set({ selectVideoId: id }),
  setModalId: (id, title, thumbnails) => set({ modalId: { id, title, thumbnails } }),
}));

export const useVideoStore = create<VideoTableState>((set) => ({
  videos: [],
  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  removeVideo: (id) =>
    set((state) => ({ videos: state.videos.filter((video) => video.id !== id) })),
}));
