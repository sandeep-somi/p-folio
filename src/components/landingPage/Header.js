import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Container >
				<Row>
					<Col xs={12} sm={12} md={12} className="header-title py-3 px-0">
						<div className="title-top"><h1 className="mb-0">SSR</h1></div>
						<div className="menu-items">
							<ul className="mb-0">
								<li>Work</li>
								<li>About</li>
								<li>Resume</li>
								<li>Contact</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Header;