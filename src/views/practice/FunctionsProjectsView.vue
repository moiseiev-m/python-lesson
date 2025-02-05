<script setup>
import { ref } from 'vue';
import TaskChecker from '@/components/TaskChecker.vue';
import pdfGuide from '@/assets/pdf/functions-task.pdf';

const tasks = ref([
	{
		header: 'Площа і довжина кола',
		content: ['Створіть проєкт з використанням підпрограми для обчислення суми довжин кіл і площ трьох циркових арен, якщо відомо довжини їх радіусів.'],
		hints: [
			'Створіть змінні для зберігання кількості кілограмів цукерок (a) та їх ціни за кілограм (x)',
			'Створіть змінні для зберігання кількості пляшок лимонаду (b) та ціни за пляшку (y)',
			'Порахуйте вартість цукерок: кількість кілограмів * ціна за кілограм',
			'Порахуйте вартість лимонаду: кількість пляшок * ціна за пляшку',
			'Загальна вартість - це сума вартості цукерок та лимонаду',
			'Виведіть результат на екран з поясненням',
		],
	},
	{
		header: 'Обчислення суми чисел',
		content: ['Напишіть функцію для обчислення суми двох чисел.'],
		hints: ['Створіть функцію, яка приймає два аргументи', 'Поверніть суму цих аргументів', 'Викличте функцію з двома числами', 'Виведіть результат'],
	},
	{
		header: 'Обчислення різниці чисел',
		content: ['Напишіть функцію для обчислення різниці двох чисел.'],
		hints: ['Створіть функцію, яка приймає два аргументи', 'Поверніть різницю цих аргументів', 'Викличте функцію з двома числами', 'Виведіть результат'],
	},
	{
		header: 'Обчислення добутку чисел',
		content: ['Напишіть функцію для обчислення добутку двох чисел.'],
		hints: ['Створіть функцію, яка приймає два аргументи', 'Поверніть добуток цих аргументів', 'Викличте функцію з двома числами', 'Виведіть результат'],
	},
	{
		header: 'Обчислення частки чисел',
		content: ['Напишіть функцію для обчислення частки двох чисел.'],
		hints: ['Створіть функцію, яка приймає два аргументи', 'Поверніть частку цих аргументів', 'Викличте функцію з двома числами', 'Виведіть результат'],
	},
	{
		header: 'Перевірка на парність',
		content: ['Напишіть функцію для перевірки, чи є число парним.'],
		hints: ['Створіть функцію, яка приймає одне число', 'Використовуйте оператор % для перевірки парності', 'Поверніть результат перевірки', 'Викличте функцію та виведіть результат'],
	},
	{
		header: 'Перевірка на простоту',
		content: ['Напишіть функцію для перевірки, чи є число простим.'],
		hints: ['Створіть функцію, яка приймає одне число', 'Перевірте, чи ділиться число на інші числа без залишку', 'Поверніть результат перевірки', 'Викличте функцію та виведіть результат'],
	},
	{
		header: 'Обчислення факторіалу',
		content: ['Напишіть функцію для обчислення факторіалу числа.'],
		hints: ['Створіть функцію, яка приймає одне число', 'Використовуйте цикл для обчислення факторіалу', 'Поверніть результат', 'Викличте функцію та виведіть результат'],
	},
]);
</script>
<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Підпрограми</v-card-title>

					<v-card-text class="text-body-1">
						<p class="mb-4">
							<a href="https://ed-info.github.io/epython/" target="_blank">ЄPython - програмувати просто! - https://ed-info.github.io/epython/</a>
						</p>
						<v-btn color="success" :href="pdfGuide" target="_blank" prepend-icon="mdi-file">Детальна інструкція для задачі "Площа і довжина кола" </v-btn>
						<v-expansion-panels class="mt-4">
							<v-expansion-panel v-for="(task, index) in tasks" :key="index" :header="task.header" class="mb-2">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання {{ index + 1 }}. {{ task.header }}</v-expansion-panel-title>
								<v-expansion-panel-text>
									<div class="task-content">
										<div v-for="text in task.content" :key="text.id">
											<p v-html="text"></p>
										</div>

										<TaskChecker :task-id="'task-' + index" :hints="task.hints" />
									</div>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
	max-width: 100%;
	overflow-x: auto;
	padding: 0;
}

code {
	color: rgb(var(--v-theme-on-surface));
	display: block;
	max-width: 100%;
	overflow-x: auto;
	font-family: inherit;
}

.v-sheet {
	max-width: 100%;
	overflow-x: auto;
	border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}
</style>
