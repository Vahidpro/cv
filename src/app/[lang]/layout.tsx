import { Language } from '@/types';
import { ThemeProvider } from '@/lib/theme/ThemeProvider';
import ClientLayout from '@/components/layout/ClientLayout';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{
		lang: string;
	}>;
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const resolvedParams = await params;
	const language = resolvedParams.lang as Language;
	const isRTL = language === 'fa';

	return (
		<html
			lang={language}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<head>
				<meta charSet="UTF-8" />
				<meta
					httpEquiv="X-UA-Compatible"
					content="IE=edge"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="shortcut icon"
					href="/assets/logo.png"
				/>
				<title>{isRTL ? 'وحید پارسافر' : 'Vahid Parsafar'}</title>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased ${
					isRTL ? 'rtl' : 'ltr'
				}`}
			>
				<ThemeProvider>
					<ClientLayout initialLanguage={language}>{children}</ClientLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
