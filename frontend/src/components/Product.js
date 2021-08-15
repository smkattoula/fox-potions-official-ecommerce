import React from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="card-content mt-5" style={{ width: "18rem" }}>
      <Container className="h-50">
        <Card.Img variant="top" src={product.image} />
      </Container>
      <Card.Body>
        <Card.Title className="card-title card-item-center mt-3">
          {product.name}
        </Card.Title>
        <Card.Text className="card-description card-item-center mt-4">
          {product.description}
        </Card.Text>
        <Card.Text className="card-price card-item-center">
          ${product.price}
        </Card.Text>
        <Card.Text className="card-item-center">
          <StarRatings
            rating={product.rating}
            name="rating"
            numberOfStars={5}
            starRatedColor="gold"
            starDimension="30px"
            starSpacing="5px"
          />{" "}
        </Card.Text>
        <Link to={`/productdetails/${product._id}`}>
          <Button className="btn btn-block" variant="primary">
            More Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
