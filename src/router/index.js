import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase';
import { usePagesStore } from '@/stores/pages';
import { useAuthStore } from '@/stores/auth';

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
			path: '/branching',
			name: 'branching',
			component: () => import('../views/BranchingView.vue'),
		},
		{
			path: '/subprograms',
			name: 'subprograms',
			component: () => import('../views/SubprogramsView.vue'),
		},
		{
			path: '/arrays',
			name: 'arrays',
			component: () => import('../views/ArraysView.vue'),
		},
		{
			path: '/gui-projects',
			name: 'gui-theory',
			component: () => import('../views/WindowProjectsView.vue'),
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
			name: 'gui-practice',
			component: () => import('../views/practice/GuiProjectsView.vue'),
		},
		{
			path: '/practice/arrays',
			name: 'arrays-projects',
			component: () => import('../views/practice/ArraysProjectsView.vue'),
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
			meta: { requiresAuth: true, requiresAdmin: true },
		},
		{
			path: '/solutions',
			name: 'solutions',
			component: () => import('../views/SolutionsView.vue'),
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
	const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
	const authStore = useAuthStore();
	const pagesStore = usePagesStore();
	// Використовуємо і auth.currentUser, і authStore.user — після логіну store оновлюється раніше ніж Firebase
	const isAuthenticated = auth.currentUser ?? authStore.user;
	// Перевіряємо і store, і localStorage — після логіну store вже оновлений, localStorage може запізнитись
	const isAdmin = authStore.isAdmin || localStorage.getItem('isAdmin') === 'true';

	// Перевіряємо чи сторінка вимкнена
	if (to.path !== '/' && to.path !== '/admin' && to.path !== '/admin/dashboard' && to.path !== '/solutions') {
		if (!pagesStore.pages[to.path]) {
			next('/');
			return;
		}
	}

	// Перевіряємо авторизацію для захищених маршрутів
	if (requiresAuth && !isAuthenticated) {
		next('/admin');
	}
	// Перевіряємо права адміністратора для захищених маршрутів
	else if (requiresAdmin && !isAdmin) {
		next('/');
	} else {
		next();
	}
});

export default router;
