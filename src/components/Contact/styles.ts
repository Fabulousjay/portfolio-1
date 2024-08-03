/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useContactStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		marginTop: '64px',

		[theme.breakpoints.down('sm')]: {
			width: '350px',
			display: 'block',
			paddingTop: 0,
		},
	},
	contactText: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	container: {
		width: '70%',
		display: 'flex',
		flexDirection: 'column',
		fontSize: '30px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0px',
			textAlign: 'center',
			fontSize: '20px',
			fontWeight: 'bold',
			width: '100%',
		},
	},
	contactContainer: {
		border: '2px solid ',
		[theme.breakpoints.down('sm')]: {
			width: '350px',
		},
	},
	[theme.breakpoints.down('sm')]: {
		width: '350px',
	},
}));
