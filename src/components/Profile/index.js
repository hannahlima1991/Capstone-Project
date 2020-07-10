import React, { useEffect } from "react";
import "./profile.css";

function Profile() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/profile", {
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
    <div className="App">
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
