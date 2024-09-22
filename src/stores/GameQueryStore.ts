import { create } from "zustand";
import { GameQuery } from "../hooks/useGames";

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number | undefined) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (text: string | undefined) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (g) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: g } })),
  setPlatformId: (p) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, parent_platformId: p },
    })),
  setSortOrder: (o) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: o } })),
  setSearchText: (t) => set(() => ({ gameQuery: { searchText: t } })),
}));

export default useGameQueryStore;
