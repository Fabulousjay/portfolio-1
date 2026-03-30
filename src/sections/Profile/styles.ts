import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProfileStyles = makeStyles((theme: Theme) => ({

  root: {
    fontFamily: 'Clash Display',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  Container: {
    margin: 'auto',
    width: '95vw',
  },

  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  /* LEFT SIDE */
  headerText: {
    fontSize: '2.2rem',
    fontWeight: 600,
    width: '50%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1.8rem',
    },
  },

  typicalText: {
    marginTop: theme.spacing(1),
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
    },
  },

  buttonDark: {
    color: theme.palette.primary.dark,
    background: theme.palette.primary.light,
    border: '1px solid white',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 3),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.3s',

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
    padding: theme.spacing(1, 3),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.3s',

    '&:hover': {
      background: theme.design.ayo.waz_black,
      color: theme.design.ayo.waz_white,
    },
  },

  /* RIGHT SIDE */
  imgContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(4),
    },
  },

  img: {
    width: '100%',
    maxWidth: '520px',
    height: 'auto',
    display: 'block',
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '420px',
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
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
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.125rem',
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
  },

}));