import React from "react";
import "./App.css";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Login from "./components/Login";
import Access from "./components/Access";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import CategoriesList from "./components/CategoriesList";
import ListOfPlayLists from "./components/ListOfPlayLists";
import ListOfSongs from "./components/ListOfSongs";
import PersonalPlayList from "./components/PersonalPlayList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/categories" component={CategoriesList} />
          {/* <Route path="/categories/list/:id" component={CategoriesList} /> */}
          {/* Make a route for handling a list of songs... make a component for receiving a list of songs... that component will look to the url for categoryId... */}
          <Route path="/categories/list/:id" component={ListOfPlayLists} />
          <Route path="/songs/list/:id" component={ListOfSongs} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/error" component={Error} />
          <Route path="/access" component={Access} />
          <Route path="/musicplayer" component={MusicPlayer} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
