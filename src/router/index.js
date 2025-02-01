import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
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
			path: '/tests',
			name: 'tests',
			component: () => import('../views/TestsView.vue'),
		},
		{
			path: '/practice/console',
			name: 'console-projects',
			component: () => import('../views/practice/ConsoleProjectsView.vue'),
		},
		{
			path: '/practice/branches',
			name: 'console-branches',
			component: () => import('../views/practice/ConsoleBranchesView.vue'),
		},
		{
			path: '/practice/functions',
			name: 'functions-projects',
			component: () => import('../views/practice/FunctionsProjectsView.vue'),
		},
		{
			path: '/practice/gui',
			name: 'gui-projects',
			component: () => import('../views/practice/GuiProjectsView.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			redirect: '/',
		},
	],
});

export default router;
