<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { usePagesStore } from '@/stores/pages';
import BaseLayout from '@/components/BaseLayout.vue';

const authStore = useAuthStore();
const pagesStore = usePagesStore();
const router = useRouter();

const pageItems = computed(() => [
	{ title: 'Консольні проєкти', path: '/practice/console', category: 'Практичні завдання' },
	{ title: 'Консольні проєкти з розгалуженням', path: '/practice/console-branching', category: 'Практичні завдання' },
	{ title: 'Підпрограми', path: '/practice/functions', category: 'Практичні завдання' },
	{ title: 'Віконні проєкти', path: '/practice/window', category: 'Практичні завдання' },
	{ title: 'Змінні', path: '/variables', category: 'Теорія' },
	{ title: 'Розгалуження', path: '/branching', category: 'Теорія' },
	{ title: 'Підпрограми', path: '/subprograms', category: 'Теорія' },
	{ title: 'Віконні проєкти', path: '/gui-projects', category: 'Теорія' },
	{ title: 'Практичні роботи', path: '/tests', category: 'Теорія' },
	{ title: 'Основи', path: '/basics', category: 'Теорія' },
	{ title: 'Встановлення', path: '/installation', category: 'Теорія' },
]);

onMounted(() => {
	if (!authStore.user) {
		router.push('/admin');
	}
});
</script>

<template>
	<BaseLayout>
		<template #title>
			<div class="d-flex align-center justify-space-between">
				<h2 class="text-h4">Керування сторінками</h2>
				<v-btn color="primary" @click="authStore.logout">Вийти</v-btn>
			</div>
		</template>

		<template #content>
			<v-card>
				<v-data-table
					:headers="[
						{ title: 'Назва сторінки', key: 'title', sortable: true },
						{ title: 'Шлях', key: 'path', sortable: true },
						{ title: 'Категорія', key: 'category', sortable: true },
						{ title: 'Статус', key: 'status', align: 'end' },
					]"
					:items="pageItems"
					:loading="pagesStore.loading"
					hover
				>
					<template #[`item.title`]="{ item }">
						{{ item.title }}
					</template>
					<template #[`item.path`]="{ item }">
						<code>{{ item.path }}</code>
					</template>
					<template #[`item.category`]="{ item }">
						{{ item.category }}
					</template>
					<template #[`item.status`]="{ item }">
						<v-switch
							v-model="pagesStore.pages[item.path]"
							:loading="pagesStore.loading"
							@update:model-value="pagesStore.togglePageVisibility(item.path, $event)"
							color="primary"
							:true-value="true"
							:false-value="false"
							hide-details
							density="compact"
							:label="pagesStore.pages[item.path] ? 'Активна' : 'Неактивна'"
						></v-switch>
					</template>
				</v-data-table>
			</v-card>
		</template>
	</BaseLayout>
</template>

<style scoped>
.v-data-table {
	background: transparent !important;
}
</style>
