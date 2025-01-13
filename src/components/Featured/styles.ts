/** @format */

import { description } from '../About/Data';
/** @format */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProjectStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		fontFamily: 'Clash display',
		margin: 'auto',
		paddingTop: '64px',
		width: '90%',

		[theme.breakpoints.down('sm')]: {
			display: 'block',
			paddingTop: '5vh',
		},
	},
	sectionName: {
		fontSize: '24px',
		display: 'flex',
		justifyContent: 'center',
		fontWeight: '700',
		[theme.breakpoints.down('sm')]: {
			fontWeight: 'bold',
		},
	},
	header: {
		fontSize: '24px',
		fontWeight: '700',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'flex-start',
			fontSize: '16px',
			width: '90%',
			marginBottom: '12px',
		},
	},
	flexContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: '50px',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: 'repeat(1, 1fr)',
			gap: '50px',
		},
	},
	flexItem: {
	
	},
	cardContainer: { [theme.breakpoints.down('sm')]: {} },
	viewProject: {
		[theme.breakpoints.down('sm')]: {},
	},
	image: {
		width: '30vw',
		maxHeight: '265px',
		objectFit: 'cover',
		transition: 'transform 0.3s ease, opacity 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			opacity: 0.9,
		},
		[theme.breakpoints.down('sm')]: {
			width: '88vw',
			height: '236px',
		},
	},
	projectName: {
		fontSize: '16px',
		[theme.breakpoints.down('sm')]: {
			
		fontWeight: 'bold',
			display: 'flex',
			justifyContent: 'center',
			fontSize: '20px',
			marginTop: '12px',

			width: '360px',
		},
	},
	socialLink: {
		textDecoration: 'none',
		color: theme.palette.primary.dark,
		fontSize: '20px',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	description: {
		width: '500px',
		fontSize: '20px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			width: '360px',
			fontSize: '12px',
		},
	},
}));
