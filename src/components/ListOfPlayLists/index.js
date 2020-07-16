import React from "react";
import "./listOfPlayLists.css";
import "../CategoriesList";
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
    <div className="listOfPlayLists">
      <h1>Yo!</h1>
      <div className="card-group">
        {playList.map((list, id) => {
          return (
            <div>
              <div
                class="card"
                style={{ width: 18 + "rem", height: 36 + "rem" }}
              >
                <img
                  class="card-img-top"
                  src={list.images[0].url}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{list.name}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    class="btn btn-primary"
                    onClick={() => {
                      props.history.push(`/songs/list/${list.id}`);
                    }}
                  >
                    Get list of Playlists by Category
                  </button>
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
