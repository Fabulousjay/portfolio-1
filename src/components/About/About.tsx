/** @format */

import { useAboutStyles } from './Styles';
import { description } from './Data';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';

const About = () => {
	const classes = useAboutStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<p className={classes.text}>About</p>{' '}
				<div
					className={classes.content}
					style={{ fontWeight: 400 }}>
					<p>{description.topParagraph}</p>
					<p>{description.bottomParagraph}</p>
					<div className={classes.btnGroup}>
						<LightButton text="Let's talk" />
						<DarkButton text="View resume" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
