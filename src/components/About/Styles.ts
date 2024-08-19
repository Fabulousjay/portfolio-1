/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useAboutStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: 'auto',
		justifyContent: 'space-evenly',

		fontFamily: 'Clash display',
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '90%',
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			fontSize: '20px',
			flexDirection: 'column',
			maxWidth: 'fit-content',
			fontWeight: 'bold',
		},
		[theme.breakpoints.down('xs')]: {
			width: '50vh',
		},
	},
	text: {
		// paddingTop: '24px',
		fontSize: '24px',
		display: 'flex',
		justifyContent: 'center',
		fontWeight: '700',
	},
	content: {
		width: '60vw',
		fontSize: theme.spacing(3.5),
		marginBottom: '16px',
		[theme.breakpoints.down('sm')]: {
			width: '82vw',
			fontSize: theme.spacing(2.5),
			textAlign: 'center',
		},
	},
	button: {
		border: '1px solid #ffffff',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,
		cursor: 'pointer',
		color: theme.palette.primary.light,
		background: theme.palette.primary.dark,
		textDecoration: 'none',

		[theme.breakpoints.down('sm')]: {
			width: '170px',
			fontSize: theme.spacing(1.5),
		},
	},
	btnGroup: {
		display: 'flex',
		gap: 20,
		color: theme.palette.primary.dark,
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.spacing(1.5),
			gap: 10,
			justifyContent: 'center',
		},
	},
}));
