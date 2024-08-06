/** @format */

import { Translate } from '@mui/icons-material';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useTextRotationStyles = makeStyles((theme: Theme) => ({
	'@keyframes rotateText': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},

	circle: {
		position: 'relative',
		height: '200px',
		marginTop: '30px',
		fontWeight: 'normal',
	},
	circularText: {
		width: '30%',
		height: '100%',
		animation: '$rotateText 8s linear infinite',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	ourSpan: {
		position: 'absolute',
		left: '50%',
		transformOrigin: '0 100px',
		fontSize: '24px',
	},
	arrow: {
		left: '15%',
		bottom: '30%',
		transform: 'translateX(-50%)',
		cursor: 'pointer',
		fontSize: '100px !important',
		position: 'absolute',
		transition: 'transform 0.3s ease-in-out',
		[theme.breakpoints.down('sm')]: {
			left: '50%',
		},
	},
	rotated: {},
	info: {},
	test: {},
	social: {},
}));
