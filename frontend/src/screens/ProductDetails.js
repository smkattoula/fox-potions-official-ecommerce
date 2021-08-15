import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";

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
    <Container style={{ border: "1px solid" }}>
      <Row>
        <Col
          className="card-item-center p-5"
          xs={6}
          md={4}
          style={{ border: "1px solid" }}
        >
          <Image src={product.image} fluid style={{ border: "1px solid" }} />
        </Col>

        <Col className="card-item-center p-5" md={8}>
          {product.name}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
