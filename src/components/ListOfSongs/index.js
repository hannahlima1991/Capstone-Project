import React, { useState, useEffect } from "react";
import "./listOfSongs.css";
import Navbar from "../Navbar";

let URL = window.location;
let access_token = URL.hash.split("&")[0].split("=")[1];

function ListOfSongs(props) {
  localStorage.setItem(access_token, "Tom");
  var aT = localStorage.getItem(access_token);
  console.log(aT);

  const [songList, setSongList] = useState([]);
  useEffect(() => {
    console.log(props.match.params.id);
    getSongLists(props.match.params.id);
  }, []);

  const getSongLists = (id) => {
    let apiRequest = `https://api.spotify.com/v1/playlists/${id}/tracks`;
    fetch(apiRequest, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("A list of songs", response);
        setSongList(response.items);
      });
  };
  return (
    <div className="songsList">
      <div className="navMargin">
        <Navbar />
      </div>
      {songList.map((song) => {
        const { track } = song;
        const { name = "" } = track;
        const { duration_ms } = track;
        return (
          <div className="songUi">
            <div
              className="card cardSize"
              onClick={() => {
                props.history.push(`/musicplayer/${song.track.id}`);
                console.log(song.track.id);
              }}
            >
              <div className="card-body lg-12">
                {name}
                <button
                  className="playButton"
                  onClick={() => {
                    props.history.push(`/musicplayer/${song.track.id}`);
                    console.log(song.track.id);
                  }}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ListOfSongs;
