import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <div
        className="border border-2 bg-white rounded p-4 text-center w-100"
        style={{ margin: "0 auto" }}
      >
        <h1 className="my-5">Welcome</h1>
        <p className="my-5">
          This is a simple e-commerce application built with React and
          Bootstrap. You can view, add, edit, and delete products.
        </p>
        <Link to="/products">
          <Button
            variant="primary"
            className="text-warning border border-3 border-secondary rounded"
          >
            View all products
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomePage;
