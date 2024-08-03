/** @format */
import { createTheme, Theme as MuiTheme } from '@mui/material';

type ExtendedThemeOptions = {
	include: { [key: string]: any };
	styles: { [key: string]: any };
	design: {
		font: { [key: string]: any };
		ayo: { [key: string]: string };
	};
};

declare module '@mui/material/styles' {
	interface Theme extends ExtendedThemeOptions {}
	interface ThemeOptions extends ExtendedThemeOptions {}
}

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const lightTheme: any = createTheme({
	breakpoints: {
		values: {
			xs: 300,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: ['Poppins, sans-serif'].join(','),
		fontSize: 12,
		fontWeightBold: 'bold',
		h2: {
			fontSize: '3rem',
			fontWeight: 500,
		},
		h3: {},
		h4: {},
		h5: {
			fontSize: '.8rem',
			fontWeight: 500,
		},
		h6: {},
	},
	styles: {
		maxWidth: 1294,
		tabMaxWidth: 700,
	},
	palette: {
		mode: 'light',
		primary: {
			light: '#ffffff',
			main: '#38385F',
			dark: '#121212',
			contrastText: '#fff',
		},
	},
	include: {
		'@keyframes gradient': {
			from: { width: 0 },
			to: { width: '100%' },
		},
		styles: {
			template2: {
				maxWidth: 1294,
				maxWidthMd: 700,
			},
			templates: {
				maxWidth: 1440,
			},
			template4: {
				font: 'Nunito',
			},
		},
	},
	design: {
		font: {
			garamond: 'Cormorant Garamond, san-serif',
			lato: 'Lato, sans-serif',
			cookie: 'Cookie, cursive;',
			raleway: 'Raleway, sans-serif',
			dmSans: 'DM Sans, sans-serif',
			nunitoSans: 'Nunito Sans, sans-serif',
			inter: 'Inter, sans-serif',
			bitter: 'Bitter, sans-serif',
			merriweather: 'Merriweather, sans-serif',
			openSans: 'Open Sans, sans-serif',
		},
		ayo: {
			waz_primaryColor100: '#0A7227',
		},
	},
});

export const darkTheme: any = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: ['Poppins, sans-serif'].join(','),
		fontSize: 12,
		fontWeightBold: 'bold',
		h2: {
			fontSize: '3rem',
			fontWeight: 500,
		},
		h3: {},
		h4: {},
		h5: {
			fontSize: '.8rem',
			fontWeight: 500,
		},
		h6: {},
	},
	styles: {
		maxWidth: 1294,
		tabMaxWidth: 700,
	},
	palette: {
		mode: 'dark',
		primary: {
			light: '#59598E',
			main: '#38385F',
			dark: '#2E2E48',
			contrastText: '#fff',
		},
	},
	include: {
		'@keyframes gradient': {
			from: { width: 0 },
			to: { width: '100%' },
		},
		styles: {
			template2: {
				maxWidth: 1294,
				maxWidthMd: 700,
			},
			templates: {
				maxWidth: 1440,
			},
			template4: {
				font: 'Nunito',
			},
		},
	},
	design: {
		font: {
			garamond: 'Cormorant Garamond, san-serif',
			lato: 'Lato, sans-serif',
			cookie: 'Cookie, cursive;',
			raleway: 'Raleway, sans-serif',
			dmSans: 'DM Sans, sans-serif',
			nunitoSans: 'Nunito Sans, sans-serif',
			inter: 'Inter, sans-serif',
			bitter: 'Bitter, sans-serif',
			merriweather: 'Merriweather, sans-serif',
			openSans: 'Open Sans, sans-serif',
		},
		ayo: {
			waz_primaryColor100: '#0A7227',
		},
	},
});
