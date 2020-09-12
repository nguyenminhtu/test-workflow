import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Layout({ title, children }) {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {children}
        </Card.Body>
      </Card>
    </Container>
  );
}
