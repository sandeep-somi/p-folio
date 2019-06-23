import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const data = [
  {
    id: 100,
    icon: require('../../assets/images/web-apps.png'),
    label: 'Web-Apps',
    description: 'These are exclusively made with reactjs, javascript, scss, html5 and will offer custom design options with easy to understand instructions.'
  },
  {
    id: 101,
    icon: require('../../assets/images/mobile-apps.png'),
    label: 'Mobile-Apps',
    description: 'These are exclusively made with reactjs, react-native, highly compatible with all kind of mobile, tablet, notebooks, chromebooks etc.'
  },
  {
    id: 102,
    icon: require('../../assets/images/tips-tricks.png'),
    label: 'Tips, Trics and More',
    description: 'Try to solve real time problem with different angles and aspects and then sum up performance and then choose the best option depending upon the circumstances.'
  }
]

const Services = () => {

  const renderServices = (item) => {
    return (
      <Col xs={12} sm={4} md={4} key={item.id}>
        <img src={item.icon} alt="" />
      </Col>
    )
  }

  return (
    <div className="services-wrapper">
      <Container >
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div>
              <h2>I provide high quality javascript, reactjs, react-native applications, landing pages, tips and more.</h2>
              <Row>
                {data.map(renderServices)}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services;