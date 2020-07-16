import React, { useState, useEffect } from "react";
import "./listOfSongs.css";
import ListOfPlayLists from "../ListOfPlayLists";
import CategoriesList from "../CategoriesList";

let URL = window.location;
let access_token = URL.hash.split("&")[0].split("=")[1];

function ListOfSongs(props) {
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
      <h1>Hello</h1>
      <div className="card">
        {songList.map((song) => {
          const { track } = song;
          const { name = "" } = track;
          const { duration_ms } = track;

          return (
            <div className="SongUI">
              <div className="card">
                <div className="card-body lg-12">
                  {name}
                  <button>push</button>
                </div>
              </div>

              {/* <p>{duration_ms}</p>; */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListOfSongs;

/* <h1>
        "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks",
      </h1> */
