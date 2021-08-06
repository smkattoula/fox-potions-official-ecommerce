import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Container, Col, Row } from "react-bootstrap";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");

      const data = await response.data;

      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <Container className="mb-5" fluid>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={6} lg={4} xl={3}>
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
