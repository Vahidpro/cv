import Image from 'next/image';
import { Translation } from '@/types';

interface PortfolioProps {
	t: Translation;
}

export default function Portfolio({ t }: PortfolioProps) {
	return (
		<section
			id="portfolio"
			className="py-20"
		>
			<div className="container mx-auto px-4">
				{/* Portfolio Title */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-white bg-primary-800 px-6 py-3 rounded-2xl inline-block">
						{t.portfolio.title}
					</h2>
				</div>

				{/* Coming Soon Message */}
				<div className="text-center mb-12">
					<p className="bg-red-500 bg-opacity-30 text-red-400 px-6 py-3 rounded-2xl font-bold inline-block">
						❇️ {t.portfolio.comingSoon}
					</p>
				</div>

				{/* Portfolio Items */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{t.portfolio.items.map((item, index) => (
						<div
							key={index}
							className="bg-primary-800 bg-opacity-50 p-6 rounded-2xl hover:bg-opacity-70 transition-all duration-300 group"
						>
							<a
								target="_blank"
								href={item.link}
								rel="noopener noreferrer"
								className="block"
							>
								<div className="mb-4">
									<Image
										className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
										src={item.image}
										alt={item.alt}
										width={400}
										height={200}
									/>
								</div>
								<h3 className="text-center text-white font-bold text-xl group-hover:text-primary-400 transition-colors duration-300">
									{item.title}
								</h3>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
