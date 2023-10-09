import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home.component";
import Shop from "./pages/shop.component";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
