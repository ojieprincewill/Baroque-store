import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj_DFHHnUjaEXykFvRQjYX2HA8w737s88",
  authDomain: "baroque-db.firebaseapp.com",
  projectId: "baroque-db",
  storageBucket: "baroque-db.appspot.com",
  messagingSenderId: "645542931352",
  appId: "1:645542931352:web:d95f1551b55d70fb17d9ed",
  measurementId: "G-NYMLJG47F5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const docData = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };

    try {
      await setDoc(userRef, docData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
