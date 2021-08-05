import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import styling from "../../styles/_new-photo-form.module.scss";

export default function NewPhotoForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const photoData = {
        title: enteredTitle,
        image: enteredImage
    }

    props.onAddPhoto(photoData);
  }

  return (
    <Card>
      <form className={styling.form} onSubmit={submitHandler}>
        <div className={styling.control}>
          <label htmlFor="title">Photo Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styling.control}>
          <label htmlFor="title">Photo Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styling.actions}>
          <button>Add Photo</button>
        </div>
      </form>
    </Card>
  );
}
