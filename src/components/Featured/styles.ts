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
		justifyContent: 'space-around',
		margin: 'auto',
		paddingTop: '200px',
		width: '%',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
			paddingTop: '5vh',
		},
	},
	sectionName: {
		[theme.breakpoints.down('sm')]: {
			fontWeight: 'bold',
		},
	},
	header: {
		fontSize: '24px',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'flex-start',
			fontSize: '16px',
			width: '90%',
			marginBottom: '12px',
			marginLeft: '24px',
		},
	},
	flexContainer: {
		display: 'grid',
		gridTemplateColumns: 'refpeat(2, 1fr)',
		gap: '50px',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: 'repeat(1, 1fr)',
			gap: '50px',
			marginLeft: '24px',
		},
	},
	flexItem: {},
	cardContainer: { [theme.breakpoints.down('sm')]: {} },
	viewProject: {
		[theme.breakpoints.down('sm')]: {},
	},
	image: {
		width: '500px',
		height: '380px',
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			width: '360px',
			height: ' 236px',
			objectFit: 'cover',
		},
	},
	projectName: {
		fontWeight: 'bold',
		fontSize: '16px',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'center',
			fontSize: '20px',

			margin: 'initial',
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
