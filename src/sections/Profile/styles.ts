import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProfileStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Clash Display',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  container: {
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

  headerText: {
    fontSize: '2.2rem',
    fontWeight: 600,
    width: '45%',
    paddingTop: '20px',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1.8rem',
    },
  },

  typicalText: {
    marginTop: theme.spacing(1),
    fontSize: '1.5rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
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

  button: {
    color: theme.palette.background.default,
    background: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 3),
    fontFamily: theme.design.font.openSans,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',

    '&:hover': {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  },

  imgContainer: {
    width: '55%',
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
    height: '460px',
    objectFit: 'cover',
    display: 'block',
  },

  info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      gap: theme.spacing(1.5),
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
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',

    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },

  infoText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      gap: '8px',
    },
  },

  dash: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
