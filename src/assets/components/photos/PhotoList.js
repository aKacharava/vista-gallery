import React from "react";
import styling from "../../styles/_photo-list.module.scss";
import PhotoItem from "./PhotoItem";

export default function PhotoList(props) {
  return (
    <ul className={styling.list}>
      {props.photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          id={photo.id}
          image={photo.image}
          title={photo.title}
        />
      ))}
    </ul>
  );
}
