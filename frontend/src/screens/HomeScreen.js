import React from "react";
import Product from "../components/Product";
import products from "../products";
import { Col, Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={product._id}
              className="card-stretch"
            >
              <Product key={product._id} product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
