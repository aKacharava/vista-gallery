import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePhoto) => {},
  removeFavorite: (photoId) => {},
  itemIsFavorite: (photoId) => {},
});

export function FavoritesContextProvider(props) {
const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePhoto) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePhoto);
    });
  }

  function removeFavoriteHandler(photoId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((photo) => photo.id !== photoId);
    });
  }

  function itemIsFavoriteHandler(photoId) {
    return userFavorites.some((photo) => photo.id === photoId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;