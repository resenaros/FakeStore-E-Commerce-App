import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const AddProducts = () => {
  const [product, setProduct] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

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
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        formdata
      );
      console.log(response.data);
      setProduct(response.data);
      setSubmitted(true);
      setError(null);
    } catch (error) {
      setError(`Error submitting form, Please try again: ${error.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mt-5">Add Products</h2>
      {submitted && (
        <Alert variant="success" dismissible>
          {product.title} created successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        {/*Title*/}
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

        {/*Description*/}
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

        {/*Price*/}
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

        {/*Category*/}
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

        {/*Image*/}
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product image URL"
            name="image"
            value={formdata.image}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddProducts;
