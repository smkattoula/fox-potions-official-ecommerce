import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Image,
  ListGroup,
} from "react-bootstrap";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${match.params.id}`);

      const data = await response.data;
      setProduct(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <Container>
      <Row>
        <Col className="card-item-center p-5" xs={12} sm={12} md={4}>
          <Image src={product.image} fluid />
        </Col>

        <Col className="card-item-center p-5" xs={12} sm={12} md={8}>
          <ListGroup variant="flush p-5">
            <ListGroup.Item className="card-title">
              {product.name}
            </ListGroup.Item>
            <ListGroup.Item className="card-description">
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item className="card-price">
              ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <StarRatings
                rating={product.rating}
                name="rating"
                numberOfStars={5}
                starRatedColor="gold"
                starDimension="30px"
                starSpacing="5px"
              />
            </ListGroup.Item>
            <Button>Add to Cart</Button>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
