<script setup>
import { ref } from 'vue';
import TaskChecker from '@/components/TaskChecker.vue';
import pdf1 from '@/assets/pdf/Loops/1.pdf';
import pdf2 from '@/assets/pdf/Loops/2.pdf';
import pdf3 from '@/assets/pdf/Loops/3.pdf';
import pdf4 from '@/assets/pdf/Loops/4.pdf';
import pdf5 from '@/assets/pdf/Loops/5.pdf';

const tasks = ref([
	{
		header: 'Сума чисел',
		content: [
			'Напишіть програму, яка зчитує з консолі ціле число n, потім n чисел (по одному в рядок) і виводить їхню суму. Усі введення та виведення — тільки через консоль (input/print).',
		],
		hints: [
			'n = int(input()) для кількості чисел',
			'Використайте цикл for i in range(n):',
			'У циклі зчитуйте число та додавайте до змінної-суми',
			'Виведіть суму через print()',
		],
	},
	{
		header: 'Добуток (факторіал)',
		content: [
			'Програма зчитує з консолі натуральне число n і обчислює n! (факторіал). Результат вивести в консоль. Робота тільки з консоллю.',
		],
		hints: [
			'n = int(input())',
			'Змінна-добуток, наприклад p = 1',
			'Цикл for від 1 до n (або while), множте p на поточне число',
			'print(p)',
		],
	},
	{
		header: 'Парні числа в діапазоні',
		content: [
			'З консолі вводяться два цілих числа a та b (a ≤ b). Виведіть усі парні числа від a до b включно, по одному в рядок. Тільки input та print.',
		],
		hints: [
			'a = int(input()), b = int(input())',
			'Цикл for i in range(a, b + 1):',
			'У циклі перевірте if i % 2 == 0: і виведіть i',
		],
	},
	{
		header: 'Таблиця множення (фрагмент)',
		content: [
			'Напишіть програму, яка зчитує з консолі число n (наприклад, від 1 до 10) і виводить у консоль таблицю множення від 1 до n: для кожного i від 1 до n вивести рядок виду "i * 1 = ..., i * 2 = ..." тощо. Тільки консоль.',
		],
		hints: [
			'n = int(input())',
			'Зовнішній цикл for i in range(1, n + 1):',
			'Внутрішній цикл for j in range(1, n + 1):',
			'print(i, "*", j, "=", i * j) або f-рядок',
		],
	},
	{
		header: 'Кількість парних',
		content: [
			'Програма зчитує з консолі кількість чисел k, потім k цілих чисел. Вивести, скільки серед них парних. Тільки input та print.',
		],
		hints: [
			'Змінна-лічильник count = 0',
			'Цикл for по range(k), у циклі зчитуйте число',
			'Якщо число % 2 == 0, збільште count на 1',
			'print(count)',
		],
	},
	{
		header: 'Максимум з послідовності',
		content: [
			'З консолі вводиться кількість чисел n, потім n чисел. Знайдіть найбільше з них і виведіть у консоль. Без списків — тільки змінні, цикли та input/print.',
		],
		hints: [
			'n = int(input()), перше число зчитати і вважати максимумом: mx = int(input())',
			'Цикл for i in range(n - 1):, у циклі зчитати число та порівняти з mx',
			'Якщо нове число більше mx — оновити mx',
			'print(mx)',
		],
	},
]);
</script>
<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Цикли</v-card-title>

					<v-card-text class="text-body-1">
						<p class="mb-4">
							Усі завдання виконуються в консолі: введення — <code>input()</code>, виведення — <code>print()</code>.
						</p>
						<p class="mb-4">
							<a href="https://ed-info.github.io/epython/" target="_blank">ЄPython - програмувати просто! - https://ed-info.github.io/epython/</a>
						</p>
						<div class="d-flex flex-wrap gap-2 mb-4">
							<v-btn color="success" :href="pdf1" target="_blank" prepend-icon="mdi-file-pdf-box"> PDF 1 </v-btn>
							<v-btn color="success" :href="pdf2" target="_blank" prepend-icon="mdi-file-pdf-box"> PDF 2 </v-btn>
							<v-btn color="success" :href="pdf3" target="_blank" prepend-icon="mdi-file-pdf-box"> PDF 3 </v-btn>
							<v-btn color="success" :href="pdf4" target="_blank" prepend-icon="mdi-file-pdf-box"> PDF 4 </v-btn>
							<v-btn color="success" :href="pdf5" target="_blank" prepend-icon="mdi-file-pdf-box"> PDF 5 </v-btn>
						</div>
						<v-expansion-panels class="mt-4">
							<v-expansion-panel v-for="(task, index) in tasks" :key="index" :header="task.header" class="mb-2">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання {{ index + 1 }}. {{ task.header }}</v-expansion-panel-title>
								<v-expansion-panel-text>
									<div class="task-content">
										<p v-for="(paragraph, i) in task.content" :key="i" class="mb-4" v-html="paragraph"></p>
										<TaskChecker :hints="task.hints" />
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
.task-content {
	font-size: 16px;
}
</style>
