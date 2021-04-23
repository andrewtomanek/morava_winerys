import React, { useState, useEffect, useContext } from "react";

import firebase from "../firebase/firebase";
import { AuthContext } from "../auth/Auth";
import ImageUpload from "../components/forms/ImageUpload";
import InputCard from "../components/cards/InputCard";

const Upload = () => {
  const [companyDatabase, setCompanyDatabase] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db
      .collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .get();
    setBusinesses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    setCompanyDatabase(JSON.parse(localStorage.getItem("businessList")));
    fetchData();
  }, []);

  const setData = (pickedData) => {
    const db = firebase.firestore();
    db.collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .doc(pickedData.name)
      .set(pickedData);
    fetchData();
  };

  const getImgUrl = (imgData) => {
    setImageURL(imgData);
  };

  const onDelete = (pickedData) => {
    const db = firebase.firestore();
    db.collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .doc(pickedData.id)
      .delete();
    fetchData();
  };

  return (
    <div className="upload__page">
      <div className="list__container">
        {companyDatabase &&
          companyDatabase.map((elem, index) => (
            <div className="picture__container" key={elem.name}>
              <ImageUpload selectedCompany={elem} imageSucces={getImgUrl} />
              <InputCard item={elem} buttonLabel={false} />
              {imageURL && (
                <button
                  className="upload__button"
                  onClick={() => setData({ ...elem, imgSrc: imageURL })}
                >
                  Nahrát data
                </button>
              )}
            </div>
          ))}
      </div>

      <div className="list__container">
        {businesses &&
          businesses.map((elem, index) => (
            <div className="upload__container" key={index}>
              <img
                src={elem.imgSrc || "/img/cont/placeholder720x540.png"}
                alt="Uploaded images"
                className="upload__picture"
              />
              <InputCard
                item={elem}
                pickItem={onDelete}
                buttonLabel={"Delete"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Upload;
