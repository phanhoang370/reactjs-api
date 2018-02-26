import React from 'react';
import Homepage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const routes = [
	{
		path:'/',
		exact:true,
		main: () => <Homepage />
	},
	{
		path:'',
		exact:false,
		main: () => <NotFoundPage />
	}
];

export default routes;