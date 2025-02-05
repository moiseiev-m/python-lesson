<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import BaseLayout from '@/components/BaseLayout.vue';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const showPassword = ref(false);

const login = async () => {
	try {
		await authStore.login(email.value, password.value);
		router.push('/admin/dashboard');
	} catch (error) {
		console.error('Помилка входу:', error);
	}
};

onMounted(() => {
	if (authStore.user) {
		router.push('/admin/dashboard');
	}
});
</script>

<template>
	<BaseLayout>
		<template #title>
			<div class="d-flex align-center justify-space-between">
				<h2 class="text-h4">Адміністративна панель</h2>
				<v-btn v-if="authStore.user" color="primary" to="/admin/dashboard">Перейти до панелі керування</v-btn>
			</div>
		</template>

		<template #content>
			<v-card v-if="!authStore.user" class="mx-auto" max-width="400">
				<v-card-title class="text-h5 mb-4">Вхід до системи</v-card-title>
				<v-card-text>
					<v-form @submit.prevent="login">
						<v-text-field v-model="email" label="Електронна пошта" type="email" required :error-messages="authStore.error" placeholder="Введіть вашу електронну пошту"></v-text-field>

						<v-text-field
							v-model="password"
							label="Пароль"
							:type="showPassword ? 'text' : 'password'"
							required
							:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
							@click:append="showPassword = !showPassword"
							placeholder="Введіть ваш пароль"
						></v-text-field>

						<v-btn color="primary" type="submit" block :loading="authStore.loading" class="mt-4">
							{{ authStore.loading ? 'Виконується вхід...' : 'Увійти' }}
						</v-btn>
					</v-form>
				</v-card-text>
			</v-card>

			<v-card v-else>
				<v-card-title>Ви увійшли як адміністратор</v-card-title>
				<v-card-text>
					<p>Електронна пошта: {{ authStore.user.email }}</p>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" to="/admin/dashboard" class="mr-2">Перейти до панелі керування</v-btn>
					<v-btn color="error" @click="authStore.logout">Вийти з системи</v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</BaseLayout>
</template>
