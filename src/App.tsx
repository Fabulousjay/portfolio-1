/** @format */

import React from 'react';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Featured from './components/Featured/Featured';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';

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
			</div>
		</Router>
	);
}
