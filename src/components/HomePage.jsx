import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <>
      <h1 className="my-5">Welcome</h1>
      <Link to="/products">
        <Button
          variant="primary"
          className="text-warning border border-3 border-secondary rounded"
        >
          View all products
        </Button>
      </Link>
    </>
  );
};

export default HomePage;
