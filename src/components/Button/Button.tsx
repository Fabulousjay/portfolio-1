/** @format */

import { useThemeContext } from '../../contexts/ThemeContext';
import { useButtonStyles } from './styles';
import { useContext } from 'react';

const LightButton = (props: any) => {
	const classes = useButtonStyles();
	const { darkMode } = useThemeContext();

	return (
		<div className={classes.root}>
			<button className={darkMode ? classes.button : classes.buttonLight}>
				{props.text}
			</button>
		</div>
	);
};

export default LightButton;

export const DarkButton = (props: any) => {
	const classes = useButtonStyles();

	const { darkMode } = useThemeContext();

	return (
		<div className={classes.root}>
			<button className={darkMode ? classes.buttonLight : classes.button}>
				{props.text}
			</button>
		</div>
	);
};
