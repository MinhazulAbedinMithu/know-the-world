import React from "react";
import "./Country.css";
import { useHistory } from "react-router-dom";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkedAlt,
	faGlobeAsia,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Country = (props) => {
	const { name, flag, capital, region, area, population } = props.country;

	const history = useHistory();

	const handleMoreInfo = (countryName) => {
		const url = `/country/${countryName}`;
		history.push(url);
	};

	return (
		<Col md={4} className="my-3">
			<Card className="country-card">
				<div className="card-img-box">
					<Card.Img variant="top" src={flag} className="card-img" />
				</div>
				<Card.Body className="card-body">
					<Card.Title className="card-title">{name}</Card.Title>
				</Card.Body>
				<ListGroup className="list-group-flush card-list">
					<ListGroupItem className="card-item">
						<FontAwesomeIcon icon={faMapMarkedAlt} /> <b>Capital:</b>{" "}
						<span className="card-item-span">{capital}</span>
					</ListGroupItem>

					<ListGroupItem className="card-item">
						<FontAwesomeIcon icon={faGlobeAsia} />
						<b> Area: </b>
						<span className="card-item-span">
							{area} km <sup>2</sup>
						</span>
					</ListGroupItem>

					<ListGroupItem className="card-item">
						<FontAwesomeIcon icon={faUsers} />
						<b> Population: </b>{" "}
						<span className="card-item-span">{population}</span>
					</ListGroupItem>
				</ListGroup>
				<Card.Footer className="card-footer">
					<Button variant="warning" onClick={() => handleMoreInfo(name)}>
						see Details
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default Country;
