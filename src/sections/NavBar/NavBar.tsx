/** @format */

import { useNavStyles } from './styles';
import { link } from './NavData';
import { FC, useEffect, useRef, useState } from 'react';
import { Close, DragHandle } from '@mui/icons-material';
import { NavTypes } from './types';
import Themetoggle from '../../contexts/ThemeToggle';
import { useThemeContext } from '../../contexts/ThemeContext';
import Clock from '../../components/Clock/Clock';

const NavBar: FC<NavTypes> = () => {
  const { darkMode } = useThemeContext();
  const classes = useNavStyles();
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => setShowLinks((prev) => !prev);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <nav className={classes.root}>
      <div className={classes.navContainer}>
        <div className={classes.logoWrapper}>
          <h1 className={classes.logo}>F</h1>
          <h1 className={classes.logo}>J</h1>
        </div>

        <div className={classes.menu}>
          {showLinks ? (
            <Close className={classes.menuIcon} onClick={toggleLinks} />
          ) : (
            <DragHandle className={classes.menuIcon} onClick={toggleLinks} />
          )}
        </div>

        <div className={classes.rightItems}>
          <Clock />
          <Themetoggle />
        </div>
      </div>

      {showLinks && (
        <div className={classes.menuContainer}>
          <ul className={classes.unorderedList} ref={linksRef}>
            {link.map((navItem) => (
              <li key={navItem.id}>
                <a
                  href={navItem.url}
                  className={
                    darkMode ? classes.navLinkDark : classes.navLinkLight
                  }
                  onClick={() => setShowLinks(false)} 
                >
                  {navItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
