import React, { useState, useEffect } from "react";
import "./categoriesList.css";

function CategoriesList(props) {
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);
  const [selectedOwnPlaylist, setSelectedOwnPlaylist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    getPlaylists();
    let URL = window.location;

    let access_token = URL.hash.split("&")[0].split("=")[1];
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
    <div>
      {selectedOwnPlaylist.map((item) => {
        return (
          <button
            type="button"
            class="btn btn-primary"
            onClick={goToPlaylist}
            value={item.href}
            name={item.name}
          >
            {item.name}
          </button>
        );
      })}
      <div>
        {console.log(selectedCategory)}
        <h1>
          {selectedCategory !== []
            ? selectedCategory.map((cat) => {
                return (
                  <div>
                    <div
                      class="card"
                      style={{ width: 18 + "rem", height: 36 + "rem" }}
                    >
                      <img
                        class="card-img-top"
                        //src={cat.response.tracks.items[0].track.album.images[0].url}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{cat[0]}</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href={cat.href} class="btn btn-primary">
                          Playlist
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </h1>
      </div>

      <div className="card-group">
        {category.map((cat, id) => {
          return (
            <div>
              <div
                class="card"
                style={{ width: 18 + "rem", height: 36 + "rem" }}
              >
                <img
                  class="card-img-top"
                  src={cat.icons[0].url}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{cat.name}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    onClick={() => {
                      console.log(cat);
                      props.history.push(`/categories/list/${cat.id}`);
                    }}
                    class="btn btn-primary"
                  >
                    Get list of Playlists by Category
                  </button>
                  <div
                    class="btn btn-danger"
                    onClick={() => {
                      let URL = window.location;

                      let access_token = URL.hash.split("&")[0].split("=")[1];
                      fetch(
                        "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks",
                        {
                          headers: {
                            Authorization: "Bearer " + access_token,
                          },
                          method: "GET",
                        }
                      )
                        .then((response) => response.json())
                        .then((response) =>
                          console.log(
                            "hardcoded get of list of songs by a hardcoded playlist",
                            response
                          )
                        );
                    }}
                  >
                    {" "}
                    Check list of songs in a PlayList
                  </div>
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
