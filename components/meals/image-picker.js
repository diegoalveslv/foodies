"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();
  const fileInputRef = useRef();

  function handlePickImageClick() {
    fileInputRef.current.click();
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p> No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          id="image"
          name="image"
          className={classes.input}
          type="file"
          accept="image/jpg, image/png"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImageClick}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
