'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
	text: string;
	delay?: number;
	className?: string;
}

export default function TypingText({
	text,
	delay = 200,
	className = '',
}: TypingTextProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, delay);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, delay]);

	useEffect(() => {
		// Reset typing animation when text changes
		const resetAnimation = () => {
			setDisplayedText('');
			setCurrentIndex(0);
		};
		resetAnimation();
	}, [text]);

	return <span className={className}>{displayedText}</span>;
}
