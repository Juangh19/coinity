/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextProps {
	theme: Theme | null;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			setTheme('dark');
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
