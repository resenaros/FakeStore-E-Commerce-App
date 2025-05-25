import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => setShowModal(false);

  const deleteProduct = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setDeleted(true);
        setShowModal(false);
        setTimeout(() => navigate("/products"), 1500);
        console.log(`Product ${id} deleted successfully`);
      })
      .catch((error) => {
        setError("Failed to delete product...");
        setShowModal(false);
        console.error("Error deleting product", error);
      });
  };

  const handleCloseModal = () => setShowModal(false);

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
    <Container classname="mt-4">
      <h2 className="my-4 text-center">Product Details</h2>
      <Row classname="justify-content-center">
        <Col key={id} className="xs={12} sm={8} md={6} lg={4}">
          <Card className="h-100 mx-auto d-flex flex-column">
            <Card.Img
              className="d-block mx-auto mt-4"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
              }}
              src={product.image}
              alt={product.title}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title
                  className="fs-5 w-100 text-center"
                  style={{
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    marginBottom: "0.75rem",
                  }}
                >
                  {product.title}
                </Card.Title>
                <Card.Text className="fs-5 text-center mb-3">
                  ${product.price}
                </Card.Text>
                <Card.Text className="mb-2 text-center fs-5">
                  {product.description}
                </Card.Text>
                <Card.Text className="text-muted text-center mb-2">
                  {product.category}
                </Card.Text>
              </div>
              <div className="mt-auto d-flex flex-column align-items-center justify-content-center gap-2">
                {/* Non-functional/decoration-Button to trigger add to cart action */}
                <Button
                  size="sm"
                  variant="primary"
                  className="text-warning border border-3 border-secondary rounded w-25"
                >
                  Add to Cart
                </Button>
                <Link to={`/edit-product/${id}`} className="w-25">
                  <Button size="sm" variant="warning" className="w-100">
                    Edit
                  </Button>
                </Link>
                {/*Non-functional/decoration-Button to trigger delete confirmation modal */}
                {/* Button to trigger delete confirmation modal */}
                <Button
                  onClick={() => setShowModal(true)}
                  size="sm"
                  variant="outline-danger"
                  className="w-25"
                >
                  Delete Product
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Modal for delete confirmation */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
