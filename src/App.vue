<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useTheme } from 'vuetify';
import { usePagesStore } from '@/stores/pages';

const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
	isDark.value = !isDark.value;
};

const drawer = ref(true);
const router = useRouter();
const route = useRoute();
const { mobile, mdAndUp } = useDisplay();
const pagesStore = usePagesStore();

const menuItems = [
	{ title: 'Головна', icon: 'mdi-home', path: '/' },
	{ title: 'Вступ', icon: 'mdi-book-open-variant', path: '/intro' },
	{ title: 'Встановлення', icon: 'mdi-download', path: '/installation' },
	{ title: 'Основи', icon: 'mdi-language-python', path: '/basics' },
	{ title: 'Змінні', icon: 'mdi-variable', path: '/variables' },
	{ title: 'Розгалуження', icon: 'mdi-source-branch', path: '/branching' },
	{ title: 'Підпрограми', icon: 'mdi-function', path: '/subprograms' },
	{ title: 'Віконні проєкти', icon: 'mdi-window-maximize', path: '/gui-projects' },
	{ title: 'Практичні роботи', icon: 'mdi-test-tube', path: '/tests' },
	{
		title: 'Практика',
		icon: 'mdi-code-tags',
		items: [
			{ title: 'Консольні проєкти', path: '/practice/console' },
			{ title: 'Розгалуження', path: '/practice/console-branching' },
			{ title: 'Функції', path: '/practice/functions' },
			{ title: 'Віконні програми', path: '/practice/window' },
		],
	},
];

const isCurrentRoute = computed(() => (path) => {
	return route.path === path;
});
</script>

<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" permanent>
			<v-list>
				<v-list-item to="/" :title="'Головна'" prepend-icon="mdi-home" />

				<template v-for="item in menuItems.slice(1)" :key="item.title">
					<!-- Звичайні пункти меню -->
					<v-list-item v-if="!item.items && pagesStore.pages[item.path]" :to="item.path" :title="item.title" :prepend-icon="item.icon" />

					<!-- Групи меню -->
					<v-list-group v-else-if="item.items" :value="item.title">
						<template v-slot:activator="{ props }">
							<v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon" />
						</template>

						<v-list-item v-for="subItem in item.items" :key="subItem.title" v-show="pagesStore.pages[subItem.path]" :to="subItem.path" :title="subItem.title" />
					</v-list-group>
				</template>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar elevation="1">
			<v-app-bar-nav-icon v-if="!mdAndUp" @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-app-bar-title class="text-primary font-weight-bold">
				<v-icon icon="mdi-language-python" color="primary" class="mr-2"></v-icon>
				<span :class="mobile ? 'text-subtitle-1' : 'text-h6'">Python підказки</span>
			</v-app-bar-title>
			<v-spacer></v-spacer>
			<v-btn icon @click="toggleTheme" :title="isDark ? 'Світла тема' : 'Темна тема'">
				<v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
			</v-btn>
			<v-btn icon @click="router.push('/solutions')">
				<v-icon>mdi-lightbulb-on-outline</v-icon>
			</v-btn>
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
@import './assets/code.css';

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

.v-list-item-title {
	font-size: 16px !important;
}

.text-body-1 {
	font-size: 14px !important;
}

.text-body-2 {
	font-size: 12px !important;
}

.v-card-text {
	font-size: 14px !important;
}

pre {
	font-size: 12px !important;
}

.code-block {
	margin: 20px 0;
	border-radius: 8px;
	overflow: hidden;
	background-color: rgb(var(--v-theme-surface));
}

.code-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	background-color: rgb(var(--v-theme-surface-variant));
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 13px;
	color: rgb(var(--v-theme-on-surface-variant));
}

pre {
	margin: 0;
	padding: 16px;
	background-color: rgb(var(--v-theme-surface));
	overflow-x: auto;
	font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
	color: rgb(var(--v-theme-on-surface));
}

pre code {
	color: inherit;
	display: block;
	padding: 0;
	font-family: inherit;
}

.line-numbers {
	color: rgb(var(--v-theme-on-surface-variant));
	padding-right: 16px;
	border-right: 1px solid rgba(var(--v-theme-on-surface), 0.12);
	text-align: right;
	user-select: none;
	min-width: 40px;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #6a737d;
}

.token.punctuation {
	color: #24292e;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #005cc5;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #032f62;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #d73a49;
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #d73a49;
}

.token.function,
.token.class-name {
	color: #6f42c1;
}

.token.regex,
.token.important,
.token.variable {
	color: #24292e;
}

.v-theme--dark {
	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #8b949e;
	}

	.token.punctuation {
		color: #c9d1d9;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #79c0ff;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #a5d6ff;
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string {
		color: #ff7b72;
	}

	.token.atrule,
	.token.attr-value,
	.token.keyword {
		color: #ff7b72;
	}

	.token.function,
	.token.class-name {
		color: #d2a8ff;
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #c9d1d9;
	}

	.code-block {
		background-color: rgb(var(--v-theme-surface));
	}

	pre {
		background-color: rgb(var(--v-theme-surface));
		color: rgb(var(--v-theme-on-surface));
	}

	.code-header {
		background-color: rgb(var(--v-theme-surface-variant));
		color: rgb(var(--v-theme-on-surface-variant));
	}
}
</style>
