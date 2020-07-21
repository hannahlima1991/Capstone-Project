import React, {
  useState,
  useEffect
} from "react";
import "./personalPlayList.css";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function CategoriesList() {
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);
  const [ownPlaylist, setOwnPlaylist] = useState([])
  const [selectedPlaylistSong, setSelectedPlaylistSong] = useState([])
  const [selectedSong, setSelectedSong] = useState("")
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)

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
    //.then((response) => console.log(response.items))
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
    setSelectedSong(`https://open.spotify.com/embed/track/${pickedSong}`);
    setShowMusicPlayer(true)
  }


  return ( < div >
    <
    div className = "header" >
    <
    h1 className = "title animate-reveal animate-first display-4 d-none d-lg-block" >
    <
    LibraryMusicIcon style = {
      {
        fontSize: 80
      }
    }
    />
    Your Playlists <
    /h1> <
    h1 className = "small-header d-block d-lg-none" > Spotibea < /h1> <
    /div> <
    div className = "card-deck d-flex justify-content-center" > {
      ownPlaylist.map((item) => {
          return ( < div className = "card playlistName" >
            <
            img class = "card-img-top"
            src = {
              item.images[0].url
            }
            alt = "Card image cap" > < /img> <
            div class = "card-body" >
            <
            h5 class = "card-title" > {
              item.name
            } < /h5> <
            button type = "button"
            class = "btn btn-primary"
            onClick = {
              goToPlaylist
            }
            value = {
              item.href
            }
            name = {
              item.name
            } >
            go to {
              item.name
            }
            playlist <
            /button> <
            /div> <
            /div>)
          })
      }

      <
      div >
      <
      div className = "card-deck d-flex justify-content-center" > {
        selectedPlaylistSong != [] ? selectedPlaylistSong.map((cat) => {
          return ( <
            div >
            <
            div className = "card playlistName" >
            <
            img class = "card-img-top"
            src = {
              cat.track.album.images[0].url
            }
            alt = "Card image cap" /
            >
            <
            div class = "card-body" >
            <
            h5 class = "card-title" > {
              cat.track.name
            } < /h5> <
            button className = "btn btn-primary"
            value = {
              cat.track.id
            }
            onClick = {
              selectSong
            } >
            Play▷ <
            /button> <
            /div> <
            /div> <
            /div>
          );
        }) : null
      } < /div>

      <
      div > {
        selectedSong !== ("") ? < div className = "small-music-player"
        style = {
          {
            height: 100 + "px",
            width: 100 + "%"
          }
        } >
        <
        iframe
        src = {
          selectedSong
        }
        width = "300"
        height = "80"
        frameborder = "0"
        allowtransparency = "true"
        allow = "encrypted-media" > < /iframe></div > : null
      } <
      /div> <
      /div>


      <
      /div> <
      /div>

    );
  }

  export default CategoriesList;