<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(true);
const searchQuery = ref('');
const router = useRouter();

const menuItems = [
	{ title: 'Головна', icon: 'mdi-home', to: '/' },
	{ title: 'Вступ', icon: 'mdi-book-open-variant', to: '/intro' },
	{ title: 'Встановлення Python', icon: 'mdi-download', to: '/installation' },
	{ title: 'Основи Python', icon: 'mdi-language-python', to: '/basics' },
	{ title: 'Змінні та типи даних', icon: 'mdi-variable', to: '/variables' },
	{ title: 'Умовні конструкції', icon: 'mdi-code-brackets', to: '/conditions' },
	{ title: 'Цикли', icon: 'mdi-refresh', to: '/loops' },
	{ title: 'Функції', icon: 'mdi-function', to: '/functions' },
	{ title: 'Списки та кортежі', icon: 'mdi-format-list-bulleted', to: '/lists' },
	{ title: 'Словники', icon: 'mdi-dictionary', to: '/dictionaries' },
];

const search = () => {
	if (searchQuery.value) {
		router.push({ name: 'search', query: { q: searchQuery.value } });
	}
};
</script>

<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" permanent>
			<v-list>
				<v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to" :prepend-icon="item.icon" :title="item.title" />
			</v-list>
		</v-navigation-drawer>

		<v-app-bar>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Python підручник</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-text-field v-model="searchQuery" append-icon="mdi-magnify" label="Пошук" single-line hide-details @keyup.enter="search"></v-text-field>
		</v-app-bar>

		<v-main>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<style>
.v-navigation-drawer {
	width: 300px !important;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	z-index: 100;
}

.v-main {
	padding-left: 300px;
}

@media (max-width: 960px) {
	.v-main {
		padding-left: 0;
	}
}
</style>
