/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
	margin:'auto',
    padding: theme.spacing(2, 3),
    fontFamily: 'Clash Display',
    position: 'relative',
    zIndex: 1000,
  },

  navContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(2),
      textAlign: 'center',
    },
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    justifySelf: 'start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  logo: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  logoAccent: {
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.primary.main,
  },

  menu: {
    justifySelf: 'center',
  },

  menuIcon: {
    fontSize: '2.5rem !important',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },

  rightItems: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    justifySelf: 'end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  menuContainer: {
    animation: '$fadeIn 0.4s ease-in-out forwards',
    marginTop: theme.spacing(2),
  },

  unorderedList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    alignItems: 'center',
  },

  navLinkLight: {
    color: '#121212',
    fontWeight: 600,
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateX(5px)',
    },
  },

  navLinkDark: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: theme.palette.secondary.main,
      transform: 'translateX(5px)',
    },
  },

  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));
