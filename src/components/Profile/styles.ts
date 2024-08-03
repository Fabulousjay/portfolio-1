/** @format */

import { Translate } from '@mui/icons-material';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProfileStyles = makeStyles((theme: Theme) => ({
	'@keyframes rotateText': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
	root: {
		height: '100vh',
		fontFamily: 'Clash Display',
		marginTop: '100px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			height: '75vh',
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			height: '90vh',
		},
	},

	profileContainer: {},
	Container: {
		margin: 'auto',
		width: '90%',
		justifyContent: 'space-between',
		fontFamily: 'Clash Display',
	},
	textContainer: {
		flexDirection: 'column',
		width: '80%',
	},
	headerText: {
		fontSize: '72px',
		fontWeight: 600,
		width: '100%',

		[theme.breakpoints.down('sm')]: {
			fontSize: '36px',
		},
	},
	typicalText: {
		position: 'relative',
		overflow: 'hidden',
		display: 'inline-block',
		width: '100%',
		fontSize: '24px',
		fontWeight: 'normal',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
	},
	btn: {
		display: 'flex',
		gap: 20,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-around',
		},
	},
	description: {
		fontSize: '24px',
		width: '80%',
	},
	buttonDark: {
		background: theme.design.ayo.waz_black,
		color: theme.design.ayo.waz_white,
		border: '2px solid white',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,
		cursor: 'pointer',

		'&:hover': {
			color: 'black',
			background: 'white',
		},

		[theme.breakpoints.down('sm')]: {
			fontSize: theme.spacing(1.5),
		},
	},
	buttonLight: {
		border: 'none',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,

		'&:hover': {
			color: theme.design.ayo.waz_white,
			background: theme.design.ayo.waz_black,
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(1, 3),
		},
	},

	hero: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	imgContainer: { width: '100%' },
	img: {
		marginTop: '100px',
		height: '50vh',
		width: ' 100%',
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			marginTop: '20px',
			width: '90vw',
		},
	},

	ourSpan: {
		left: '50%',
		transformOrigin: '0 100px',
		fontSize: '24px',
	},

	info: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '480px',
		[theme.breakpoints.down('sm')]: { width: '300px', marginLeft: '30px' },
	},
	test: {},
	dash: { width: '20px' },

	socialInfo: {},
	social: { width: '100%' },
	url: { textDecoration: 'none', color: theme.palette.primary.dark },

	infoText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 'bold',

		[theme.breakpoints.down('sm')]: { fontSize: '16px' },
	},
}));
