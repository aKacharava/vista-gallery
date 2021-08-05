import React from "react";
import { useHistory } from "react-router-dom";
import NewPhotoForm from "../components/photos/NewPhotoForm.js";

export default function NewPhotos() {
    const history = useHistory();
    
  function addPhotoHandler(photoData) {
    fetch(
      "https://vista-gallery-default-rtdb.europe-west1.firebasedatabase.app/photos.json",
      {
        method: "POST",
        body: JSON.stringify(photoData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace('/');
    });
  }

  return (
    <div>
      <h1>Add New Photo</h1>
      <NewPhotoForm onAddPhoto={addPhotoHandler} />
    </div>
  );
}
