import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
