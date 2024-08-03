/** @format */

import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from './ThemeContext';

const ThemeToggle: React.FC = () => {
	const { darkMode, toggleDarkMode } = useThemeContext();

	const handleClick = () => {
		toggleDarkMode();
	};
	return (
		<div>
			<button
				onClick={handleClick}
				style={{
					background: 'transparent',
					borderColor: 'transparent',
					height: '2.5rem',
					cursor: 'pointer',
				}}>
				{darkMode ? (
					<DarkModeIcon
						style={{
							color: darkMode ? '#ffffff' : '#121212',
							borderRadius: '50%',
							fontSize: '20px',
						}}
					/>
				) : (
					<LightModeIcon
						style={{
							color: darkMode ? '#ffffff' : '#121212',
							borderRadius: '50%',
							fontSize: '20px',
						}}
					/>
				)}
			</button>
		</div>
	);
};

export default ThemeToggle;
