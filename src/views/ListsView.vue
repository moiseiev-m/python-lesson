<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Списки та кортежі </v-card-title>

					<v-card-text class="text-body-1">
						<v-tabs v-model="tab" color="primary">
							<v-tab value="lists">Списки</v-tab>
							<v-tab value="tuples">Кортежі</v-tab>
						</v-tabs>

						<v-window v-model="tab" class="mt-4">
							<v-window-item value="lists">
								<h2 class="text-h5 mb-4">Списки (Lists)</h2>
								<p class="mb-4">Списки - це впорядковані колекції об'єктів, які можуть змінюватися. Вони можуть містити елементи різних типів:</p>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code># Створення списків
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [1, [2, 3], [4, 5, 6]]

# Доступ до елементів
first = numbers[0]      # перший елемент
last = numbers[-1]      # останній елемент
sub = numbers[1:4]      # зріз [2, 3, 4]

# Зміна елементів
numbers[0] = 10         # [10, 2, 3, 4, 5]
numbers.append(6)       # додати в кінець
numbers.insert(1, 1.5)  # вставити за індексом
numbers.remove(3)       # видалити значення
del numbers[0]         # видалити за індексом</code></pre>
								</v-sheet>

								<h3 class="text-h6 mb-3">Корисні методи списків</h3>
								<v-list>
									<v-list-item v-for="(method, i) in listMethods" :key="i" :title="method.name" :subtitle="method.description">
										<template v-slot:prepend>
											<v-icon>{{ method.icon }}</v-icon>
										</template>
									</v-list-item>
								</v-list>

								<h3 class="text-h6 my-4">Операції зі списками</h3>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code># Конкатенація списків
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]

# Повторення списку
repeated = list1 * 2    # [1, 2, 3, 1, 2, 3]

# Сортування
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
numbers.sort()          # сортування за зростанням
numbers.sort(reverse=True)  # сортування за спаданням
sorted_numbers = sorted(numbers)  # створює новий відсортований список

# Пошук
index = numbers.index(5)  # перше входження числа 5
count = numbers.count(1)  # кількість входжень числа 1</code></pre>
								</v-sheet>
							</v-window-item>

							<v-window-item value="tuples">
								<h2 class="text-h5 mb-4">Кортежі (Tuples)</h2>
								<p class="mb-4">Кортежі - це незмінні послідовності, схожі на списки. Вони використовуються для групування пов'язаних значень:</p>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code># Створення кортежів
point = (3, 4)
person = ("Іван", 25, "Київ")
single = (1,)  # кортеж з одного елемента

# Розпакування кортежів
x, y = point
name, age, city = person

# Використання в функціях
def get_coordinates():
    return (10, 20)

x, y = get_coordinates()</code></pre>
								</v-sheet>

								<h3 class="text-h6 mb-3">Переваги кортежів</h3>
								<v-list>
									<v-list-item prepend-icon="mdi-lock" title="Незмінність" subtitle="Елементи кортежу не можна змінити після створення"></v-list-item>
									<v-list-item prepend-icon="mdi-memory" title="Ефективність" subtitle="Кортежі займають менше пам'яті ніж списки"></v-list-item>
									<v-list-item prepend-icon="mdi-key" title="Хешованість" subtitle="Кортежі можна використовувати як ключі словників"></v-list-item>
								</v-list>

								<h3 class="text-h6 my-4">Методи кортежів</h3>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code># Доступні методи
numbers = (1, 2, 2, 3, 4, 2)
count = numbers.count(2)    # кількість двійок
index = numbers.index(3)    # індекс першої трійки

# Перетворення
list_from_tuple = list(numbers)  # перетворення в список
tuple_from_list = tuple([1, 2, 3])  # перетворення списку в кортеж</code></pre>
								</v-sheet>

								<v-alert
									color="info"
									icon="mdi-lightbulb"
									title="Коли використовувати?"
									text="Використовуйте кортежі для даних, які не повинні змінюватися (наприклад, координати точки, RGB-кольори). Для даних, які потрібно модифікувати, використовуйте списки."
									class="mb-4"
								></v-alert>
							</v-window-item>
						</v-window>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/dictionaries" prepend-icon="mdi-arrow-right"> Перейти до словників </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('lists');

const listMethods = [
	{
		icon: 'mdi-plus-circle',
		name: 'append()',
		description: 'Додає елемент в кінець списку',
	},
	{
		icon: 'mdi-plus-box',
		name: 'insert()',
		description: 'Вставляє елемент за вказаним індексом',
	},
	{
		icon: 'mdi-minus-circle',
		name: 'remove()',
		description: 'Видаляє перше входження вказаного значення',
	},
	{
		icon: 'mdi-pop',
		name: 'pop()',
		description: 'Видаляє і повертає останній елемент (або елемент за вказаним індексом)',
	},
	{
		icon: 'mdi-sort',
		name: 'sort()',
		description: 'Сортує список на місці',
	},
	{
		icon: 'mdi-flip-horizontal',
		name: 'reverse()',
		description: 'Розвертає список на місці',
	},
	{
		icon: 'mdi-eraser',
		name: 'clear()',
		description: 'Видаляє всі елементи зі списку',
	},
	{
		icon: 'mdi-content-copy',
		name: 'copy()',
		description: 'Створює поверхневу копію списку',
	},
];
</script>

<style scoped>
pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: monospace;
}
code {
	color: #24292e;
}
</style>
