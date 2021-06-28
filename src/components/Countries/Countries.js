import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";
import { Container, Row } from "react-bootstrap";
import LoadingSpinner from "../LodingSpinner/LoadingSpinner";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const url = "https://restcountries.eu/rest/v2/all";
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCountries(data);
				setLoading(true);
			});
	}, []);

	return (
		<Container>
			{loading ? (
				<Row className="equal">
					{countries.map((country) => (
						<Country country={country} key={country.alpha3Code} />
					))}
				</Row>
			) : (
				<LoadingSpinner />
			)}
		</Container>
	);
};

export default Countries;
