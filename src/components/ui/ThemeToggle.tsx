'use client';

import { useTheme } from '@/lib/theme/ThemeProvider';
import { Language } from '@/types';

interface ThemeToggleProps {
	language: Language;
}

export default function ThemeToggle({ language }: ThemeToggleProps) {
	const { theme, setTheme } = useTheme();
	const isRTL = language === 'fa';

	return (
		<div className="btn-group ms-3">
			<button
				className={`btn btn-secondary btn-sm rounded-end-5 rounded-start-0 border border-primary ${
					theme === 'dark' ? 'active' : ''
				}`}
				onClick={() => setTheme('dark')}
				aria-pressed={theme === 'dark'}
			>
				{isRTL ? 'تیره' : 'Dark'}
			</button>
			<button
				className={`btn btn-primary btn-sm rounded-end-0 rounded-start-5 ${
					theme === 'light' ? 'active' : ''
				}`}
				onClick={() => setTheme('light')}
				aria-pressed={theme === 'light'}
			>
				{isRTL ? 'روشن' : 'Light'}
			</button>
		</div>
	);
}
