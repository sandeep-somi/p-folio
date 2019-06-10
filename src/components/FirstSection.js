import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

const FirstSection = () => {

  return (
    <Container >
      <Row>
        <Col xs={12} sm={12} md={12} className="first-section-content">
          <div>
            <p><i>I am here to create meaningful and lasting relationship with my clients.</i></p>
            <h2>LET'S BUILD SOMETHING<br />AMAZING TOGETHER</h2>
            <Button variant="outline-dark mt-4">Watch Video</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FirstSection;