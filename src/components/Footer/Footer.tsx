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
					<span style={{ fontSize: '20px' }}>&copy;</span>
					<div>
						<p>Fabulous_jAY 2024</p>
					</div>
				</div>
				<div className={classes.moreInfo}>Built by Adegbulu Ayomiposi </div>
			</article>
		</section>
	);
};

export default Footer;
