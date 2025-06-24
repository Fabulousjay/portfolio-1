/** @format */

import React from 'react';
import { link } from './FeaturedData';
import { useThemeContext } from '../../contexts/ThemeContext';
import LightButton from '../../components/Button/Button';
import { useFeaturedStyles } from './styles';

const Featured: React.FC = () => {
	const classes = useFeaturedStyles();
	const { darkMode } = useThemeContext();

	return (
		<section className={classes.root} id="work">
			<div className={classes.sectionName}>Featured Work</div>
			<div className={classes.flexContainer}>
				{link.map((item) => {
					const { id, name, image, text, url, status } = item;
					return (
						<section className={classes.cardContainer} key={id}>
							<article className={classes.flexItem}>
								<div>
									<img
										className={classes.image}
										src={image}
										alt={name}
									/>
									<a
										href={url}
										className={classes.socialLink}
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: darkMode ? '#ffffff' : '#000000' }}
									>
										<h4 className={classes.projectName}>{name}</h4>
										{status && (
											<p className={classes.statusBadge}>
												{status}
											</p>
										)}
										<p>{text}</p>
										<LightButton
											text="View Project"
											className={classes.viewProject}
										/>
									</a>
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
