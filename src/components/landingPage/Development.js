import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Development = () => {
  const content = "Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).";

  return (
    <div className="dev-wrapper">
      <Container >
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
              <h1>Front-End | ReactJS | React-Native</h1>
              <h2>{content}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Development;