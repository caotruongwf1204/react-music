import { usePlayer } from "../../hooks/usePlayer";
import { fomatTime } from "../../fomatTime/fomat-time";
import { LuVolumeX, LuVolume, LuVolume1, LuVolume2 } from "react-icons/lu";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled  } from "react-icons/tb";
import { RxLoop } from "react-icons/rx";
import { RxShuffle } from "react-icons/rx";
import './player.css'


const Player = () => {
  const {
    playing,
    currentSong,
    onPlay,
    onPause,
    onNext,
    onPrev,
    volume,
    currentTime,
    onTimeUpdate,
    onLoop,
    onShuffle,
    isLoop,
    isShuffle,
    onEnded,
    audioRef,
    onMouseDown,
    onMouseUp,
    onCurrentTimeChange,
    onVolumeChange,
  } = usePlayer();

  return (
    <div className="player">
      <audio
        src={currentSong.src}
        ref={audioRef}
        onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}
        onEnded={onEnded}
      ></audio>
      <img className="player-img" src={currentSong.thumbnail} alt="" />
      
      <h1>{currentSong.title}</h1>
      <span>{currentSong.artist}</span>

      <div className="player-time">
        <span>{fomatTime(currentTime)}</span>
        <input
        className="input-time"
          type="range"
          min={0}
          max={currentSong.duration}
          step={1}
          value={currentTime}
          onChange={onCurrentTimeChange}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
        <span>{fomatTime(currentSong.duration)}</span>
      </div>
      <div className="player-btn">
        <button className={isShuffle ? "active" : ""} onClick={onShuffle}>
          <RxShuffle></RxShuffle>
        </button>
        <button onClick={onPrev}><TbPlayerTrackPrevFilled></TbPlayerTrackPrevFilled></button>
        <button onClick={playing ? onPause : onPlay}>
          {playing ? <FaPause></FaPause> : <FaPlay></FaPlay>}
        </button>
        <button onClick={onNext}><TbPlayerTrackNextFilled></TbPlayerTrackNextFilled></button>
        <button className={isLoop ? "active" : ""} onClick={onLoop}>
          <RxLoop></RxLoop>
        </button>

        <div className="player-volume">
        <span>
          {volume == 0 ? (
            <LuVolumeX></LuVolumeX>
          ) : volume < 0.25 ? (
            <LuVolume></LuVolume>
          ) : volume < 0.5 ? (
            <LuVolume1></LuVolume1>
          ) : (
            <LuVolume2></LuVolume2>
          )}
        </span>
        <input
        className="volume-input"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={onVolumeChange}
        />
      </div>
      </div>

      
    </div>
  );
};

export default Player;
