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
    ADJUST_VOLUME: "player/adjustVolume",
    SET_SONG_RANDOM: "player/setSongRandom",
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
                previousSongIndex = songs.length - 1;
            }
            return {
                ...state,
                currentSongIndex: previousSongIndex,

            }
        }

        case PLAYER.ADJUST_TIME: {
            return {
                ...state,
                currentTime: action.payload.currentTime,
            }
        }

        case PLAYER.LOOP: {
            return {
                ...state,
                loop: !state.loop
            }

        }

        case PLAYER.SHUFFLE: {
            return {
                ...state,
                shuffle: !state.shuffle
            }
        }

        case PLAYER.SET_SONG_RANDOM: {
            return {
                ...state,
                currentSongIndex: action.payload.currentSongIndex,
            };
        }

        case PLAYER.ADJUST_VOLUME: {
            return {
                ...state,
                volume: action.payload.volume,
            }
        }

        case PLAYER.SET_SONG: {
            const songIndex = songs.findIndex((song) => song.id === action.payload.song.id);
            return {
                ...state,
                currentSongIndex: songIndex,
            }
        }




    }
}