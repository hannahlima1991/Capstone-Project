import React, { useState, useEffect } from "react";
import "./categoriesList.css";
import Navbar from "../Navbar";

function CategoriesList(props) {
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);
  const [selectedOwnPlaylist, setSelectedOwnPlaylist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  let URL = window.location;

  let access_token = URL.hash.split("&")[0].split("=")[1];

  useEffect(() => {
    getPlaylists();

    fetch("https://api.spotify.com/v1/browse/categories", {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setCategory(response.categories.items));
  }, []);

  function getPlaylists() {
    let URL = window.location;

    let access_token = URL.hash.split("&")[0].split("=")[1];
    fetch("https://api.spotify.com/v1/me/playlists/", {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setSelectedOwnPlaylist(response.items));
    // .then((response) => console.log(response))
    // .then(() => console.log(selectedCategory + access_token))
  }

  function goToPlaylist(e) {
    let URL = window.location;

    let access_token = URL.hash.split("&")[0].split("=")[1];

    fetch(e.target.value, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setSelectedCategory([response]));
  }

  return (
    <div className="fullContent">
      <Navbar />
      <div className="card-group cardStyle">
        {category.map((cat, id) => {
          return (
            <div
              className="col-lg-3 click"
              onClick={() => {
                console.log(cat);
                props.history.push(`/categories/list/${cat.id}`);
              }}
            >
              <div class="card cardMargin">
                <img
                  class="card-img-top"
                  src={cat.icons[0].url}
                  alt="Card image cap"
                />
                <div class="card-body categoryName">
                  <h5 class="card-title">{cat.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesList;
