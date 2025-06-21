/** @format */

import React from 'react';
import { ProjectDataTypes } from './types';
import kioskhive from '../../assets/images/kioskhive.png';
import jay from '../../assets/images/jay-shop.png';
import mbmc from '../../assets/images/mbmc.png';
import jobify from '../../assets/images/job_listing.png';

export const link: ProjectDataTypes[] = [
	{
		id: 1,
		name: ' JAY STORE',
		image: jay,
		text: 'Jay Store is a modern e-commerce platform built using React.js, Redux Toolkit, and Tailwind CSS. It features a search and filter system with category, company, and price range options, product listings with pagination, and user authentication for creating accounts. The clean design and responsive layout provide an intuitive shopping experience.',
		header: '',
		url: 'https://fabjay-shop.vercel.app',
	},
	
	{
		id: 2,
		name: ' KIOSKHIVE',
		image: kioskhive,
		text: 'Kioskhive is a B2B wholesale marketplace connecting African manufacturers and retailers. Built with React.js, Laravel, Livewire, and MySQL, it enables manufacturers to showcase products and manage orders securely. Currently in development and deployed on Vercel for testing, Kioskhive aims to simplify wholesale transactions across Africa.',
		header: '',
		url: 'https://kioskhiveng.vercel.app/',
	},
	
	{
		id: 3,
		name: ' JOBSPHERE',
		image: jobify,
		text: 'JobSphere is a custom job board application that allows users to manage job listings. Users can create, edit, update, and delete job postings. The app features secure authentication and authorization, along with pagination for improved navigation. All data is stored using SQLite, and I built the backend with Laravel to ensure smooth functionality.',
		header: '',
		url: 'https://github.com/Fabulousjay/Laravel-Project',
	},
	
	{
		id: 4,
		name: ' KMAC-GRILL RESTAURANT',
		image: mbmc,
		text: '',
		header: '',
		url: 'https://kmac-grill.hivedeck.com/',
	},
	
];
