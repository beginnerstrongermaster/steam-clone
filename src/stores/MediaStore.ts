import { create } from "zustand";
import { Screenshot } from "../entities/Screenshot";
import { Trailer } from "../entities/Trailer";

interface Media {
  selectedTrailer: Trailer;
  selectedScreenshot: Screenshot;
  setSelectedTrailer: (trailer: Trailer) => void;
  setSelectedScreenshot: (screenshot: Screenshot) => void;
}

const useMediaStore = create<Media>((set) => ({
  selectedTrailer: {} as Trailer,
  selectedScreenshot: {} as Screenshot,

  /*If you set a state, other states in zustand will not be cleaned automatically,
  this may cause issue when you want to render only one of them,
  you have to clean it yourself*/
  setSelectedTrailer: (t) =>
    set(() => ({ selectedTrailer: t, selectedScreenshot: {} as Screenshot })),
  setSelectedScreenshot: (s) =>
    set(() => ({ selectedScreenshot: s, selectedTrailer: {} as Trailer })),
}));

export default useMediaStore;
