<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Пошук </v-card-title>

					<v-card-text>
						<v-text-field
							v-model="searchQuery"
							label="Введіть текст для пошуку"
							append-inner-icon="mdi-magnify"
							@click:append-inner="search"
							@keyup.enter="search"
							clearable
							hide-details
							class="mb-4"
						></v-text-field>

						<div v-if="searchResults.length > 0">
							<h2 class="text-h5 mb-4">Результати пошуку</h2>
							<v-list>
								<v-list-item v-for="(result, index) in searchResults" :key="index" :to="result.path" class="mb-2">
									<template v-slot:prepend>
										<v-icon :icon="result.icon" color="primary"></v-icon>
									</template>

									<v-list-item-title>{{ result.title }}</v-list-item-title>
									<v-list-item-subtitle>{{ result.description }}</v-list-item-subtitle>
								</v-list-item>
							</v-list>
						</div>

						<div v-else-if="hasSearched" class="text-center py-8">
							<v-icon icon="mdi-file-search-outline" size="64" color="grey-lighten-1" class="mb-4"></v-icon>
							<div class="text-h6 text-grey-darken-1">Нічого не знайдено</div>
							<div class="text-body-1 text-grey-darken-1">Спробуйте змінити пошуковий запит</div>
						</div>

						<div v-else class="text-center py-8">
							<v-icon icon="mdi-book-search-outline" size="64" color="grey-lighten-1" class="mb-4"></v-icon>
							<div class="text-h6 text-grey-darken-1">Введіть текст для пошуку</div>
							<div class="text-body-1 text-grey-darken-1">Ви можете шукати за назвами розділів та ключовими словами</div>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const searchQuery = ref('');
const hasSearched = ref(false);
const searchResults = ref([]);
const route = useRoute();

const searchData = [
	{
		title: 'Вступ до Python',
		path: '/intro',
		icon: 'mdi-book-open-variant',
		keywords: ['python', 'програмування', 'мова програмування', 'вступ', 'початок'],
		description: 'Загальна інформація про мову програмування Python',
	},
	{
		title: 'Встановлення Python',
		path: '/installation',
		icon: 'mdi-download',
		keywords: ['встановлення', 'інсталяція', 'windows', 'mac', 'linux'],
		description: 'Інструкції по встановленню Python на різні операційні системи',
	},
	{
		title: 'Основи Python',
		path: '/basics',
		icon: 'mdi-language-python',
		keywords: ['основи', 'синтаксис', 'коментарі', 'print', 'hello world'],
		description: 'Базовий синтаксис та основні концепції Python',
	},
	{
		title: 'Змінні та типи даних',
		path: '/variables',
		icon: 'mdi-variable',
		keywords: ['змінні', 'типи даних', 'числа', 'рядки', 'булеві значення', 'none'],
		description: 'Робота зі змінними та різними типами даних в Python',
	},
	{
		title: 'Умовні конструкції',
		path: '/conditions',
		icon: 'mdi-code-brackets',
		keywords: ['if', 'else', 'elif', 'умови', 'розгалуження', 'логічні оператори'],
		description: 'Умовні конструкції та оператори порівняння',
	},
	{
		title: 'Цикли',
		path: '/loops',
		icon: 'mdi-refresh',
		keywords: ['цикли', 'for', 'while', 'ітерації', 'break', 'continue'],
		description: 'Робота з циклами та ітерації по послідовностях',
	},
	{
		title: 'Функції',
		path: '/functions',
		icon: 'mdi-function',
		keywords: ['функції', 'методи', 'параметри', 'аргументи', 'повернення значень'],
		description: 'Створення та використання функцій в Python',
	},
	{
		title: 'Списки та кортежі',
		path: '/lists',
		icon: 'mdi-format-list-bulleted',
		keywords: ['списки', 'кортежі', 'масиви', 'послідовності', 'індекси'],
		description: 'Робота зі списками та кортежами',
	},
	{
		title: 'Словники',
		path: '/dictionaries',
		icon: 'mdi-dictionary',
		keywords: ['словники', 'ключі', 'значення', 'хеш-таблиці', 'асоціативні масиви'],
		description: 'Робота зі словниками та асоціативними масивами',
	},
];

const search = () => {
	hasSearched.value = true;
	if (!searchQuery.value) {
		searchResults.value = [];
		return;
	}

	const query = searchQuery.value.toLowerCase();
	searchResults.value = searchData.filter((item) => {
		return item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.keywords.some((keyword) => keyword.toLowerCase().includes(query));
	});
};

onMounted(() => {
	// Отримуємо пошуковий запит з URL при завантаженні сторінки
	const queryParam = route.query.q;
	if (queryParam) {
		searchQuery.value = queryParam;
		search();
	}
});
</script>
