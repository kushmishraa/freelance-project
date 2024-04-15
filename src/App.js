import { HashRouter , Routes, Route } from "react-router-dom";
import './App.css';
import { ShoppingCartDetailsPage } from './ShoppingCart/ShoppingCartDetailsPage';
import { CustomAppBar } from './Components/CustomAppBar';
import { Footer } from './Components/Footer';
import { useEffect, useState } from "react";

function App() {

  const [width, setWidth] = useState("laptop");

  useEffect(() => {
    const handleResize = () => {
     if(window.innerWidth < 768){
        setWidth("small");
      }
      else if(window.innerWidth >= 768){
        setWidth("laptop");
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <CustomAppBar />
      <HashRouter>
        <Routes>
          <Route  path='/cart' element={<ShoppingCartDetailsPage width={width} />} />
        </Routes>
      </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
