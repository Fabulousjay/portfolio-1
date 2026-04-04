import React from 'react';
import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}