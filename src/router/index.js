import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase';
import { usePagesStore } from '@/stores/pages';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
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
			path: '/practice/console-branching',
			name: 'console-branches',
			component: () => import('../views/practice/ConsoleBranchesView.vue'),
		},
		{
			path: '/practice/functions',
			name: 'functions-projects',
			component: () => import('../views/practice/FunctionsProjectsView.vue'),
		},
		{
			path: '/practice/window',
			name: 'gui-projects',
			component: () => import('../views/practice/GuiProjectsView.vue'),
		},
		{
			path: '/admin',
			name: 'admin',
			component: () => import('../views/AdminView.vue'),
		},
		{
			path: '/admin/dashboard',
			name: 'admin-dashboard',
			component: () => import('../views/AdminDashboardView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			redirect: '/',
		},
	],
});

// Navigation guard
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const isAuthenticated = auth.currentUser;
	const pagesStore = usePagesStore();

	// Перевіряємо чи сторінка вимкнена
	if (to.path !== '/' && to.path !== '/admin' && to.path !== '/admin/dashboard') {
		if (!pagesStore.pages[to.path]) {
			next('/');
			return;
		}
	}

	// Перевіряємо авторизацію для адмін-панелі
	if (requiresAuth && !isAuthenticated) {
		next('/admin');
	} else {
		next();
	}
});

export default router;
