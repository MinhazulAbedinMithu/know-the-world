import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";

function App() {
	return (
		<Router>
			<Header />
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
