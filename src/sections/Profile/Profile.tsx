import { useProfileStyles } from './styles';
import Typical from 'react-typical';
import Images from '../../assets/images/prof-pics.png';
import { social } from './Data';
import TextRotation from '../../components/TextRotation/TextRotation';

const Profile = () => {
  const classes = useProfileStyles();

  return (
    <div className={classes.root} id="home">
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.headerText}>
            Creative Software Engineer 👨🏾‍💻
            <div className={classes.typicalText}>
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  'Hello there 👋🏽',
                  4000,
                  "I'm Ayo - Software Engineer",
                  4000,
                  'I build performant web apps',
                  4000,
                  'with Javascript frameworks',
                  4000,
                  'and automate workflows with n8n',
                  4000,
                ]}
              />
            </div>
            <div className={classes.btn}>
              <a href="#contact" className={classes.button}>
                Let's talk
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}>
                View CV
              </a>
            </div>
            <TextRotation />
          </div>

          <div className={classes.imgContainer}>
            <img src={Images} className={classes.img} alt="profile" />
            <div className={classes.info}>
              {social.map(({ id, url, icon, text, dash }) => (
                <section key={id} className={classes.socialInfo}>
                  <div className={classes.social}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.url}>
                      <p className={classes.infoText}>
                        {text}
                        {icon}
                        <span className={classes.dash}>{dash}</span>
                      </p>
                    </a>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
