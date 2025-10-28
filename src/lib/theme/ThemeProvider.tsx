'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>('light');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const initializeTheme = () => {
			const storedTheme = localStorage.getItem('theme') as Theme;
			const preferredTheme =
				storedTheme ||
				(window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light');

			setThemeState(preferredTheme);
			setMounted(true);
		};
		initializeTheme();
	}, []);

	useEffect(() => {
		if (mounted) {
			localStorage.setItem('theme', theme);
			document.documentElement.setAttribute('data-theme', theme);
			document.documentElement.className = theme;
		}
	}, [theme, mounted]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
	};

	const toggleTheme = () => {
		setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	if (!mounted) {
		return null;
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
