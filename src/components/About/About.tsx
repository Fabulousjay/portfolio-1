/** @format */

import { useAboutStyles } from './Styles';
import { description } from './Data';
import { DarkButton } from '../Button/Button';
import { useThemeContext } from '../../contexts/ThemeContext';

const About = () => {
	const classes = useAboutStyles();
	const { darkMode } = useThemeContext();

	return (
		<div
			className={classes.root}
			id="about">
			<div className={classes.container}>
				<p className={classes.text}>About</p>{' '}
				<div
					className={classes.content}
					style={{ fontWeight: 400 }}>
					<p>{description.topParagraph}</p>
					<p>{description.bottomParagraph}</p>
					<div className={classes.btnGroup}>
						<a
							href="#contact"
							className={classes.button}>
							Let's talk{' '}
						</a>
						
						<DarkButton text="View resume" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
