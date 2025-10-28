'use client';

import { Language } from '@/types';
import { languageNames } from '@/lib/i18n/settings';

interface LanguageSwitchProps {
	currentLanguage: Language;
	onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitch({
	currentLanguage,
	onLanguageChange,
}: LanguageSwitchProps) {
	return (
		<div className="dropdown">
			<button
				className="btn btn-outline-secondary dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{languageNames[currentLanguage]}
			</button>
			<ul className="dropdown-menu">
				<li>
					<button
						className="dropdown-item"
						onClick={() => onLanguageChange('fa')}
					>
						{languageNames.fa}
					</button>
				</li>
				<li>
					<button
						className="dropdown-item"
						onClick={() => onLanguageChange('en')}
					>
						{languageNames.en}
					</button>
				</li>
			</ul>
		</div>
	);
}
