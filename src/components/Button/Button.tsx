/** @format */

import { useThemeContext } from '../../contexts/ThemeContext';
import { useButtonStyles } from './styles';

const LightButton = (props: any) => {
  const classes = useButtonStyles();
  const { darkMode } = useThemeContext();

  return (
    <div className={classes.root}>
      <button
        className={darkMode ? classes.button : classes.buttonLight}
        onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default LightButton;

export const DarkButton = (props: any) => {
  const classes = useButtonStyles();
  const { darkMode } = useThemeContext();

  return (
    <div className={classes.root}>
      <button
        className={darkMode ? classes.buttonLight : classes.button}
        onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};