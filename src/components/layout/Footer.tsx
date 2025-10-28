import Image from 'next/image';
import { Translation, SocialLink } from '@/types';

interface FooterProps {
	t: Translation;
	language: string;
}

const socialLinks: SocialLink[] = [
	{
		name: 'Twitter',
		url: 'https://twitter.com/Vahidpr',
		icon: '/assets/sm-icons/twitter-x-logo-black-round-20851.svg',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/iamvahidp/',
		icon: '/assets/sm-icons/Instagram.svg',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/Vahidpro',
		icon: '/assets/sm-icons/github_git_logo_social_icon.svg',
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/vahidparsafar/',
		icon: '/assets/sm-icons/linkedin_icon.svg',
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com/channel/UCqHFVQfxIYu4toJ3LIBW76g',
		icon: '/assets/sm-icons/YouTube.svg',
	},
];

export default function Footer({ t, language }: FooterProps) {
	const isRTL = language === 'fa';

	return (
		<footer className="bg-primary-subtle rounded-top-4">
			<section className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h3 className="fs-4 fw-semibold m-4">{t.footer.contact}</h3>
							<ul className="social-container container d-flex gap-3 m-2">
								{socialLinks.map((link) => (
									<li key={link.name}>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												className={`img-fluid ${
													link.name === 'Twitter' ? 'bg-white rounded-5' : ''
												}`}
												src={link.icon}
												alt={link.name}
												width={50}
												height={50}
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="row p-3 rounded-top-4 text-center pt-4">
						<div className="col-md-12">
							<div className="developer">
								<p className="mt-4">
									{t.footer.developedBy}{' '}
									<a
										href="https://x.com/Vahidpr"
										target="_blank"
										rel="noopener noreferrer"
									>
										{isRTL ? 'وحید پارسافر' : 'Vahid Parsafar'}
									</a>{' '}
									{t.footer.year}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
