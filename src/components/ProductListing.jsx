import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <Container className="mt-4">
      <h2 className="mb-4">Product Listing</h2>
      <Row className="g-4">
        {products.map((product, id) => (
          <Col
            key={id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-stretch"
          >
            <Card className="w-100 h-100 d-flex flex-column">
              <Card.Img
                className="d-block mx-auto mt-3"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
                src={product.image}
                alt={product.title}
              />
              <Card.Body className="d-flex flex-column justify-content-between px-2">
                {/* Middle zone: Title */}
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                  <Card.Title
                    className="fs-6 w-100 text-center"
                    style={{
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                </div>
                {/* Bottom zone: Price and Buttons */}
                <div className="mt-2">
                  <Card.Text
                    className="fs-6 mb-2 text-center"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    ${product.price}
                  </Card.Text>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <Link to={`/products/${product.id}`} className="w-100">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-100 text-warning border border-3 border-secondary rounded"
                      >
                        View Product Details
                      </Button>
                    </Link>
                    <Link to={`/edit-product/${product.id}`} className="w-100">
                      <Button variant="warning" size="sm" className="w-100">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListing;
