import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Vahid Parsafar - Portfolio',
	description: "Vahid Parsafar's portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
