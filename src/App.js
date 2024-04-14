import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { ShoppingCartDetailsPage } from './ShoppingCart/ShoppingCartDetailsPage';
import { CustomAppBar } from './Components/CustomAppBar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <CustomAppBar />
      <Router>
        <Routes>
        <Route exact path='/freelance-project/cart' element={<ShoppingCartDetailsPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
