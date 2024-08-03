/** @format */

export type formTypes = {
	label: string;
	value: string | { FullName: string; email: string; message: string };
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	inputType: 'FullName' | 'email' | 'message';
};
