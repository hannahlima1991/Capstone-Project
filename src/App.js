import React from "react";
import "./App.css";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Login from "./components/Login";
import Access from "./components/Access";
import About from "./components/About";
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
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/categories" exact component={CategoriesList} />
          <Route path="/categories/list/:id" component={ListOfPlayLists} />
          <Route path="/songs/list/:id" component={ListOfSongs} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/access" component={Access} />
          <Route path="/musicplayer/:id" component={MusicPlayer} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/pplaylist" component={PersonalPlayList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
