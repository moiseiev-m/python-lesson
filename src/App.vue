<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useTheme } from 'vuetify';

const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
	isDark.value = !isDark.value;
};

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
	{ title: 'Тестові завдання', icon: 'mdi-test-tube', to: '/tests' },
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
			<v-btn icon @click="toggleTheme" :title="isDark ? 'Світла тема' : 'Темна тема'">
				<v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
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

/* Стилі для блоків коду */
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

/* Стилі для підсвічування синтаксису */
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

/* Темна тема */
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
