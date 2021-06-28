import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../image/logo.png";
const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img src={logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto nav-ul" >
						<Nav.Link href="/countries" >Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
