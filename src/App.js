import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ShoppingCartDetailsPage } from "./ShoppingCart/ShoppingCartDetailsPage";
import { CustomAppBar } from "./Components/CustomAppBar";
import { Footer } from "./Components/Footer";
import { useEffect, useState } from "react";
import { Header } from "./header/Header";
import { LandingPage } from "./landingPage/LandingPage";
import { CategoryDetailsPage } from "./CategoryDetailsPage/CategoryDetailsPage";
import { ProductDetailPage } from "./ProductDetailsPage/ProductDetailsPage";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { WishlishtComponent } from "./Wishlist/WishListComponent";

function App() {
  return (
    <>

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<ShoppingCartDetailsPage />} />
          <Route path="/category" element={<CategoryDetailsPage />}>
            <Route path=":categoryName" element={<CategoryDetailsPage />} />
          </Route>
          <Route path="/product/:productName" element={<ProductDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path=":component" element={<Dashboard />} />
          </Route>
          <Route path="/wishlist" element={<WishlishtComponent />} />
        </Routes>
        <Footer />
      </HashRouter>

    </>
  );
}

export default App;
