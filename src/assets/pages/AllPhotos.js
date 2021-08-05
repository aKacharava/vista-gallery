import React from "react";
import PhotoList from "../components/photos/PhotoList";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "A mesmerizing photo",
    image: "https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "p2",
    title: "A photo with character",
    image: "https://images.pexels.com/photos/1933318/pexels-photo-1933318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function AllPhotos() {
  return (
    <section>
      <h1>All Photos</h1>
      <PhotoList photos={DUMMY_DATA} />
    </section>
  );
}
