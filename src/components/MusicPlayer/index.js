import React, { useState } from "react";
import "./musicPlayer.css";
import "../ListOfSongs";
import "../CategoriesList";
import "../ListOfPlayLists";
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CodeIcon from '@material-ui/icons/Code';

function MusicPlayer() {
  const [selectedSong, setSelectedSong] = useState("");

  // function handleClick(e) {
  //   let name = "album"
  //   let value = "46lFttIf5hnUZMGvjK0Wxo"
  //   const selectedSong = `https://open.spotify.com/embed/${name}/${value}`;
  //   console.log(selectedSong);
  //   setSelectedSong(selectedSong);
  // }

  return (
      <div class="jumbotron">
      <div className="header">
      <h1 className = "title animate-reveal animate-first display-4">
      <MusicVideoIcon style={{ fontSize: 80 }}/>
          Spotibea Music Player   
       <LoyaltyIcon style={{ fontSize: 80 }}/>
      </h1>
      </div>
      <div className = "resp-container animate-reveal animate-second">
      <iframe className = "resp-iframe "
      src="https://open.spotify.com/embed/album/1zJ1gKd6steCSa30EPO6M5" 
       
      frameborder="20" 
      allowtransparency="true" 
      allow="encrypted-media">
      </iframe>
  </div>
 </div>
  
  )}


export default MusicPlayer;
