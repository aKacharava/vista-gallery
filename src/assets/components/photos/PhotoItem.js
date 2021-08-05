import React from "react";
import styling from "./_photo-item.module.scss";
import Card from "../ui/Card";

export default function PhotoItem(props) {
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
          <button>Add To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
