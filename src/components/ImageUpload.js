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
      .ref(`images/${props.selectedCompany.businessId}`)
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
          .child(props.selectedCompany.businessId)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            props.imageSucces(url);
          });
      }
    );
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
  return (
    <div style={style}>
      <p>{props.selectedCompany.businessId}</p>
      <progress value={progress} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img
        src={url || "/img/cont/placeholder720x540.png"}
        alt="Uploaded images"
        height="300"
        width="400"
      />
    </div>
  );
};

export default ImageUpload;
