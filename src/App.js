import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/common/Footer/Footer";
import Home from "./views/Home";
import Prices from "./views/Prices";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";

function App() {
	return (
		<>
			<div className='App'>
				<NavBar className='fixed-top' />
				<Router>
					<Switch>
						<Route path='/' element={<Home />} />
						<Route path='/prices' element={<Prices />} />
						<Route path='/aboutus' element={<AboutUs />} />
						<Route path='/contact' element={<Contact />} />
					</Switch>
				</Router>
				<Footer />
			</div>
		</>
	);
}

export default App;
