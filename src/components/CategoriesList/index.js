import React, { useState, useEffect } from "react";
import "./categoriesList.css";




function CategoriesList() {




  const [category, setCategory] = useState([]);

  useEffect(() => {
    let URL = window.location;
    let access_token = URL.hash.split('&')[0].split('=')[1];
    fetch('https://api.spotify.com/v1/browse/categories',
      {
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        method: 'GET'
      })
      .then((response) => response.json())
      .then((response) => setCategory(response.categories.items))
}, []);




function handleClick(event) {
  const {Hardstyle, Trance, House} = event.target;

  console.log(event.target.name)
    let selectedCategory = event.target.name;

    let URL = window.location;
    let access_token = URL.hash.split('&')[0].split('=')[1];
    fetch('https://api.spotify.com/v1/browse/categories/' + {selectedCategory},
      {
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        method: 'GET'
      })
      .then((response) => response.json())
      .then((response) => console.log(response))
, [];

}


return (
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        onClick={handleClick}
        name = "Hardstyle"
        type="button"
        class="btn btn-secondary">
        Hardstyle
        </button>
      <button
        onClick={handleClick}
        name = "Trance"
        type="button"
        class="btn btn-secondary">
        Trance
        </button>
      <button
        onClick={handleClick}
        name = "House"
        type="button"
        class="btn btn-secondary">
        House
        </button>
    </div>
    <div className="card-group">


      {
        category.map((cat, id) => {
          console.log(category)
          return (<div>
            <div class="card" style={{ width: 18 + 'rem', height: 36 + 'rem' }}>
              <img class="card-img-top" src={cat.icons[0].url} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{cat.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={cat.href} class="btn btn-primary">Playlist</a>
              </div>
            </div>
          </div>


          )
        })
      }



    </div>
  </div>
)}
;

export default CategoriesList;
