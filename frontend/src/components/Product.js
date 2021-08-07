import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="mt-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} className="h-100" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
