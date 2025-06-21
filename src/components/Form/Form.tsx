/** @format */

import React, { useContext, useRef, useState } from 'react';
import { useTextAreaStyles } from './styles';
import { TextareaAutosize } from '@material-ui/core';
import LightButton from '../Button/Button';
import { social } from '../../sections/Profile/Data';
import { AppTheme } from '../../contexts/AppTheme';
import emailjs from '@emailjs/browser';
import { useThemeContext } from '../../contexts/ThemeContext';

interface TextAreaProps {
	label: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value?: string;
}

const Form: React.FC<TextAreaProps> = ({ label, onChange, value = '' }) => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const classes = useTextAreaStyles();
	const { darkMode } = useThemeContext();
	const handleChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
		field: string
	) => {
		const value = event.target.value;
		switch (field) {
			case 'fullName':
				setFullName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'message':
				setMessage(value);
				break;
			default:
				break;
		}

		if (onChange) {
			onChange(event);
		}
	};

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (form.current) {
			emailjs
				.sendForm(
					'service_8zzl7hm',
					'template_hex2yqh',
					form.current,
					'nyHHQfJq0ChA7-Tot'
				)
				.then(
					() => {
						console.log('SUCCESS!');
						alert('Email sent successfully!');
					},
					(error) => {
						console.log('FAILED...', error.text);
						alert('Email failed to send. Please try again.');
					}
				);
		}
	};

	return (
		<section className={classes.root}>
			<label>{label}</label>

			<form
				className={classes.form}
				ref={form}
				onSubmit={sendEmail}>
				<TextareaAutosize
					className={classes.textArea}
					onChange={(e) => handleChange(e, 'fullName')}
					name="user_name"
					value={fullName}
					placeholder="Full name:"
				/>
				<TextareaAutosize
					className={classes.textArea}
					onChange={(e) => handleChange(e, 'email')}
					name="user_email"
					value={email}
					placeholder="Email address:"
				/>
				<TextareaAutosize
					className={`${classes.textArea} ${classes.message}`}
					onChange={(e) => handleChange(e, 'message')}
					name="message"
					value={message}
					placeholder="Message:"
				/>

				<div className={classes.formFooter}>
					<LightButton text="Send Message" />
					<section className={classes.linkContainer}>
						{social.map((item) => {
							const { id, url, icon, text, dash } = item;
							return (
								<div
									className={classes.socialInfo}
									key={id}>
									<div className={classes.social}>
										<a
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className={classes.url}
											style={{ color: darkMode ? '#ffffff' : '#000000' }}>
											<p className={classes.infoText}>
												{text} {icon} <span>{dash}</span>
											</p>
										</a>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</form>
		</section>
	);
};

export default Form;
