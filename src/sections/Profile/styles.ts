import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProfileStyles = makeStyles((theme: Theme) => ({
  '@keyframes rotateText': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },

  root: {
    fontFamily: 'Clash Display',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  Container: {
    margin: 'auto',
    width: '95vw',
    justifyContent: 'space-between',
    fontFamily: 'Clash Display',
  },

  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  headerText: {
    fontSize: '2.2rem',
    fontWeight: 600,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },

  typicalText: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    width: '100%',
    fontSize: '1.25rem',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },

  btn: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing(1.5),
    },
  },

  buttonDark: {
    color: theme.palette.primary.dark,
    background: theme.palette.primary.light,
    border: '1px solid white',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.,3),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'white',
      color: 'black',
    },
  },

  buttonLight: {
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    border: 'none',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1,3),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: theme.design.ayo.waz_black,
      color: theme.design.ayo.waz_white,
    },
  },

  imgContainer: {
    width: '100%',
  },

  img: {
    marginTop: theme.spacing(12),
    height: '50vh',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      width: '100%',
    },
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '480px',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },

  socialInfo: {
    width: '100%',
  },

  social: {
    width: '100%',
  },

  url: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
  },

  infoText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
  },
}));
