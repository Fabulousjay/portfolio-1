/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFooterStyles = makeStyles((theme: Theme) => ({
  line: {
    marginTop: theme.spacing(10),
    borderColor: theme.palette.mode === 'dark' ? '#fff' : '#121212',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2, 4),
    fontSize: '1rem',
    fontFamily: 'Clash Display',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      fontSize: '0.75rem',
      textAlign: 'center',
      gap: theme.spacing(1),
    },
  },
  footerName: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontWeight: 600,
  },
  moreInfo: {
    fontWeight: 500,
  },
}));
