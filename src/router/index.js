import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IntroView from '../views/IntroView.vue';
import InstallationView from '../views/InstallationView.vue';
import BasicsView from '../views/BasicsView.vue';
import VariablesView from '../views/VariablesView.vue';
import TestsView from '../views/TestsView.vue';

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
			component: IntroView,
		},
		{
			path: '/installation',
			name: 'installation',
			component: InstallationView,
		},
		{
			path: '/basics',
			name: 'basics',
			component: BasicsView,
		},
		{
			path: '/variables',
			name: 'variables',
			component: VariablesView,
		},
		{
			path: '/tests',
			name: 'tests',
			component: TestsView,
		},
	],
});

export default router;
