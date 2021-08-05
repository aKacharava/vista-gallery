import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PhotoList from "../components/photos/PhotoList";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Look for your favorite photos in All Photos to show off later!</p>;
  } else {
    content = <PhotoList photos={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      { content }
    </section>
  );
}
