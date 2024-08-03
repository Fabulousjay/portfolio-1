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
			marginTop: '36vh',
		},
		[theme.breakpoints.down('xs')]: {
			width: '50vh',
		},
	},
	text: {
		paddingTop: '24px',
		fontSize: '24px',
		display: 'flex',
		justifyContent: 'center',
	},
	content: {
		width: '65%',
		fontSize: '40px',
		marginBottom: '16px',
		[theme.breakpoints.down('sm')]: {
			width: '82vw',
			fontSize: theme.spacing(2.5),
			textAlign: 'center',
		},
	},

	btnGroup: {
		display: 'flex',
		gap: 20,
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.spacing(1.5),
			gap: 10,
		},
	},
}));
