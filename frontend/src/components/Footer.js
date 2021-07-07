import React from "react";
import { Navbar, Container, Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="bottom">
      <Container>
        <Card className="m-auto text-center" style={{ height: "2rem" }}>
          <Card.Footer as="h6" className="text-muted">
            <p>© 2021 Fox Potions eCommerce</p>
          </Card.Footer>
        </Card>
      </Container>
    </Navbar>
  );
};

export default Footer;
