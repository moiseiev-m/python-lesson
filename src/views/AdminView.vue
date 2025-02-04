<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import BaseLayout from '@/components/BaseLayout.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const isAuthenticated = ref(false);

onMounted(() => {
	// Перевіряємо стан автентифікації при завантаженні
	const unsubscribe = onAuthStateChanged(auth, (user) => {
		isAuthenticated.value = !!user;
		if (user) {
			router.push('/admin/dashboard');
		}
	});

	// Відписуємося від слухача при розмонтуванні компонента
	return () => unsubscribe();
});

const handleSubmit = async () => {
	if (!email.value || !password.value) {
		error.value = 'Будь ласка, заповніть всі поля';
		return;
	}

	try {
		loading.value = true;
		error.value = '';

		const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
		if (userCredential.user) {
			router.push('/admin/dashboard');
		}
	} catch (e) {
		console.error('Login error:', e);
		switch (e.code) {
			case 'auth/invalid-email':
				error.value = 'Невірний формат email';
				break;
			case 'auth/user-disabled':
				error.value = 'Цей користувач заблокований';
				break;
			case 'auth/user-not-found':
			case 'auth/wrong-password':
				error.value = 'Невірний email або пароль';
				break;
			default:
				error.value = 'Помилка входу. Спробуйте пізніше';
		}
	} finally {
		loading.value = false;
	}
};

const handleLogout = async () => {
	try {
		await signOut(auth);
		router.push('/admin');
	} catch (e) {
		console.error('Logout error:', e);
	}
};
</script>

<template>
	<BaseLayout>
		<template #title>
			<h2 class="text-h4 mb-6">Адміністративна панель</h2>
		</template>

		<template #content>
			<v-card v-if="!isAuthenticated" class="mx-auto" max-width="400">
				<v-card-title class="text-h5 mb-4">Вхід до системи</v-card-title>
				<v-card-text>
					<v-form @submit.prevent="handleSubmit">
						<v-text-field v-model="email" label="Електронна пошта" type="email" required :error-messages="error" placeholder="Введіть вашу електронну пошту" :disabled="loading"></v-text-field>

						<v-text-field v-model="password" label="Пароль" type="password" required placeholder="Введіть ваш пароль" :disabled="loading"></v-text-field>

						<v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>

						<v-btn color="primary" type="submit" block :loading="loading" :disabled="loading" class="mt-4">
							{{ loading ? 'Виконується вхід...' : 'Увійти' }}
						</v-btn>
					</v-form>
				</v-card-text>
			</v-card>

			<v-card v-else>
				<v-card-title>Ви увійшли як адміністратор</v-card-title>
				<v-card-text>
					<p>Електронна пошта: {{ auth?.currentUser?.email }}</p>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" @click="handleLogout">Вийти з системи</v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</BaseLayout>
</template>
