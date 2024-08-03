/** @format */

import { useTextRotationStyles } from './style';
import { ArrowDownward } from '@mui/icons-material';

const TextRotation = () => {
	const classes = useTextRotationStyles();
	const scrollText = 'Scroll down - Scroll down -';

	return (
		<div className={classes.circle}>
			<div className={classes.circularText}>
				{scrollText.split('').map((char, i) => (
					<span
						key={i}
						className={classes.ourSpan}
						style={{
							transform: `rotate(${i * 14}deg)`,
						}}>
						{char}
					</span>
				))}
			</div>
			<div>
				<ArrowDownward className={classes.arrow} />
			</div>
		</div>
	);
};

export default TextRotation;
