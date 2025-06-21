/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useTextAreaStyles = makeStyles((theme: Theme) => ({
	root: {
		fontFamily: 'Clash Display',
	},

	form: {
		width: '90%',
		margin: 'auto',
		marginTop: theme.spacing(6),
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(3),

		[theme.breakpoints.down('sm')]: {
			width: '100%',
			padding: theme.spacing(0, 2),
			marginTop: theme.spacing(4),
		},
	},
	textArea: {
		width: '100%',
		padding: '12px',
		fontSize: '16px',
		outline: 'none',
		fontFamily: 'inherit',
		minHeight: '50px',
		maxHeight: '70px',
		border: `1px solid ${theme.palette.mode === 'dark' ? '#ffffff' : '#121212'}`,
		background: 'transparent',
		color: theme.palette.text.primary,

		'&::placeholder': {
			color: theme.palette.text.secondary,
		},
	},

	message: {
		minHeight: '500px',
		resize: 'vertical',
	},



	formFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: theme.spacing(2),
			marginTop: theme.spacing(2),
		},
	},

	linkContainer: {
		display: 'flex',
		gap: theme.spacing(3),

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			gap: theme.spacing(1),
		},
	},

	socialInfo: {
		display: 'flex',
		alignItems: 'center',
	},

	social: {
		display: 'flex',
	},

	url: {
		textDecoration: 'none',
		fontSize: '1rem',
		fontWeight: 600,
		color: theme.palette.primary.dark,

		'&:hover': {
			color: theme.palette.primary.main,
		},

		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		},
	},

	infoText: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
		fontSize: '1rem',
		fontWeight: 500,

		[theme.breakpoints.down('sm')]: {
			fontSize: '0.85rem',
			fontWeight: 600,
		},
	},

}));
