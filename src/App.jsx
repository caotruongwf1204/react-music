
// import './App.css'

import PlayerProvider from "./features/context/PlayerProvider";
import Playlist from "./features/playlist/Playlist";
import Player from "./features/player/Player";


function App() {

  return (
    <PlayerProvider>
      <Player></Player>
      <Playlist></Playlist>
    </PlayerProvider>
  )
}

export default App
