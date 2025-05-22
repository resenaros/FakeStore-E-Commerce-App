import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import NavBar from "./components/NavBar";
import AddProducts from "./components/AddProducts";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
