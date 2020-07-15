import React, { useState } from "react";
import "./musicPlayer.css";
import "../ListOfSongs";
import "../CategoriesList";
import "../ListOfPlayLists";
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import './mysass.scss';

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
      <hr class="my-4" />
      <div class="content">
  <div className="content__container">
    <p className="content__container__text">
      by
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">Hannah !</li>
      <li className="content__container__list__item">Steve !</li>
      <li className="content__container__list__item">Django !</li>
      <li className="content__container__list__item">DigitalCrafts !</li>
    </ul>
  </div>
</div>
      
      
  </div>
</div>
  
  )}


export default MusicPlayer;
