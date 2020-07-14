import React, { useState } from "react";
import "./musicPlayer.css";

function MusicPlayer() {

  const [selectedSong, setSelectedSong] = useState("")

  function handleClick(e){
    let name = e.target.name;
    let value = e.target.value;
    const selectedSong = `https://open.spotify.com/embed/${name}/${value}`
    console.log(selectedSong)
    setSelectedSong(selectedSong)
  };
  

  return (
    <div className="App">
      <h1>Music Player</h1>
      <button 
      name = "track"
      value = "1bPeGzT9e95wpzs3ovNwFB"
      onClick = {handleClick}
      >No way out - Vicetone</button>
      <button 
      name = "track"
      value = "46lFttIf5hnUZMGvjK0Wxo"
      onClick = {handleClick}
      >Runaway(U & I) - Galantis </button>
      <button 
      name = "album"
      value = "1zJ1gKd6steCSa30EPO6M5?si=Wh4HIafTTq2f_hGAmw5N2Q"
      onClick = {handleClick}
      >album Hardwell United we are</button>
      {selectedSong !== [] 
      ? 
      <iframe src= {selectedSong}
      width="300" 
      height="380" 
      frameborder="0" 
      allowtransparency="true" 
      allow="encrypted-media"></iframe>
      :
      null}
    </div>
  );
}

export default MusicPlayer;
