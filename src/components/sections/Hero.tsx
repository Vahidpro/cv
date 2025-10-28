'use client';

import Image from 'next/image';
import { Translation } from '@/types';
import TypingText from '@/components/ui/TypingText';

interface HeroProps {
	t: Translation;
	language: string;
}

export default function Hero({ t, language }: HeroProps) {
	const isRTL = language === 'fa';

	return (
		<header className="min-h-screen flex items-center justify-center py-20">
			<div className="container mx-auto px-4">
				{/* Hero Text Section */}
				<div className="text-center mb-12">
					<h4 className="text-xl text-white mb-4">
						<TypingText
							text={t.greeting}
							delay={30}
						/>
					</h4>
					<h1 className="text-6xl font-bold text-white mb-4">
						<TypingText
							text={t.name}
							delay={160}
						/>
					</h1>
					<span className="text-3xl text-white">
						<TypingText
							text={t.role}
							delay={120}
						/>
					</span>
				</div>

				{/* Development Notice */}
				<div className="text-center mb-16">
					<p className="bg-green-500 bg-opacity-30 text-green-400 px-6 py-3 rounded-2xl font-bold inline-block">
						{t.developmentNotice}
					</p>
				</div>

				{/* Main Content */}
				<div
					className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
						isRTL ? 'rtl' : 'ltr'
					}`}
				>
					{/* Hero Image */}
					<div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
						<div className="flex justify-center">
							<Image
								className="max-w-full h-auto"
								src="/assets/hero-image.svg"
								alt="hero-image"
								width={600}
								height={500}
								priority
							/>
						</div>
					</div>

					{/* About Section */}
					<div
						className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
						id="about-me"
					>
						<div className="bg-primary-800 bg-opacity-50 px-6 py-4 rounded-2xl text-center mb-6">
							<h2 className="text-3xl font-bold text-white">{t.about.title}</h2>
						</div>
						<p className="text-white text-lg leading-relaxed text-justify">
							{t.about.description}
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
