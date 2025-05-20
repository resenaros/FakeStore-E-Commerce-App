import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </Router>
  );
}

export default App;
