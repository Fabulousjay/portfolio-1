/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFooterStyles = makeStyles((theme: Theme) => ({
	line: {
		marginTop: '100px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '30px',
		},
	},
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		fontSize: '20px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
	footerName: { display: 'flex', alignItems: 'center' },
	moreInfo: {},
}));
