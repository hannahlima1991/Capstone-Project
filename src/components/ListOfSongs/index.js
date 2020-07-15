import React, { useState, useEffect } from "react";
import "./listOfSongs.css";
import "../ListOfPlayLists";
import "../CategoriesList";

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
      .then((response) => console.log("A list of songs", response));
  };
}
export default ListOfSongs;

/* <h1>
        "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks",
      </h1> */
