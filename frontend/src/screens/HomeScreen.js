import React from "react";
import blackshirt from "../images/blackshirt.jpeg";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container className="mb-5" fluid>
      <Row className="d-flex justify-content-center">
        <Col md={3}>
          <Card className="mt-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blackshirt} />
            <Card.Body>
              <Card.Title>Shirt</Card.Title>
              <Card.Text>Cool shirt description</Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mt-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blackshirt} />
            <Card.Body>
              <Card.Title>Shirt</Card.Title>
              <Card.Text>Cool shirt description</Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="mt-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blackshirt} />
            <Card.Body>
              <Card.Title>Shirt</Card.Title>
              <Card.Text>Cool shirt description</Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
