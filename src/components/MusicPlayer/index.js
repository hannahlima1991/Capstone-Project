import React, { useState } from "react";
import "./musicPlayer.css";
import Navbar from "../Navbar";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import "./mysass.scss";

function MusicPlayer() {
  // const [selectedSong, setSelectedSong] = useState("");

  let songId = window.location;
  let track = songId.pathname.split("/")[2];
  console.log(track);

  let name = "track";
  let value = track;

  const selectedSong = `https://open.spotify.com/embed/${name}/${value}`;

  return (
    <div className="mainContent">
      <Navbar />
      <div class="jumbotron">
        <div className="header">
          <h1 className="title animate-reveal animate-first display-4 d-none d-lg-block" >
            <MusicVideoIcon style={{ fontSize: 80 }} />
            Spotibea Music Player
            <LoyaltyIcon style={{ fontSize: 80 }} />
          </h1>
          <h1 className = "small-header d-block d-lg-none"> Spotibea </h1>
        </div>
        <div className="resp-container animate-reveal animate-second ">
          <iframe
            className="resp-iframe iframe mx-auto full-width"
            src={selectedSong}
            frameborder="20"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <hr class="my-4" />
          <div className = "fixed-bottom">
          <div class="content d-none d-lg-block">
            <div className="content__container d-none d-lg-block">
              <p className="content__container__text">by</p>

              <ul className="content__container__list">
                <li className="content__container__list__item">Hannah !</li>
                <li className="content__container__list__item">Steve !</li>
                <li className="content__container__list__item">Django !</li>
                <li className="content__container__list__item">
                  DigitalCrafts !
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
