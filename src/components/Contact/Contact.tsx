/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

import { SetStateAction, useContext, useState } from 'react';
import { useContactStyles } from './styles';
import TextArea from '../Form/Form';
import { formTypes } from './types';

const Contact = () => {
	const classes = useContactStyles();

	const [formData, setFormData] = useState({
		FullName: '',
		email: '',
		message: '',
	});

	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		const changeField = evt.target.name;
		const newValue = evt.target.value;

		console.log(newValue);

		setFormData((currData) => {
			return { ...currData, [changeField]: newValue };
		});
	};

	return (
		<section className={classes.root}>
			<div
				className={classes.contactText}
				style={{ fontSize: '24px' }}>
				Contact me
			</div>
			<div className={classes.container}>
				<p>Got an Idea? Holla at me , let's talk!</p>

				<div className={classes.contactContainer}>
					<TextArea
						label=""
						onChange={handleChange}
						value={formData.message}
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
