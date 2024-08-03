/** @format */

import { useNavStyles } from './styles';
import { link } from './NavData';
import { FC, useRef, useState } from 'react';
import { Close, DragHandle } from '@mui/icons-material';
import { NavTypes } from './types';
import Themetoggle from '../../contexts/ThemeToggle';
import Clock from '../Clock/Clock';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext';

const NavBar: FC<NavTypes> = () => {
	const { darkMode, toggleDarkMode } = useThemeContext();
	const classes = useNavStyles();
	const linksContainerRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);

	const [showLinks, setShowLinks] = useState(false);

	const toggleLinks = () => {
		console.log(linksRef.current?.getBoundingClientRect());
		setShowLinks(!showLinks);
	};

	return (
		<div className={classes.root}>
			<Link
				to="/"
				style={{ color: darkMode ? '#fff' : '#000' }}
				className={classes.navContainer}>
				<span style={{ display: 'flex' }}>
					<h1>F</h1>
					<h1 className={classes.logo}>J</h1>
				</span>

				<div className={classes.menu}>
					{showLinks ? (
						<Close
							className={classes.menuIcon}
							onClick={toggleLinks}
						/>
					) : (
						<DragHandle
							className={classes.menuIcon}
							onClick={toggleLinks}
						/>
					)}
				</div>
				<div className={classes.left}>
					<Clock />
					<Themetoggle />
				</div>
			</Link>

			{showLinks && (
				<>
					<div
						className={classes.menuContainer}
						ref={linksContainerRef}>
						<ul
							className={classes.unorderedList}
							ref={linksRef}>
							{link.map((link) => {
								return (
									<li key={link.id}>
										<Link
											className={
												darkMode ? classes.navLinkDark : classes.navLinkLight
											}
											to={link.url}>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default NavBar;
