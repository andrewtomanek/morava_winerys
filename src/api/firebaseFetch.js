import firebase from "firebase/app";

const firebaseFetch = async (currentUser) => {
  const db = firebase.firestore();
  const data = await db
    .collection("businesses")
    .doc(currentUser.uid)
    .collection("locations");
  return data;
};

export default firebaseFetch;
