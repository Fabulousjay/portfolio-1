/** @format */

import React from 'react';
import { link } from './FeaturedData';
import { useProjectStyles } from './styles';
import LightButton from '../Button/Button';
import { useThemeContext } from '../../contexts/ThemeContext';

const Featured: React.FC = () => {
	const classes = useProjectStyles();
	const { darkMode } = useThemeContext();

	return (
		<section
			className={classes.root}
			id="work">
			<div className={classes.sectionName}>
				<p className={classes.header}>Featured Work</p>
			</div>
			<div className={classes.flexContainer}>
				{link.map((item) => {
					const { id, name, image, text, url } = item;
					return (
						<section
							className={classes.cardContainer}
							key={id}>
							<article className={classes.flexItem}>
								<div>
									<img
										className={classes.image}
										src={image}
										alt={text}
									/>
									<a
										href={url}
										className={classes.socialLink}
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: darkMode ? '#ffffff' : '#000000' }}>
										<p className={classes.projectName}>{name}</p>
										<LightButton
											text="View Project"
											className={classes.viewProject}
										/>
									</a>
									{/* <p className={classes.description}>{text}</p> */}
								</div>
							</article>
						</section>
					);
				})}
			</div>
		</section>
	);
};

export default Featured;
