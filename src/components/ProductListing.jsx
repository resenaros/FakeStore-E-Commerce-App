import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  return <div>ProductListing</div>;
};

export default ProductListing;
