import React from "react";
import { useContext } from "react";
import styling from "../../styles/_photo-item.module.scss";
import Card from "../ui/Card";
import FavoritesContext from "../../../store/favorites-context";

export default function PhotoItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
      });
    }
  }

  return (
    <li className={styling.item}>
      <Card>
        <div className={styling.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styling.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={styling.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
