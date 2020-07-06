import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {

  const URL = 'https://api.spotify.com/';
  //https://jsonplaceholder.typicode.com/users

  const [category, setCategory] = useState([]);

  useEffect(()=>{loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCategory(category.concat(data));
    console.log(data)
  }

  
  
  return (
    <div className="App">
    <a href="https://accounts.spotify.com/en/authorize?client_id=5a308894828241d78142929accea69d7&redirect_uri=http:%2F%2Flocalhost:3000&response_type=token&state=123">Connect to Spotify</a>
    {
      category.map((cat, id) => {
         return (<div>
          {id}
          {cat.name}
          {cat.id}
          {cat.email}
        
          
          </div> 

    )})
    }
    
    </div> 
  )
};

export default Home;
