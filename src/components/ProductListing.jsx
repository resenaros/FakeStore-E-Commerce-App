import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Loading", error);
        setError("Failed to load products...");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <p>{error}</p>;
      </div>
    );

  return (
    <Container>
      ProductListing
      <Row>
        {products.map((product, id) => (
          <Col key={id}>
            <Card>
              <Card.Img width={300} src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListing;
