import "./App.css";
import AddToCartPage from "./components/AddToCart/AddToCartPage";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.addToCartSlice.items);
  return (
    <>
      <div className="container-fluid d-flex p-0">
        <div className="container-left pl-2">
          <SideNavbar />
        </div>
        <div className="overlay"></div>
        <div className="container-right">
          <Header />
          <div className="card-contnaier1 px-3 py-3">
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/cartPage" element={<AddToCartPage data={data} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
