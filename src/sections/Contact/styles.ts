import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useContactStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: '64px',
    fontFamily: 'Clash Display',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      marginTop: theme.spacing(6),
    },
  },

  contactText: {
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },

  container: {
    width: '100%',
    maxWidth: '700px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.4,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },

  contactContainer: {
    marginTop: theme.spacing(3),
    border: '2px solid',
    borderColor:
    theme.palette.mode === 'dark'
      ? theme.palette.primary.light 
      : theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    },
  },
}));
