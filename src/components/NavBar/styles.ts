/** @format */

/** @format */

import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useNavStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '90%',
		margin: 'auto',
		alignItems: 'center',
		fontFamily: 'Clash Display',

		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},

	navContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: theme.palette.primary.dark,

		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-around',
			width: '100%',
		},
	},
	navLinkLight: {
		display: 'flex',
		justifyContent: 'center',
		color: '#121212',
		fontWeight: 600,
		fontSize: '64px',
		zIndex: 1,
		textDecoration: 'none',
		'&:hover': {},
		[theme.breakpoints.down('sm')]: {
			fontSize: '44px',
			marginTop: '0px',
		},
	},

	navLinkDark: {
		display: 'flex',
		justifyContent: 'center',
		color: '#ffffff',
		fontWeight: 600,
		fontSize: '64px',
		zIndex: 1,
		textDecoration: 'none',

		'&:hover': {},
		[theme.breakpoints.down('sm')]: {
			fontSize: '44px',
			marginTop: '0px',
		},
	},
	logo: { display: 'flex', marginTop: '25px' },
	menu: {
		display: 'flex',
		justifyContent: 'center',
	},
	menuIcon: {
		fontSize: '50px !important',
		cursor: 'pointer',
		transition: 'transform 0.3s ease',
	},
	left: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},
	time: {},
	menuContainer: {
		position: 'relative',
		zIndex: 1,
		width: '100%',
	},
	unorderedList: {
		display: 'initial',
		listStyle: 'none',

		[theme.breakpoints.down('sm')]: {},
	},

	logoName: {
		width: theme.spacing(30),
		paddingLeft: theme.spacing(12),
	},
	link: {
		textDecoration: 'none',
		fontWeight: 600,
		fontSize: '64px',
		zIndex: 1,
		'&:hover': {
			color: theme.palette.secondary.main,
		},
	},
}));
