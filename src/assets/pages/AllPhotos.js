import React from "react";
import { useState, useEffect } from "react";
import PhotoList from "../components/photos/PhotoList";

export default function AllPhotos() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPhotos, setLoadedPhotos] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://vista-gallery-default-rtdb.europe-west1.firebasedatabase.app/photos.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const photos = [];

        for (const key in data) {
          const photo = {
            id: key,
            ...data[key],
          };

          photos.push(photo);
        }

        setIsLoading(false);
        setLoadedPhotos(photos);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Photos</h1>
      <PhotoList photos={loadedPhotos} />
    </section>
  );
}
