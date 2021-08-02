import React from "react";
import { Route, Switch } from "react-router-dom";
import AllPhotos from "./assets/pages/AllPhotos";
import NewPhotos from "./assets/pages/NewPhotos";
import Favorites from "./assets/pages/Favorites";
import "./App.scss";

export default function App() {
  /// URL page
  /// Dev - Localhost:3000
  /// Live - akdev.nl
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllPhotos />
        </Route>
        <Route path="/new-photos">
          <NewPhotos />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}
