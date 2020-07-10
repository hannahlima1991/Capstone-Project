import React, { useEffect } from "react";
import "./dashboard.css";

function DashBoard(props) {
  useEffect(() => {
    const token = localStorage.getItem("token");
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
    <div className="App">
      <h1>Dashboard</h1>
    </div>
  );
}

export default DashBoard;
