import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setFormdata({
          title: response.data.title,
          price: response.data.price,
          description: response.data.description,
          category: response.data.category,
          image: response.data.image,
        });
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load product data...");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, formdata);
      setSubmitted(true);
      setError(null);
      setTimeout(() => navigate(`/products/${id}`), 1500);
    } catch (error) {
      setError(`Error submitting form, Please try again: ${error.message}`);
      setSubmitted(false);
    }
  };

  if (loading) return <p>Loading product...</p>;

  return (
    <Container className="mt-5">
      <h2 className="my-4">EditProduct</h2>
      {submitted && (
        <Alert variant="success" dismissible>
          {formdata.title} updated successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}
      <div
        className="border border-2 bg-white rounded p-4 text-center w-100"
        style={{ margin: "0 auto" }}
      >
        <Form onSubmit={handleSubmit}>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product title"
              name="title"
              value={formdata.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Price */}
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="price"
              value={formdata.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product description"
              name="description"
              value={formdata.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              name="category"
              value={formdata.category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Image URL */}
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product image URL"
              name="image"
              value={formdata.image}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="text-warning border border-3 border-secondary rounded"
          >
            Update Product
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct;
