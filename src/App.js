import React from "react";
import "./App.css";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import CategoriesList from "./components/CategoriesList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={CategoriesList} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/error" component={Error} />
          <Route path="/login" component={Login} />
          <Route path="/musicplayer" component={MusicPlayer} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
