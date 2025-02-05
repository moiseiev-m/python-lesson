<script setup>
import { ref } from 'vue';
import TaskChecker from '@/components/TaskChecker.vue';
import pdfGuide from '@/assets/pdf/window-task.pdf';
import pdfGuide1 from '@/assets/pdf/window-task-1.pdf';
import pdfGuide2 from '@/assets/pdf/window-task-2.pdf';

const tasks = ref([
	{
		header: 'Створення вікна',
		content: ['Створити просте вікно з кнопкою.'],
		hints: ['Використовуйте бібліотеку для створення GUI', 'Створіть вікно', 'Додайте кнопку', 'Запустіть програму'],
	},
	{
		header: 'Додавання тексту',
		content: ['Додати текстове поле у вікно.'],
		hints: ['Створіть вікно', 'Додайте текстове поле', 'Запустіть програму'],
	},
	{
		header: 'Обробка натискання кнопки',
		content: ['Вивести повідомлення при натисканні кнопки.'],
		hints: ['Створіть вікно з кнопкою', 'Додайте обробник події для кнопки', 'Виведіть повідомлення при натисканні'],
	},
	{
		header: 'Зміна кольору фону',
		content: ['Змінити колір фону вікна.'],
		hints: ['Створіть вікно', 'Додайте кнопку для зміни кольору', 'Змініть колір фону при натисканні'],
	},
	{
		header: 'Відображення зображення',
		content: ['Додати зображення у вікно.'],
		hints: ['Створіть вікно', 'Додайте зображення', 'Запустіть програму'],
	},
	{
		header: 'Введення тексту',
		content: ['Додати поле для введення тексту.'],
		hints: ['Створіть вікно', 'Додайте поле для введення тексту', 'Запустіть програму'],
	},
	{
		header: 'Відображення повідомлення',
		content: ['Вивести повідомлення при введенні тексту.'],
		hints: ['Створіть вікно з полем для введення', 'Додайте обробник події для введення тексту', 'Виведіть повідомлення при введенні'],
	},
]);
</script>
<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Віконні проєкти</v-card-title>

					<v-card-text class="text-body-1">
						<p class="mb-4">
							<a href="https://ed-info.github.io/epython/" target="_blank">ЄPython - програмувати просто! - https://ed-info.github.io/epython/</a>
						</p>
						<v-btn color="success" :href="pdfGuide" target="_blank" prepend-icon="mdi-file" class="mb-1">Приклад створення вікна </v-btn>
						<v-btn color="success" :href="pdfGuide1" target="_blank" prepend-icon="mdi-file" class="mb-1">Приклад додавання тексту </v-btn>

						<v-btn color="success" :href="pdfGuide2" target="_blank" prepend-icon="mdi-file">Приклад обробки натискання кнопки </v-btn>
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
