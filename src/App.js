import React from "react";
import { Route, Switch } from "react-router-dom";
import AllPhotos from "./assets/pages/AllPhotos";
import NewPhotos from "./assets/pages/NewPhotos";
import Favorites from "./assets/pages/Favorites";
import Layout from "./assets/components/layout/Layout";

export default function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}
