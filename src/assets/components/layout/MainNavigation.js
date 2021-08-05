import React from "react";
import { Link } from 'react-router-dom';
import styling from '../../styles/_main-navigation.module.scss';

export default function MainNavigation() {
  return (
    <header className={styling.header}>
      <div className={styling.logo}>Vista Gallery</div>
      <nav>
        <ul>
          <li>
              <Link to='/'>All Photos</Link>
          </li>
          <li>
              <Link to='/new-photos'>Add New Photos</Link>
          </li>
          <li>
              <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
