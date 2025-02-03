import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const usePagesStore = defineStore('pages', () => {
	const pages = ref({
		'/practice/console': true,
		'/practice/console-branching': true,
		'/practice/functions': true,
		'/practice/window': true,
		'/variables': true,
		'/tests': true,
		'/basics': true,
		'/installation': true,
	});

	const loading = ref(true);
	const error = ref(null);

	const fetchPageSettings = async () => {
		try {
			loading.value = true;
			error.value = null;
			const docRef = doc(db, 'settings/pages');
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				pages.value = { ...pages.value, ...docSnap.data() };
			} else {
				// Якщо документ не існує, створюємо його з початковими значеннями
				await setDoc(docRef, pages.value);
			}
		} catch (e) {
			error.value = e.message;
			console.error('Помилка отримання налаштувань сторінок:', e);
		} finally {
			loading.value = false;
		}
	};

	const togglePageVisibility = async (path, isVisible) => {
		try {
			error.value = null;
			const docRef = doc(db, 'settings/pages');

			// Спочатку оновлюємо локальний стан
			pages.value[path] = isVisible;

			// Потім оновлюємо в Firebase
			await setDoc(docRef, pages.value, { merge: true });
		} catch (e) {
			error.value = e.message;
			console.error('Помилка оновлення налаштувань сторінки:', e);
			// Повертаємо попередній стан у разі помилки
			pages.value[path] = !isVisible;
		}
	};

	// Завантажуємо налаштування при ініціалізації store
	fetchPageSettings();

	return {
		pages,
		loading,
		error,
		togglePageVisibility,
	};
});
