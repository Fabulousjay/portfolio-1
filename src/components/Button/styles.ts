/** @format */

import { lightTheme } from './../../theme';
/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useButtonStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		gap: 20,
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.spacing(1.5),
		},
	},

	button: {
		border: '1px solid black',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,
		cursor: 'pointer',
		color: theme.palette.primary.light,
		background: theme.palette.primary.dark,

		'&:hover': {
			color: 'black',
			background: 'white',
		},

		[theme.breakpoints.down('sm')]: {
			width: '170px',
			fontSize: theme.spacing(1.5),
		},
	},
	buttonLight: {
		border: '1px solid white',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,
		color: theme.palette.primary.dark,
		background: theme.palette.primary.light,

		'&:hover': {},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(1, 3),
		},
	},

	contactUs: {},
}));
