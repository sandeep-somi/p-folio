import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';

const Intorduction = () => {

  return (
    <Container >
      <Row>
        <Col xs={12} sm={12} md={12} className="intro-wrapper">
          <div>
            <p><i>I am here to create meaningful and lasting relationship with my clients.</i></p>
            <h1>LET'S BUILD SOMETHING<br />AMAZING TOGETHER</h1>
            <Button variant="outline-dark mt-4">Watch Video</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Intorduction;