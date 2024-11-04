import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import SideNavbar from "./components/SideNavbar/SideNavbar";


function App() {
  return (
    <>
      <div className="container-fluid d-flex p-0">
        <div className="container-left pl-2">
          <SideNavbar />
        </div>
        <div className="container-right">
          <Header />
          <div className="card-contnaier px-3 py-3">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
