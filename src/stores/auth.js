import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
	const user = ref(null);
	const error = ref(null);
	const loading = ref(false);

	// Підписуємось на зміни стану авторизації
	onAuthStateChanged(auth, (currentUser) => {
		user.value = currentUser;
	});

	const login = async (email, password) => {
		try {
			loading.value = true;
			error.value = null;
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			user.value = userCredential.user;
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
		} catch (e) {
			error.value = e.message;
			throw e;
		}
	};

	return {
		user,
		error,
		loading,
		login,
		logout,
	};
});
