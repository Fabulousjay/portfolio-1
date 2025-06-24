/** @format */

import React from 'react';
import About from './sections/About/About';
import NavBar from './sections/NavBar/NavBar';
import Profile from './sections/Profile/Profile';
import Featured from './sections/Featured/Featured';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function App() {
	return (

		<Router>
			<div>
				<NavBar
					url={''}
					title={''}
					id={0}
				/>
				<Profile />
				<About />
				<Featured />
				<Contact />
				<Footer />
				<ToastContainer />
			</div>
		</Router>
	);
}
