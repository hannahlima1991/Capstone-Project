import React from "react";
import "./access.css";

function Access() {
  return (
    <div className="homeWrap">
      <a href="https://accounts.spotify.com/en/authorize?client_id=5a308894828241d78142929accea69d7&redirect_uri=http:%2F%2Flocalhost:3000/categories&response_type=token&state=123">
        Music On!
      </a>
    </div>
  );
}

export default Access;
