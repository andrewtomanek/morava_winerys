import React from "react";
import "../App.css";
import firebase from "./firebase";

function App() {
  const [companyDatabase, setCompanyDatabase] = React.useState([]);
  const [businesses, setBusinesses] = React.useState([]);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection("businesses").get();
    setBusinesses(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  
  React.useEffect(() => {
    setCompanyDatabase( JSON.parse(sessionStorage.getItem("businessList")))
  }, []);

//console.log(JSON.parse(sessionStorage.getItem("businessList")))

  const onCreate = (pickedData) => {
      console.log(pickedData)
    const db = firebase.firestore();
    db.collection("businesses").add( pickedData);
    fetchData();
  };

  const onDelete = (pickedData) => {
const db = firebase.firestore()
db.collection('businesses').doc(pickedData.id).delete()
fetchData();
}

  return (
    <div className="upload__container">
   
    <div className="list__container">
    {businesses &&
      businesses.map((elem, index) => (
        <ul className="list__box" key={index}>
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
          <button onClick={()=>onDelete(elem)}>delete</button>

</li>
        </ul>
      ))}
  </div>
  
      <div className="list__container">
    {companyDatabase &&
      companyDatabase.map((elem, index) => (
        <ul className="list__box" key={index}>
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
              <button onClick={()=>onCreate(elem)}>Upload</button>
</li>
        </ul>
      ))}
  </div>
  </div>
  );
}

export default App;
