import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index';
import Contact from './pages/Contact';
import Token from './pages/Token';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Road from './pages/Road';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
		},
		{
			path: '/Contact',
			name: 'Contact',
			component: Contact,
		},
		{
			path: '/Token',
			name: 'Token',
			component: Token,
		},
		{
			path: '/Team',
			name: 'Team',
			component: Team,
		},
		
		{
			path: '/FAQ',
			name: 'FAQ',
			component: FAQ,
		},	{
			path: '/Road',
			name: 'Road',
			component: Road,
		},
	],
});
