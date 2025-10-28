import { Language, Translation } from '@/types';
import faTranslations from './translations/fa.json';
import enTranslations from './translations/en.json';

const translations: Record<Language, Translation> = {
	fa: faTranslations,
	en: enTranslations,
};

export function getTranslation(language: Language): Translation {
	return translations[language];
}
