'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Language, Translation } from '@/types';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitch from '@/components/ui/LanguageSwitch';

interface NavbarProps {
	t: Translation;
	language: Language;
	onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ t, language, onLanguageChange }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-primary-800 bg-opacity-90 backdrop-blur-sm">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						href={`/${language}`}
						className="flex items-center"
					>
						<div className="bg-white rounded-full p-2">
							<span className="text-primary-600 font-bold text-xl">VP</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{/* Language Switch */}
						<LanguageSwitch
							currentLanguage={language}
							onLanguageChange={onLanguageChange}
						/>

						{/* Theme Toggle */}
						<ThemeToggle language={language} />

						{/* Email Button */}
						<a
							className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
							href="mailto:ivahidp@gmail.com"
						>
							{t.nav.email}
						</a>

						{/* Navigation Links */}
						<div className="flex items-center space-x-6">
							<button
								className="text-white hover:text-primary-400 transition-colors duration-300"
								onClick={() => scrollToSection('about-me')}
							>
								{t.nav.home}
							</button>
							<button
								className="text-white hover:text-primary-400 transition-colors duration-300"
								onClick={() => scrollToSection('about-me')}
							>
								{t.nav.about}
							</button>
							<button
								className="text-white hover:text-primary-400 transition-colors duration-300"
								onClick={() => scrollToSection('skills')}
							>
								{t.nav.skills}
							</button>
							<button
								className="text-white hover:text-primary-400 transition-colors duration-300"
								onClick={() => scrollToSection('portfolio')}
							>
								{t.nav.portfolio}
							</button>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-primary-800 bg-opacity-95 rounded-lg mt-2 p-4">
						<div className="flex flex-col space-y-4">
							<LanguageSwitch
								currentLanguage={language}
								onLanguageChange={onLanguageChange}
							/>
							<ThemeToggle language={language} />
							<a
								className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-center"
								href="mailto:ivahidp@gmail.com"
							>
								{t.nav.email}
							</a>
							<div className="flex flex-col space-y-2">
								<button
									className="text-white hover:text-primary-400 transition-colors duration-300 text-left"
									onClick={() => scrollToSection('about-me')}
								>
									{t.nav.home}
								</button>
								<button
									className="text-white hover:text-primary-400 transition-colors duration-300 text-left"
									onClick={() => scrollToSection('about-me')}
								>
									{t.nav.about}
								</button>
								<button
									className="text-white hover:text-primary-400 transition-colors duration-300 text-left"
									onClick={() => scrollToSection('skills')}
								>
									{t.nav.skills}
								</button>
								<button
									className="text-white hover:text-primary-400 transition-colors duration-300 text-left"
									onClick={() => scrollToSection('portfolio')}
								>
									{t.nav.portfolio}
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
