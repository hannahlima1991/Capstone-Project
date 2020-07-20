import React, { useState, useEffect } from "react";
import "./personalPlayList.css";

function CategoriesList() {
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);
  const [ownPlaylist, setOwnPlaylist] = useState([])
  const [selectedPlaylistSong, setSelectedPlaylistSong] = useState([])
  const [selectedSong, setSelectedSong] = useState("")

  useEffect(() => {
    getPlaylists()
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
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setOwnPlaylist(response.items))
    //.then((response) => console.log(response))
    //.then(() => console.log(selectedCategory + access_token))

  }

  function goToPlaylist(e) {
    setSelectedPlaylistSong([])

    let URL = window.location;

    let access_token = URL.hash.split("&")[0].split("=")[1]

    fetch(e.target.value, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setSelectedPlaylistSong(response.tracks.items)

      )
  }

  function selectSong(e) {
    setSelectedSong("")
    let pickedSong = (e.target.value);
    console.log(`pickedsong is ${pickedSong}`);
    setSelectedSong(`https://open.spotify.com/embed/track/${pickedSong}`);
    console.log(`Selected Song is: ${selectedSong}`)
    console.log(`from select song function ${pickedSong}`)
    //https://open.spotify.com/embed/track/ + ${pickedSong
  }


  return (<div>
    {ownPlaylist.map((item) => {
      return (<button
        type="button"
        class="btn btn-primary"
        onClick={goToPlaylist}
        value={item.href}
        name={item.name}>
        {item.name}</button>)
    })}
    {/* <button type="button" class="btn btn-primary" onClick={handleClick} name="Hardstyle">Hardstyle</button>
    <button type="button" class="btn btn-secondary" onClick={handleClick} name="House">House</button>
    <button type="button" class="btn btn-success" onClick={handleClick} name="Trance">Trance</button> */}
    <div>
      <div className="card-group"> {selectedPlaylistSong != [] ? selectedPlaylistSong.map((cat) => {
        return (
          <div>
            <div class="card" style={{ width: 18 + "rem", height: 36 + "rem" }}>
              <img
                class="card-img-top"
                src={cat.track.album.images[0].url}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{cat.track.name}</h5>
                <button
                  className="btn btn-primary"
                  value={cat.track.id}
                  onClick={selectSong}>
                  Play
                </button>
              </div>
            </div>
          </div>
        );
      }) : null}</div>
      
      <div className="small-music-player">
      {selectedSong !== ("") ? <div>
        <iframe 
        src={selectedSong} 
        width="300" 
        height="80" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media"></iframe></div> : null } 
        </div>
    </div>


  </div>

  );
}

export default CategoriesList;