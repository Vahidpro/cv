import { Translation } from '@/types';
import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaJs,
	FaReact,
	FaGitAlt,
	FaGithub,
	FaSass,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const iconMap = {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaJs,
	SiTypescript,
	FaReact,
	SiNextdotjs,
	FaGitAlt,
	FaGithub,
	FaSass,
};

interface SkillsProps {
	t: Translation;
}

export default function Skills({ t }: SkillsProps) {
	return (
		<section
			id="skills"
			className="py-5"
		>
			<div className="container">
				<div className="text-center mb-5">
					<h2 className="text-4xl font-bold text-white bg-primary-800 px-6 py-3 rounded-2xl inline-block">
						{t.skills.title}
					</h2>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
					{t.skills.items.map((skill, index) => {
						const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
						return (
							<div
								key={index}
								className="flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300"
							>
								<div className="text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
									<IconComponent size={64} />
								</div>
								<span className="text-white font-semibold text-sm group-hover:text-primary-400 transition-colors duration-300">
									{skill.name}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
