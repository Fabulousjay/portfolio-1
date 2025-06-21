import {  useState } from 'react';
import { useContactStyles } from './styles';
import TextArea from '../../components/Form/Form';

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
				>
				Contact me
			</div>
			<div
				className={classes.container}
				id="contact">
				Got an Idea? Holla at me , let's talk!

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
