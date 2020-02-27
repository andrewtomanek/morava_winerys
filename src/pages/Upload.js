import React, { useContext } from "react";
import "../App.css";
import firebase from "../firebase/firebase";
import { AuthContext } from "../auth/Auth";
import ImageUpload from "../components/ImageUpload";

function App() {
  const [companyDatabase, setCompanyDatabase] = React.useState([]);
  const [businesses, setBusinesses] = React.useState([]);
  const [imageURL, setImageURL] = React.useState(null);
  const { currentUser } = useContext(AuthContext);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db
      .collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .get();
    setBusinesses(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  React.useEffect(() => {
    setCompanyDatabase(JSON.parse(sessionStorage.getItem("businessList")));
    fetchData();
  }, []);

  const setData = pickedData => {
    const db = firebase.firestore();
    db.collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .doc(pickedData.name)
      .set(pickedData);
    fetchData();
  };

  const getImgUrl = imgData => {
    setImageURL(imgData);
  };

  const onDelete = pickedData => {
    const db = firebase.firestore();
    db.collection("businesses")
      .doc(currentUser.uid)
      .collection("locations")
      .doc(pickedData.id)
      .delete();
    fetchData();
  };

  return (
    <div className="upload__container">
      <div className="list__container">
        {businesses &&
          businesses.map((elem, index) => (
            <ul className="list__box" key={index}>
              <li className="text__field">{elem.businessId}</li>
              <li className="text__field">{elem.name}</li>
              <li className="text__field">{elem.lat}</li>
              <li className="text__field">{elem.lng}</li>
              <li className="text__field">{elem.address}</li>
              <li className="text__field">{elem.postalCode}</li>
              <li className="text__field">{elem.phoneNumber}</li>
              <li className="text__field">{elem.url}</li>
              <li className="text__field">{elem.website}</li>
              <li className="text__field">{elem.email}</li>
              <li className="text__field">
                <button onClick={() => onDelete(elem)}>delete</button>
              </li>
              <li className="text__field">
                <img
                  src={elem.imgSrc || "/img/cont/placeholder720x540.png"}
                  alt="Uploaded images"
                  height="300"
                  width="400"
                />
              </li>
            </ul>
          ))}
      </div>

      <div className="list__container">
        {companyDatabase &&
          companyDatabase.map((elem, index) => (
            <ul className="list__box" key={index}>
              <li className="text__field">
                <ImageUpload selectedCompany={elem} imageSucces={getImgUrl} />
              </li>
              <li className="text__field">{elem.businessId}</li>
              <li className="text__field">{elem.name}</li>
              <li className="text__field">{elem.lat}</li>
              <li className="text__field">{elem.lng}</li>
              <li className="text__field">{elem.address}</li>
              <li className="text__field">{elem.postalCode}</li>
              <li className="text__field">{elem.phoneNumber}</li>
              <li className="text__field">{elem.url}</li>
              <li className="text__field">{elem.website}</li>
              <li className="text__field">{elem.email}</li>
              {imageURL && (
                <li className="text__field">
                  <button
                    onClick={() => setData({ ...elem, imgSrc: imageURL })}
                  >
                    setData
                  </button>
                </li>
              )}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default App;
