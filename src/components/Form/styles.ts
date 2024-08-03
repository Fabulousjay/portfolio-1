/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useTextAreaStyles = makeStyles((theme: Theme) => ({
	root: {},
	form: {
		width: '90%',
		margin: 'auto',
		marginTop: '50px',

		[theme.breakpoints.down('sm')]: {
			width: '300px',
			marginTop: '20px',
		},
	},
	textArea: {
		width: '100%',
		padding: '8px',
		fontSize: '16px',
		outline: 'none',
		fontFamily: 'inherit',
		minHeight: '50px',
		maxHeight: '70px',
		border: '1px solid #121212',
	},

	linkContainer: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
		},
	},
	socialInfo: {},
	social: {},
	url: { textDecoration: 'none', color: 'black', fontSize: '20px' },
	formFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},

	infoText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			fontWeight: 'bold',
		},
	},
}));
