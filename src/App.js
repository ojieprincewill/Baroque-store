import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home-page/home.component";
import Shop from "./pages/shop-page/shop.component";
import AboutPage from "./pages/about-page/about-page.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Home currentUser={currentUser} />} />
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/shop" element={<Shop currentUser={currentUser} />} />
        <Route
          path="/about"
          element={<AboutPage currentUser={currentUser} />}
        />
        <Route
          path="/signin"
          element={<SignInAndSignUp currentUser={currentUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
