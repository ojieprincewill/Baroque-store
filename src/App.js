import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/home-page/home.component";
import Shop from "./pages/shop-page/shop.component";
import AboutPage from "./pages/about-page/about-page.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
    </>
  );
}

export default App;
