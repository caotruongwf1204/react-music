import React, { useRef } from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { useEffect } from "react";

const Player = () => {
  const { playing, currentSong, onPlay, onPause, onNext, onPrev } = usePlayer();
  const audioRef = useRef();

  useEffect(() => {
    const audioEl = audioRef.current;
    if (playing) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }, [playing, currentSong]);
  return (
    <div>
      <audio src={currentSong.src} ref={audioRef}></audio>
      <img src={currentSong.thumbnail} alt="" />
      <h1>{currentSong.title}</h1>
      <span>{currentSong.artist}</span>
      <div>
      <button onClick={onPrev}>Prev</button>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? "pause" : "play"}
        </button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Player;
