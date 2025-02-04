import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import router from './router';
import { loadFonts } from './plugins/webfontloader';

// Завантаження шрифтів
loadFonts();

// Налаштування Vuetify
const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'light',
		themes: {
			light: {
				colors: {
					primary: '#1867C0',
					secondary: '#5CBBF6',
				},
			},
		},
	},
});

// Створення та налаштування додатку
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
