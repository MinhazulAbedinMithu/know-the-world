import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
	const { countryName } = useParams();
	const [countryDetails, setCountryDetails] = useState([]);

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCountryDetails(data[0]));
	}, []);
	const { name, alpha3Code, capital } = countryDetails;
	return (
		<div>
			<h2>Name: {name}</h2>
			<p>capital: {capital}</p>
			<p>alpha3Code: {alpha3Code}</p>
		</div>
	);
};

export default CountryDetails;
