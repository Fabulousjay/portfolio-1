/** @format */
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { darkTheme, lightTheme } from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

type ContextProps = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const CustomThemeContext = createContext<ContextProps | undefined>(undefined);

export const useThemeContext = (): ContextProps => {
	const context = useContext(CustomThemeContext);
	if (!context) {
		throw new Error('Error');
	}
	return context;
};

type ThemeContextProviderProps = {
	children: ReactNode;
};

export const ThemeContextProvider = ({
	children,
}: ThemeContextProviderProps) => {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

	return (
		<CustomThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};
