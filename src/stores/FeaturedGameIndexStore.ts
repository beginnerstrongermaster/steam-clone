import { create } from "zustand";

interface FeaturedGameIndexStore {
  selectedFeaturedGameIndex: number;
  setSelectedFeaturedGameIndex: (gameIndex: number) => void;
}

const useFeaturedGameStore = create<FeaturedGameIndexStore>((set) => ({
  selectedFeaturedGameIndex: 0,
  setSelectedFeaturedGameIndex: (fgi) =>
    set(() => ({ selectedFeaturedGameIndex: fgi })),
}));

export default useFeaturedGameStore;
