import { useContext } from "react";
import { PlayerContext } from "../features/context/PlayerProvider";
import { PLAYER } from "../features/reducer/playerReducer";
import { songs } from "../data/songs";
export const usePlayer = () => {
    const { state, dispatch } = useContext(PlayerContext);

    const handlePlay = () => {
        dispatch({ type: PLAYER.PLAY });
    };

    const handlePause = () => {
        dispatch({ type: PLAYER.PAUSE });
    };

    const handleNext = () => {
        dispatch({ type: PLAYER.NEXT });
    };
    const handlePrev = () => {
        dispatch({ type: PLAYER.PREV });
    };

    const currentSong = songs[state.currentSongIndex];

    return {
        ...state,
        currentSong,
        onPlay: handlePlay,
        onPause: handlePause,
        onNext: handleNext,
        onPrev: handlePrev,
    };
}

