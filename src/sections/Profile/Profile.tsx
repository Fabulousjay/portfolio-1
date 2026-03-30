import { useProfileStyles } from './styles';
import Typical from 'react-typical';
import Images from '../../assets/images/prof-pics.png';
import { social } from './Data';
import TextRotation from '../../components/TextRotation/TextRotation';
import { Box } from '@mui/material';
import { useThemeContext } from '../../contexts/ThemeContext';

const Profile = () => {
  const classes = useProfileStyles();
  const { darkMode } = useThemeContext();

  return (
    <div className={classes.root} id="home">
      <div className={classes.Container}>
        <div className={classes.hero}>

          {/* LEFT */}
          <div className={classes.headerText}>
            Creative Software Engineer 👨🏾‍💻

            <div className={classes.typicalText}>
              <Box
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  width: '100%',
                  '@media (max-width:650px)': {
                    fontSize: '1.25rem',
                  },
                }}
              >
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
                    'with React & Three.js',
                    4000,
                    'and automate workflows with n8n',
                    4000,
                  ]}
                />
              </Box>
            </div>

            <div className={classes.btn}>
              <a
                href="#contact"
                className={darkMode ? classes.buttonDark : classes.buttonLight}
              >
                Let's talk
              </a>

              <a
                href="/Resume.pdf"
                download
                className={darkMode ? classes.buttonDark : classes.buttonLight}
              >
                View resume
              </a>
            </div>

            <TextRotation />
          </div>

          {/* RIGHT */}
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
                      className={classes.url}
                      style={{ color: darkMode ? '#fff' : '#000' }}
                    >
                      <p className={classes.infoText}>
                        {text}
                        {icon}
                        <span style={{ marginRight: '6px' }}>{dash}</span>
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