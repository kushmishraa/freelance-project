import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ShoppingCartDetailsPage } from "./ShoppingCart/ShoppingCartDetailsPage";
import { CustomAppBar } from "./Components/CustomAppBar";
import { Footer } from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <CustomAppBar />
      <HashRouter>
        <Routes>
          <Route path="/cart" element={<ShoppingCartDetailsPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
