export interface Translation {
	greeting: string;
	name: string;
	role: string;
	about: {
		title: string;
		description: string;
	};
	skills: {
		title: string;
		items: Skill[];
	};
	portfolio: {
		title: string;
		comingSoon: string;
		items: PortfolioItem[];
	};
	footer: {
		contact: string;
		developedBy: string;
		year: string;
	};
	nav: {
		home: string;
		about: string;
		skills: string;
		portfolio: string;
		email: string;
	};
	developmentNotice: string;
}

export interface Skill {
	name: string;
	icon: string;
}

export interface PortfolioItem {
	title: string;
	image: string;
	link: string;
	alt: string;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';
