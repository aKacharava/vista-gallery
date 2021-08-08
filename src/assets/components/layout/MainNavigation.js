import React, { useContext } from "react";
import styling from "../../styles/_main-navigation.module.scss";
import FavoritesContext from "../../../store/favorites-context";
import { Link } from "react-router-dom";
import { MainNavigationItem } from "./MainNavigationItem";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styling.header}>
      <div className={styling.logo}>Vista Gallery</div>
      <nav>
        <ul>
          {MainNavigationItem.map((val, key) => {
            let favoriteCounter;

            if (val.id === 3) {
              favoriteCounter = (
                <span className={styling.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              );
            }

            return (
              <li key={key}>
                <Link
                  to={val.link}
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() =>{
                    window.location.pathname = val.link;
                  }}
                >
                  {val.title} {favoriteCounter}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
