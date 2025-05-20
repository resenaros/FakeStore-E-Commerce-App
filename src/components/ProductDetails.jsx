import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load product details...");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading Product details...</p>;
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  if (!product) return null; // Prevents rendering before product is loaded

  return (
    <Container>
      <Row>
        <Col key={id} className="mb-3">
          <Card>
            <Card.Img
              className="d-block mx-auto w-25"
              src={product.image}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
