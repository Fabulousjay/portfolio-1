/** @format */

import { ProjectDataTypes } from './types';
import kioskhive from '../../assets/images/kioskhive.png';
import hutstack from '../../assets/images/hutstack.png';
import hivedeck from "../../assets/images/hivedeck.png";
import jay from '../../assets/images/jay-shop.png';
import mbmc from '../../assets/images/mbmc.png';
import jobify from '../../assets/images/job_listing.png';

export const link: ProjectDataTypes[] = [
	{
		id: 1,
		name: 'Hutstack',
		image: hutstack,
		text: 'Hutstack is a modern property management platform for landlords, tenants, and vendors. Built an admin dashboard MVP using React, TypeScript, Tailwind, ShadCN UI, Zustand, and Recharts — featuring lease tracking, financial analytics, and reusable components. Also developed a marketing site hosted at x.hutstack.com.',
		url: 'https://x.hutstack.com',
		status: 'Production',
	},
	{
		id: 2,
		name: 'Hivedeck',
		image: hivedeck,
		text: 'Hivedeck is a no-code website builder designed for small businesses. I contributed to frontend development using React and helped build reusable components and responsive pages for clients to create and launch their websites with ease.',
		url: 'https://www.hivedeck.com',
		status: 'Production',
	},
	{
		id: 3,
		name: 'JAY STORE',
		image: jay,
		text: 'Jay Store is a modern e-commerce platform built with React.js, Redux Toolkit, and Tailwind CSS. It includes product listings, category filtering, pagination, and secure authentication, delivering a responsive and user-friendly shopping experience.',
		url: 'https://fabjay-shop.vercel.app',
		status: 'Personal Project',
	},
	{
		id: 4,
		name: 'KIOSKHIVE',
		image: kioskhive,
		text: 'Kioskhive is a B2B wholesale marketplace connecting African retailers and manufacturers. I built the backend with Laravel and Livewire, including a multi-step registration, product setup, and MySQL database integration. Deployed on Vercel for testing.',
		url: 'https://kioskhiveng.vercel.app/',
		status: 'MVP',
	},
	{
		id: 5,
		name: 'JOBSPHERE',
		image: jobify,
		text: 'JobSphere is a job board app with full CRUD operations, built with Laravel and SQLite. It supports user authentication, job listing management, and pagination. Designed for easy navigation and clean backend architecture.',
		url: 'https://github.com/Fabulousjay/Laravel-Project',
		status: 'MVP',
	},
	{
		id: 6,
		name: 'KMAC-GRILL RESTAURANT',
		image: mbmc,
		text: 'KMAC-Grill is a responsive restaurant website featuring interactive menus, contact forms, and booking sections. Built with modern UI practices to support local branding and customer engagement online.',
		url: 'https://kmac-grill.hivedeck.com/',
		status: 'Production',
	},
];

