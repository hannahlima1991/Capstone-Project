import React from "react";
import ListofPlayLists from "./listOfPlayLists.css";
import "../CategoriesList";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";

let URL = window.location;
let access_token = URL.hash.split("&")[0].split("=")[1];

function ListOfPlayLists(props) {
  const [playList, setPlayList] = useState([]);
  useEffect(() => {
    console.log(props.match.params.id);
    getPlayLists(props.match.params.id);
  }, []);

  const getPlayLists = (id) => {
    let apiRequest = `https://api.spotify.com/v1/browse/categories/${id}/playlists`;
    fetch(apiRequest, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("list of playlists by category", response);
        setPlayList(response.playlists.items);
      });
  };

  return (
    <div className="contentWrapper">
      <Navbar />
      <div className="card-group cardPosition">
        {playList.map((list, id) => {
          return (
            <div
              class="col-lg-3 margin"
              onClick={() => {
                props.history.push(`/songs/list/${list.id}`);
              }}
            >
              <div class="card cardMargin">
                <img
                  class="card-img-top"
                  src={list.images[0].url}
                  alt="Card image cap"
                />
                <div class="card-body categoryName">
                  <h5 class="card-title">{list.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfPlayLists;
