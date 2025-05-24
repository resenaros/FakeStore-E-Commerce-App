import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import HomePage from "./components/HomePage";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
