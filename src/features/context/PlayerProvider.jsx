import { useReducer } from "react";
import { createContext } from "react";
import { playerReducer } from "../reducer/playerReducer";

const initialPlayState = {
  playing: false,
  currentTime: 0,
  currentSongIndex: 0,
  loop: false,
  shuffle: false,
};

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
  const [ state, dispatch ] = useReducer(playerReducer, initialPlayState);
  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
}
