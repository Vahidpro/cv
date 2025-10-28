import { Language } from '@/types';

export const languages: Language[] = ['fa', 'en'];
export const defaultLanguage: Language = 'fa';

export const languageNames = {
	fa: 'فارسی',
	en: 'English',
} as const;
