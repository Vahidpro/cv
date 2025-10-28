'use client';

import { useState, useEffect } from 'react';
import { Language, Translation } from '@/types';
import faTranslations from './translations/fa.json';
import enTranslations from './translations/en.json';

const translations: Record<Language, Translation> = {
	fa: faTranslations,
	en: enTranslations,
};

export function useTranslation(language: Language) {
	const [t, setT] = useState<Translation>(translations[language]);

	useEffect(() => {
		setT(translations[language]);
	}, [language]);

	return t;
}
