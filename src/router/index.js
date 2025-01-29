import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/intro',
			name: 'intro',
			component: () => import('../views/IntroView.vue'),
		},
		{
			path: '/installation',
			name: 'installation',
			component: () => import('../views/InstallationView.vue'),
		},
		{
			path: '/basics',
			name: 'basics',
			component: () => import('../views/BasicsView.vue'),
		},
		{
			path: '/variables',
			name: 'variables',
			component: () => import('../views/VariablesView.vue'),
		},
		{
			path: '/conditions',
			name: 'conditions',
			component: () => import('../views/ConditionsView.vue'),
		},
		{
			path: '/loops',
			name: 'loops',
			component: () => import('../views/LoopsView.vue'),
		},
		{
			path: '/functions',
			name: 'functions',
			component: () => import('../views/FunctionsView.vue'),
		},
		{
			path: '/lists',
			name: 'lists',
			component: () => import('../views/ListsView.vue'),
		},
		{
			path: '/dictionaries',
			name: 'dictionaries',
			component: () => import('../views/DictionariesView.vue'),
		},
		// {
		// 	path: '/search',
		// 	name: 'search',
		// 	component: () => import('../views/SearchView.vue'),
		// },
	],
});

export default router;
