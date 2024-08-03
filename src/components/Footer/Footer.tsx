/** @format */
import { useFooterStyles } from './styles';

const Footer = () => {
	const classes = useFooterStyles();

	return (
		<section>
			<hr className={classes.line} />
			<article className={classes.container}>
				<div
					className={classes.footerName}
					style={{ fontWeight: 'bold' }}>
					<span style={{ fontSize: '30px' }}>&copy;</span>
					<div>
						<p>Fabulous_jAY 2024</p>
					</div>
				</div>
				<div className={classes.moreInfo}>Figma Designed by Hamza Abdul </div>
			</article>
		</section>
	);
};

export default Footer;
