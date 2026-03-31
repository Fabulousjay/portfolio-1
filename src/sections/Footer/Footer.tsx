/** @format */
import { useFooterStyles } from './styles';

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <section>
      <hr className={classes.line} />
      <article className={classes.container}>
        <div className={classes.footerName}>
          <span>&copy;</span>
          <p>Fabulous_jAY 2026</p>
        </div>
      </article>
    </section>
  );
};

export default Footer;
