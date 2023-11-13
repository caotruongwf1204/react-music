import {
    songs
} from "../../data/songs";

export const PLAYER = {
    PLAY: "player/play",
    PAUSE: "player/pause",
    NEXT: "player/next",
    PREV: "player/previous",
    SHUFFLE: "player/shuffle",
    LOOP: "player/loop",
    ADJUST_TIME: "player/adjustTime",
    SET_SONG: "player/setSong"
}


export const playerReducer = (state, action) => {
    switch (action.type) {
        case PLAYER.PLAY: {
            return {
                ...state,
                playing: true,
            }
        }

        case PLAYER.PAUSE: {
            return {
                ...state,
                playing: false,
            }
        }

        case PLAYER.NEXT: {
            let nextSongIndex = state.currentSongIndex + 1;
            if (nextSongIndex >= songs.length) {
                nextSongIndex = 0;
            }
            return {
                ...state,
                currentSongIndex: nextSongIndex,

            }
        }

        case PLAYER.PREV: {
            let previousSongIndex = state.currentSongIndex - 1;
            if (previousSongIndex < 0) {
                previousSongIndex = songs.length-1;
            }
            return {
                ...state,
                currentSongIndex: previousSongIndex,

            }
        }




    }
}