import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home-page/home.component";
import Shop from "./pages/shop-page/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";

function App() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      console.log(User);
    });

    return () => {
      unsubscribe();
    };
  }, [User]);
  return (
    <>
      <Routes>
        <Route index element={<Home currentUser={User} />} />
        <Route path="/shop" element={<Shop currentUser={User} />} />
        <Route
          path="/signin"
          element={<SignInAndSignUp currentUser={User} />}
        />
      </Routes>
    </>
  );
}

export default App;
