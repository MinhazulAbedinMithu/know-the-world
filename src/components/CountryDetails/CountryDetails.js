import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

const CountryDetails = () => {
	const { countryName } = useParams();
	const [countryDetails, setCountryDetails] = useState([]);

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCountryDetails(data[0]));
	}, []);
	const {
		nativeName,
		name,
		area,
		alpha3Code,
		capital,
		region,
		subregion,
		population,
		borders,
		regionalBlocs,
		latlng,
		gini,
		flag,
	} = countryDetails;

	// let bordersCountry = borders.join(" ");
	// console.log(bordersCountry);
	// console.log(regionalBlocs[0].acronym);
	// <td>{borders.join(" ")}</td>
	// <td>
	// 	{regionalBlocs[0].acronym} - {regionalBlocs[0].name}
	// </td>;
	return (
		<Container>
			<Row>
				<Col md={12} className="details-header text-center py-4">
					<h2>{name}</h2>
					<p>{nativeName}</p>
					<img src={flag} alt="country flag" />
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<div className="geo text-center">
						<h3>Geographic Information</h3>
						<Table striped bordered hover size="sm">
							<tbody>
								<tr>
									<td>1</td>
									<th>Region</th>
									<td>{region}</td>
								</tr>
								<tr>
									<td>2</td>
									<th>SubRegion</th>
									<td>{subregion}</td>
								</tr>
								<tr>
									<td>3</td>
									<th>Capital</th>
									<td>{capital}</td>
								</tr>
								<tr>
									<td>4</td>
									<th>Area</th>
									<td>
										{area} km<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<th>Population</th>
									<td>{population}</td>
								</tr>
								<tr>
									<td>7</td>
									<th>Gini</th>
									<td>{gini}</td>
								</tr>
								<tr>
									<td>6</td>
									<th>Borders</th>
								</tr>
								<tr>
									<td>8</td>
									<th>RegionalBlocs</th>
								</tr>
							</tbody>
						</Table>
					</div>
				</Col>
				<Col md={6}>
					<div className="geo text-center">
						<h3>Geographic Information</h3>
						<Table striped bordered hover size="sm">
							<tbody>
								<tr>
									<td>1</td>
									<th>Region</th>
									<td>{region}</td>
								</tr>
								<tr>
									<td>2</td>
									<th>SubRegion</th>
									<td>{subregion}</td>
								</tr>
								<tr>
									<td>3</td>
									<th>Capital</th>
									<td>{capital}</td>
								</tr>
								<tr>
									<td>4</td>
									<th>Area</th>
									<td>
										{area} km<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<th>Population</th>
									<td>{population}</td>
								</tr>
								<tr>
									<td>7</td>
									<th>Gini</th>
									<td>{gini}</td>
								</tr>
								<tr>
									<td>6</td>
									<th>Borders</th>
								</tr>
								<tr>
									<td>8</td>
									<th>RegionalBlocs</th>
								</tr>
							</tbody>
						</Table>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CountryDetails;
