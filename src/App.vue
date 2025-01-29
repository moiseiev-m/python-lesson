<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const drawer = ref(null);
const router = useRouter();
const route = useRoute();
const { mobile, mdAndUp } = useDisplay();

const menuItems = [
	{ title: 'Головна', icon: 'mdi-home', to: '/' },
	{ title: 'Вступ', icon: 'mdi-book-open-variant', to: '/intro' },
	{ title: 'Встановлення Python', icon: 'mdi-download', to: '/installation' },
	{ title: 'Основи Python', icon: 'mdi-language-python', to: '/basics' },
	{ title: 'Змінні та типи даних', icon: 'mdi-variable', to: '/variables' },
	// { title: 'Умовні конструкції', icon: 'mdi-code-brackets', to: '/conditions' },
	// { title: 'Цикли', icon: 'mdi-refresh', to: '/loops' },
	// { title: 'Функції', icon: 'mdi-function', to: '/functions' },
	// { title: 'Списки та кортежі', icon: 'mdi-format-list-bulleted', to: '/lists' },
	// { title: 'Словники', icon: 'mdi-dictionary', to: '/dictionaries' },
];

const isCurrentRoute = computed(() => (path) => {
	return route.path === path;
});
</script>

<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" :permanent="mdAndUp" :temporary="!mdAndUp" :location="mdAndUp ? 'left' : 'start'" width="300">
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
				<span :class="mobile ? 'text-subtitle-1' : 'text-h6'">Python підказки</span>
			</v-app-bar-title>
			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main :class="mdAndUp ? 'ml-300' : ''">
			<v-container class="fill-height pa-0">
				<v-row>
					<v-col cols="12" class="pa-6">
						<router-view></router-view>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<style>
.v-container {
	max-width: 100% !important;
	width: 100% !important;
	margin: 0 !important;
	padding: 0 !important;
}

.v-main {
	padding: 0 !important;
	margin-left: var(--v-layout-left) !important;
	padding-top: var(--v-layout-top) !important;
}

.v-col {
	max-width: 100% !important;
}

.v-row {
	margin: 0 !important;
}

/* Стилі для блоків коду */
pre {
	background: #f8f9fa;
	border: 1px solid #e9ecef;
	border-radius: 4px;
	padding: 15px;
	margin: 15px 0;
	overflow-x: auto;
	font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
	font-size: 14px;
	line-height: 1.5;
}

pre code {
	color: #24292e;
}

.code-header {
	background: #e9ecef;
	padding: 8px 15px;
	border-radius: 4px 4px 0 0;
	border: 1px solid #e9ecef;
	border-bottom: none;
	font-family: 'Segoe UI', system-ui, sans-serif;
	font-size: 13px;
	color: #6c757d;
}

.code-block {
	margin: 20px 0;
}

.line-numbers {
	color: #6c757d;
	padding-right: 15px;
	border-right: 1px solid #e9ecef;
	text-align: right;
	user-select: none;
}
</style>
