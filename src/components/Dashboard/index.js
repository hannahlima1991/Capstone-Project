import React, { useEffect, useState } from "react";
import "./dashboard.css";

function DashBoard() {
  const [name, setName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setName(localStorage.getItem("name"));
    fetch("http://localhost:8000/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authentication: "bearer " + token,
      },
      body: JSON.stringify({ data: "data" }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }, []);

  return (
    <div className="dashboard">
      <div className="welcomeUser">
        <h1>Welcome {name}</h1>
        <br></br>
        <br></br>
        <hr></hr>
        <div className="playlist">
          <h3>Playlists</h3>
          <div className="playlistCard"></div>
          <div className="dashboardList">
            <h3>Dashboard</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
