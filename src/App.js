import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/countries" component={Countries} />
				<Route exact path="/" component={Countries} />
				<Route path="/country/:countryName" component={CountryDetails} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default App;
