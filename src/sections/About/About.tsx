import { useAboutStyles } from './Styles';
import { description } from './Data';
import { useThemeContext } from '../../contexts/ThemeContext';
import { DarkButton } from '../../components/Button/Button';

const About = () => {
  const classes = useAboutStyles();
  const { darkMode } = useThemeContext();

  return (
    <div className={classes.root} id="about">
      <div className={classes.container}>
        <p className={classes.heading}>About</p>
        <div className={classes.content}>
          <p className={classes.paragraph}>{description.topParagraph}</p>
          <p className={classes.paragraph}>{description.bottomParagraph}</p>
          <div className={classes.btnGroup}>
            <a href="#contact" className={classes.button}>
              Let's talk
            </a>
            <DarkButton text="View resume" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
