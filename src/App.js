import React from "react";
import HomePage from "./layout/homepage/HomePage";
import ShopPage from "./layout/shop/ShopPage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				{/* <Route exact path="/shop/hats" component={HomePage} />
				<Route exact path="/shop/jackets" component={HomePage} />
				<Route exact path="/shop/sneakers" component={HomePage} />
				<Route exact path="/shop/womens" component={HomePage} />
				<Route exact path="/shop/mens" component={HomePage} /> */}
			</Switch>
		</div>
	);
}

export default App;
