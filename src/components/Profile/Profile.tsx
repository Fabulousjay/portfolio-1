/** @format */

import { useProfileStyles } from './styles';
import Typical from 'react-typical';
import Images from '../../assets/images/prof-pic.jpg';
import { social } from './Data';
import TextRotation from '../TextRotation/TextRotation';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';
import { useContext } from 'react';
import { AppTheme } from '../../contexts/AppTheme';
import { Box } from '@mui/material';
import { useThemeContext } from '../../contexts/ThemeContext';

const Profile = () => {
	const classes = useProfileStyles();
	const { darkMode, toggleDarkMode } = useThemeContext();

	return (
		<div className={classes.root}>
			<div className={classes.Container}>
				<div className={classes.hero}>
					<div className={classes.headerText}>
						{' '}
						Creative Front - End Developer 👨🏾‍💻 .{' '}
						<div className={classes.typicalText}>
							<Box
								sx={{
									fontSize: '24px',
									fontWeight: 'normal',
									position: 'relative',
									overflow: 'hidden',
									width: '100%',
									'@media (max-width:650px)': {
										fontSize: '20px',
									},
								}}>
								<Typical
									loop={Infinity}
									wrapper="p"
									steps={[
										'Hello guys 👋🏽',
										3000,
										"I'm Ayo, a creative Engineer.",
										3000,
										'I help brands build creative,',
										3000,
										'intuitive and accessible interfaces',
										4000,
										'that meet user requirements.',
									]}
								/>
							</Box>
						</div>
						<div
							className={classes.btn}
							style={{ cursor: 'pointer' }}>
							<button
								className={darkMode ? classes.buttonDark : classes.buttonLight}>
								Let's talk
							</button>

							<button
								className={darkMode ? classes.buttonDark : classes.buttonLight}>
								view resume
							</button>
						</div>
						<TextRotation />
					</div>

					<div className={classes.imgContainer}>
						<img
							src={Images}
							className={classes.img}
							alt="picture"
						/>
						<div className={classes.info}>
							{social.map((item) => {
								const { id, url, icon, text, dash } = item;
								return (
									<section
										key={id}
										className={classes.socialInfo}>
										<div className={classes.social}>
											{' '}
											<a
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className={classes.url}
												style={{ color: darkMode ? '#fff' : '#000' }}>
												<p className={classes.infoText}>
													{text}
													{icon}{' '}
													<span style={{ marginRight: '6px' }}> {dash}</span>
												</p>{' '}
											</a>
										</div>
									</section>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
