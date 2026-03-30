/** @format */

import { ProjectDataTypes } from './types';
import kioskhive from '../../assets/images/kioskhive.png';
import hutstack from '../../assets/images/hutstack.png';
import hivedeck from "../../assets/images/hivedeck.png";
import jay from '../../assets/images/jay-shop.png';
import nimbusImage from '../../assets/images/nimbus.png';
import jobify from '../../assets/images/job_listing.png';
import vidmetrics from '../../assets/images/vidmetrics.png';

export const link: ProjectDataTypes[] = [
	{
		id: 1,
		name: 'Hutstack',
		image: hutstack,
		text: 'Built a property management platform with React, TypeScript, and Redux, featuring lease tracking, financial analytics, and reusable UI components. Also developed the marketing site.',
		url: 'https://www.hutstack.com',
		status: 'Production',
	},
	{
		id: 2,
		name: 'VidMetrics',
		image: vidmetrics,
		text: 'Built a YouTube analytics dashboard in 4 days using Next.js and TypeScript, with a performance scoring engine and real-time insights powered by API and AI-driven analytics.',
		url: 'https://vidmetric-rho.vercel.app/',
		status: 'Personal Project',
	},
	{
		id: 3,
		name: 'Hivedeck',
		image: hivedeck,
		text: 'Contributed to a no-code website builder used by 500+ businesses, building reusable components and responsive templates with React.',
		url: 'https://www.hivedeck.com',
		status: 'Production',
	},
	
	{
		id: 4,
		name: 'Aura Nimbus Keyboards',
		image: nimbusImage,
		text: 'Developed an interactive 3D e-commerce site with Next.js, Three.js, and Stripe integration, featuring smooth animations and CMS support.',
		url: 'https://nimbus-keyboards-demo.vercel.app/',
		status: 'MVP',
	},
	{
		id: 5,
		name: 'Kioskhive',
		image: kioskhive,
		text: 'Built backend APIs for a B2B marketplace using Laravel, enabling scalable product onboarding and improving API performance.',
		url: 'https://kioskhiveng.vercel.app/',
		status: 'MVP',
	},
	{
		id: 6,
		name: 'Jay Store',
		image: jay,
		text: 'Built an e-commerce app with React and Redux, including product filtering, pagination, and a real-time shopping cart.',
		url: 'https://fabjay-shop.vercel.app',
		status: 'Personal Project',
	},
	// {
	// 	id: 7,
	// 	name: 'Jobsphere',
	// 	image: jobify,
	// 	text: 'Built a job board with Laravel featuring authentication, CRUD operations, and job management with pagination.',
	// 	url: 'https://github.com/Fabulousjay/Laravel-Project',
	// 	status: 'MVP',
	// },
];