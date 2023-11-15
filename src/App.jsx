
import './App.css'

import PlayerProvider from "./features/context/PlayerProvider";
import Playlist from "./features/playlist/Playlist";
import Player from "./features/player/Player";


function App() {

  return (
    <PlayerProvider>
      <Playlist></Playlist>
      <Player></Player>
    </PlayerProvider>
  )
}

export default App
