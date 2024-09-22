import { createContext } from "react";
import { Game } from "../entities/Game";

const gameContext = createContext<Game>({} as Game);

export default gameContext;
