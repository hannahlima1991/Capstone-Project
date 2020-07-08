import React, { useState, useEffect } from "react";
import "./categoriesList.css";

function CategoriesList() {
  
  //const URL = 'https://api.spotify.com/v1/me/#access_token=BQB7S01M2xAW5jNXKoBeEiNNtKABTPB7Y9SnxTEz-gg3qReUj9G-EKEcl2rovtVJo5_SxADXc0H8ez17WWF8b6sLt1Z3B2bh06yWCy2MKARr3QUESz5V4lBRrSowRwOd-RiOvCyrCAzeyViz7AxZvgPxWkSXcys&token_type=Bearer&expires_in=3600&state=123';
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);

  useEffect(() => {
    let URL = window.location;
    console.log(URL.hash.split('&')[0].split('=')[1]);
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

  return (
    <div className="App">
      

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
  )
};

export default CategoriesList;
