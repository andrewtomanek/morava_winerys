import React, { useState } from "react";
import { storage } from "../firebase/firebase";

const ImageUpload = props => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${props.selectedCompany.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(props.selectedCompany.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            props.imageSucces(url);
          });
      }
    );
  };

  return (
    <div className="picture__input">
      <progress className="progress__bar" value={progress} max="100" />
      <input className="file__input" type="file" onChange={handleChange} />
      <button
        className="upload__button"
        onClick={handleUpload}
        disabled={!image}
      >
        Nahrát foto
      </button>
      <img
        src={url || "/img/cont/placeholder720x540.png"}
        alt="Uploaded images"
        className="upload__picture"
      />
    </div>
  );
};

export default ImageUpload;
