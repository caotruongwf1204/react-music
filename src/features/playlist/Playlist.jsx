import React, { useState } from "react";
import { songs } from "../../data/songs";
import { usePlayer } from "../../hooks/usePlayer";
import PlaylistHeading from "./PlaylistHeading";
import { FaPlay, FaPause } from "react-icons/fa";
import { fomatTime } from "../../fomatTime/fomat-time";

import "./playlist.css";

const Playlist = () => {
  const { currentSong, onChooseSong } = usePlayer();

  const backgroundStyle = {
    backgroundImage: currentSong.id ? `url(${currentSong.background})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  

  return (
    <div className="play-list" style={backgroundStyle}>
      <div className="play-list-song">
        <PlaylistHeading></PlaylistHeading>
        {songs.map((song) => (
          <div
            className="play-list-item"
            key={song.id}
            style={{ background: currentSong.id === song.id ? "grey" : "none" }}
            onClick={() => onChooseSong(song)}
          >
            <div className="play-list-Ele">
          
              <div className="play-list-img">
                <img src={song.thumbnail} alt={song.title} />
              </div>
            </div>

            <div className="play-list-title">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>

            <span>{fomatTime(song.duration)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
