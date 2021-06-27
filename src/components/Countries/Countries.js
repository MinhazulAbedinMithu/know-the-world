import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const url = "https://restcountries.eu/rest/v2/all";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	return (
		<div>
			{countries.map((country) => (
				<Country country={country} key={country.alpha3Code} />
			))}
		</div>
	);
};

export default Countries;
