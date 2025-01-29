<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const drawer = ref(null);
const searchQuery = ref('');
const router = useRouter();
const route = useRoute();
const { mobile, mdAndUp } = useDisplay();

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

const isCurrentRoute = computed(() => (path) => {
	return route.path === path;
});

const search = () => {
	if (searchQuery.value) {
		router.push({ name: 'search', query: { q: searchQuery.value } });
		searchQuery.value = '';
		if (mobile.value) drawer.value = false;
	}
};
</script>

<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" :permanent="mdAndUp" :temporary="!mdAndUp" :location="mdAndUp ? 'left' : 'start'" width="300">
			<v-list-item prepend-icon="mdi-language-python" title="Python Tutorial" nav>
				<template v-slot:append>
					<v-btn v-if="!mdAndUp" variant="text" icon="mdi-close" @click="drawer = false"></v-btn>
				</template>
			</v-list-item>

			<v-divider></v-divider>

			<v-list nav density="compact">
				<v-list-item
					v-for="item in menuItems"
					:key="item.title"
					:to="item.to"
					:prepend-icon="item.icon"
					:title="item.title"
					:active="isCurrentRoute(item.to)"
					link
					@click="mobile ? (drawer = false) : null"
					class="rounded-lg mb-1"
				>
					<template v-slot:append v-if="isCurrentRoute(item.to)">
						<v-icon color="primary" icon="mdi-check-circle"></v-icon>
					</template>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar elevation="1">
			<v-app-bar-nav-icon v-if="!mdAndUp" @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title class="text-primary font-weight-bold">
				<v-icon icon="mdi-language-python" color="primary" class="mr-2"></v-icon>
				<span :class="mobile ? 'text-subtitle-1' : 'text-h6'">Python підручник</span>
			</v-app-bar-title>
			<v-spacer></v-spacer>

			<v-text-field
				v-model="searchQuery"
				:class="mobile ? 'mx-2 w-120' : 'mx-4 w-300'"
				prepend-inner-icon="mdi-magnify"
				label="Пошук..."
				single-line
				hide-details
				density="compact"
				variant="solo-filled"
				rounded
				@keyup.enter="search"
			>
				<template v-slot:append>
					<v-fade-transition leave-absolute>
						<v-icon v-if="searchQuery" color="primary" @click="searchQuery = ''" class="cursor-pointer"> mdi-close-circle </v-icon>
					</v-fade-transition>
				</template>
			</v-text-field>
		</v-app-bar>

		<v-main :class="mdAndUp ? 'ml-300' : ''">
			<v-container fluid class="pa-4">
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>
