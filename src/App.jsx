import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Context } from "./context";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./App.css";
import DetailedPage from "./pages/DetailedPage";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detailed" element={<DetailedPage />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
};

export default App;
