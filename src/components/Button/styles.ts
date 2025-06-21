import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacing(2.5),
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1.5),
    },
  },

button: {
    padding: theme.spacing(1, 2),
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: theme.design.font.openSans,
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    border: '1px solid white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',

    '&:hover': {
      background: theme.design.ayo.waz_black,
      color: theme.design.ayo.waz_white,
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1rem',
      padding: theme.spacing(1, 3),
    },
  },

  buttonLight: {
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
	border:"solid 1px #ffffff",

    '&:hover': {
      color: theme.palette.primary.dark,
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1rem',
      padding: theme.spacing(1, 3),
    },
  },

  contactUs: {},
}));
