'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/types';
import { useTranslation } from '@/lib/i18n/useTranslation';
import Navbar from './Navbar';
import Footer from './Footer';

interface ClientLayoutProps {
	children: React.ReactNode;
	initialLanguage: Language;
}

export default function ClientLayout({
	children,
	initialLanguage,
}: ClientLayoutProps) {
	const [language, setLanguage] = useState<Language>(initialLanguage);
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslation(language);

	// Note: Document attributes are now handled server-side to prevent hydration mismatches

	const handleLanguageChange = (newLang: Language) => {
		setLanguage(newLang);
		const newPath = pathname.replace(`/${initialLanguage}`, `/${newLang}`);
		router.push(newPath);
	};

	return (
		<>
			<Navbar
				t={t}
				language={language}
				onLanguageChange={handleLanguageChange}
			/>
			<main>{children}</main>
			<Footer
				t={t}
				language={language}
			/>
		</>
	);
}
