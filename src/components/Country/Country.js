import React from "react";
import "./Country.css";
import { useHistory } from "react-router-dom";


const Country = (props) => {
	const { name, img, capital } = props.country;

	const history = useHistory();

	const handleMoreInfo = (countryName) => {
		const url = `/country/${countryName}`;
		history.push(url);
	}
	return (
		<div>
			<div className="country-card">
				<h2>{name}</h2>
				<button onClick={() => handleMoreInfo(name)}>see Details</button>
			</div>
		</div>
	);
};

export default Country;
