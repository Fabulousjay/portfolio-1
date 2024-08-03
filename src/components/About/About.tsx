/** @format */

import { useAboutStyles } from './Styles';
import { description } from './Data';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';
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
						<LightButton
							text="Let's talk"
							style={{
								color: darkMode ? '#121212' : '#ffffff',
								background: darkMode ? '#ffffff' : '#000000',
							}}
						/>
						<DarkButton text="View resume" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
