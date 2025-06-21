import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useAboutStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 'auto',
    fontFamily: 'Clash Display',
    padding: theme.spacing(6, 0),
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
	marginTop:0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
      textAlign: 'center',
    },
  },

  content: {
    width: '60%',
    fontSize: '1.125rem',
    lineHeight: 1.8,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
      fontSize: '1rem',
    },
  },

  paragraph: {
    fontWeight: 400,
    lineHeight: 1.75,
  },

  btnGroup: {
    display: 'flex',
    gap: theme.spacing(2.5),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1.5),
    },
  },

  button: {
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: theme.design.font.openSans,
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
	border:'solid 1px ',

    '&:hover': {
      background: theme.design.ayo.waz_black,
      color: theme.design.ayo.waz_white,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
      padding: theme.spacing(1, 3),
    },
  },
}));
