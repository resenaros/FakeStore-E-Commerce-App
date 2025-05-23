import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const deleteProduct = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setDeleted(true);
        console.log(`Product ${id} deleted successfully`);
      })
      .catch((error) => {
        setError("Failed to delete product...");
        console.error("Error deleting product", error);
      });
  };

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
  if (deleted)
    return (
      <Alert variant="success">Product has been removed successfully!</Alert>
    );

  if (!product) return <p>No product found.</p>; // Prevents rendering before product is loaded

  return (
    <Container>
      <Row>
        <Col key={id} className="mb-3">
          <Card className="h-100 w-50 mx-auto ">
            <Card.Img
              className="d-block mx-auto w-25"
              src={product.image}
              alt={product.title}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fs-6">{product.title}</Card.Title>
              <Card.Text className="mb-1">${product.price}</Card.Text>
              <Card.Text className="text-truncate">
                {product.description}
              </Card.Text>
              <Card.Text className="text-muted">{product.category}</Card.Text>
              <div className="mt-auto d-flex justify-content-center">
                <Button size="sm" variant="primary" className="mx-2">
                  Add to Cart
                </Button>
                <Button
                  onClick={deleteProduct}
                  size="sm"
                  variant="outline-danger"
                >
                  Remove from Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
