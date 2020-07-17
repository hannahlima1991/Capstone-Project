import React from "react";
import "./access.css";

function Access() {
  return (
    <div className="accessWrap">
      <div className="accessContent">
        <a href="https://accounts.spotify.com/en/authorize?client_id=5a308894828241d78142929accea69d7&redirect_uri=http:%2F%2Flocalhost:3000/categories&response_type=token&state=123">
          <h1> Music On!</h1>
        </a>
      </div>
    </div>
  );
}

export default Access;
