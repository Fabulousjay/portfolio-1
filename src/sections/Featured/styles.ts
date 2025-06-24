/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFeaturedStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '90%',
    margin: 'auto',
    fontFamily: 'Clash Display',
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5),
    },
  },

  sectionName: {
    fontSize: '1.5rem',
    fontWeight: 700,
    textAlign: 'left',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  },

  flexContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(4),
    },
  },

  cardContainer: {
    backgroundColor: theme.palette.mode === 'dark' ? '#1f1f1f' : '#f9f9f9',
    padding: theme.spacing(2),
    transition: 'all 0.4s ease-in-out',
    borderRadius: theme.spacing(1),
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'scale(1.015)',
    },
  },

  flexItem: {
    width: '100%',
  },

  image: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
    transition: 'transform 0.35s ease, opacity 0.35s ease',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: 220,
    },
  },

  projectName: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      textAlign: 'center',
    },
  },

  socialLink: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    color: theme.palette.primary.dark,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  statusBadge: {
    display: 'inline-block',
    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#e0e0e0',
    color: theme.palette.mode === 'dark' ? '#fff' : '#333',
    fontSize: '0.75rem',
    fontWeight: 500,
    padding: '4px 8px',
    borderRadius: '12px',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    width: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },

  viewProject: {
    marginTop: theme.spacing(1.5),
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
    },
  },
}));
