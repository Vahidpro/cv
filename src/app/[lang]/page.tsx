import { Language } from '@/types';
import { getTranslation } from '@/lib/i18n/getTranslation';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';

export async function generateStaticParams() {
	return [{ lang: 'fa' }, { lang: 'en' }];
}

interface HomePageProps {
	params: Promise<{
		lang: string;
	}>;
}

export default async function HomePage({ params }: HomePageProps) {
	const resolvedParams = await params;
	const lang = resolvedParams.lang as Language;
	const t = getTranslation(lang);

	return (
		<>
			<Hero
				t={t}
				language={lang}
			/>
			<Skills t={t} />
			<Portfolio t={t} />
		</>
	);
}
