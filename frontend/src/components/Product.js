import React from "react";
import StarRatings from "react-star-ratings";
import { Card, Button } from "react-bootstrap";

const Product = ({ product, setProduct }) => {
  return (
    <Card className="mt-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} className="h-100" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <p>Reviews</p>
        <Card.Text>
          <StarRatings
            rating={product.rating}
            name="rating"
            numberOfStars={5}
            starRatedColor="gold"
            starDimension="30px"
            starSpacing="5px"
          />{" "}
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
