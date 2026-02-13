import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
	const user = ref(null);
	const error = ref(null);
	const loading = ref(false);
	const isAdmin = ref(false);

	// Підписуємось на зміни стану авторизації
	onAuthStateChanged(auth, (currentUser) => {
		user.value = currentUser;

		// Перевіряємо статус адміністратора при зміні стану авторизації
		if (currentUser) {
			// Перевірка, чи користувач є адміністратором (наприклад, за email)
			const adminEmails = ['admin@example.com']; // Тут впишіть емейл адміністратора
			isAdmin.value = adminEmails.includes(currentUser.email);

			// Зберігаємо інформацію в localStorage
			if (isAdmin.value) {
				localStorage.setItem('isAdmin', 'true');
			}
		} else {
			isAdmin.value = false;
			localStorage.removeItem('isAdmin');
		}
	});

	// При ініціалізації перевіряємо localStorage
	const checkAdminStatus = () => {
		const adminStatus = localStorage.getItem('isAdmin');
		if (adminStatus === 'true') {
			isAdmin.value = true;
		}
	};
	checkAdminStatus();

	const login = async (email, password) => {
		try {
			loading.value = true;
			error.value = null;
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			user.value = userCredential.user;

			// Перевірка, чи користувач є адміністратором
			const adminEmails = ['admin@example.com']; // Тут впишіть емейл адміністратора
			isAdmin.value = adminEmails.includes(email);

			// Зберігаємо інформацію про адміністратора в localStorage
			if (isAdmin.value) {
				localStorage.setItem('isAdmin', 'true');
			}
		} catch (e) {
			error.value = e.message;
			throw e;
		} finally {
			loading.value = false;
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			user.value = null;
			isAdmin.value = false;
			localStorage.removeItem('isAdmin');
		} catch (e) {
			error.value = e.message;
			throw e;
		}
	};

	return {
		user,
		error,
		loading,
		isAdmin,
		login,
		logout,
	};
});
