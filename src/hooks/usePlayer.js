import {
    useContext,
    useEffect,
    useRef
} from "react";
import {
    PlayerContext
} from "../features/context/PlayerProvider";
import {
    PLAYER
} from "../features/reducer/playerReducer";
import {
    songs
} from "../data/songs";
export const usePlayer = () => {
    const {
        state,
        dispatch
    } = useContext(PlayerContext);

    const audioRef = useRef();
    const {
        playing,
        currentSongIndex,
        currentTime
    } = state;

    useEffect(() => {
        const audioEl = audioRef.current;

        if (!audioEl) return;
        if (playing) {
            audioEl.play();
        } else {
            audioEl.pause();
        }
    }, [playing, currentSongIndex, currentTime]);

    const handlePlay = () => {
        dispatch({
            type: PLAYER.PLAY
        });
    };

    const handlePause = () => {
        dispatch({
            type: PLAYER.PAUSE
        });
    };

    const handleNext = () => {
        if (state.shuffle) {
          const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
          const currentIndex = shuffledSongs.findIndex(song => song.id === currentSong.id);
          const nextIndex = (currentIndex + 1) % shuffledSongs.length;
      
          dispatch({
            type: PLAYER.SET_SONG_RANDOM,
            payload: { currentSongIndex: nextIndex, songs: shuffledSongs },
          });
        } else {
          dispatch({ type: PLAYER.NEXT });
        }
      };
      
      const handlePrev = () => {
        if (state.shuffle) {
          const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
          const currentIndex = shuffledSongs.findIndex(song => song.id === currentSong.id);
          const prevIndex = (currentIndex - 1 + shuffledSongs.length) % shuffledSongs.length;
      
          dispatch({
            type: PLAYER.SET_SONG_RANDOM,
            payload: { currentSongIndex: prevIndex, songs: shuffledSongs },
          });
        } else {
          dispatch({ type: PLAYER.PREV });
        }
      };
      

    const handleTimeUpdate = (currentTime) => {
        dispatch({
            type: PLAYER.ADJUST_TIME,
            payload: {
                currentTime
            }
        });
    }

    const toggleLoop = () => {
        dispatch({
            type: PLAYER.LOOP
        });
    }

    const toggleShuffle = () => {
        dispatch({
            type: PLAYER.SHUFFLE
        });
    };

    const handleEnded = () => {
        if (state.loop) {
            dispatch({
                type: PLAYER.ADJUST_TIME,
                payload: {
                    currentTime: 0
                }
            });
        } else {
            if (state.shuffle) {
                const randomIndex = Math.floor(Math.random() * songs.length);
                dispatch({
                    type: PLAYER.SET_SONG_RANDOM,
                    payload: {
                        currentSongIndex: randomIndex
                    }
                });
            } else {
                dispatch({
                    type: PLAYER.NEXT
                });
            }
        }
    };


    const handeleMouseDown = () => {
        audioRef.current.muted = true;
    };

    const handeleMouseUp = () => {
        audioRef.current.muted = false;
    };

    const handeleCurrentTimeChange = (e) => {
        audioRef.current.currentTime = e.target.value;
    }

    const handeleVolumeChange = (e) => {
        dispatch({type: PLAYER.ADJUST_VOLUME, payload:{ volume: e.target.value }});
        audioRef.current.volume = e.target.value;
    }

    const handleChooseSong = (song) => {
        dispatch({type : PLAYER.SET_SONG, payload: { song } })
    }
    const currentSong = songs[state.currentSongIndex];
    const isLoop = state.loop;
    const isShuffle = state.shuffle;


    return {
        ...state,
        currentSong,
        isLoop,
        isShuffle,
        audioRef,
        onPlay: handlePlay,
        onPause: handlePause,
        onNext: handleNext,
        onPrev: handlePrev,
        onTimeUpdate: handleTimeUpdate,
        onLoop: toggleLoop,
        onShuffle: toggleShuffle,
        onEnded: handleEnded,
        onMouseDown: handeleMouseDown,
        onMouseUp: handeleMouseUp,
        onCurrentTimeChange: handeleCurrentTimeChange,
        onVolumeChange: handeleVolumeChange,
        onChooseSong: handleChooseSong,
    };
}