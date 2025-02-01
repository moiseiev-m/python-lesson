<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Підпрограми</v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 1. Функція обчислення площі та периметру прямокутника </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">Створіть функцію, яка приймає довжину та ширину прямокутника і повертає його площу та периметр.</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="rectangle.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="rectangle.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Довжина = 5</div>
													<div class="text-body-1">Ширина = 3</div>
												</v-card>

												<v-text-field
													v-model="rectangle.areaAnswer"
													label="Введіть площу"
													type="number"
													:error-messages="rectangle.areaError"
													@keyup.enter="checkRectangleAnswers"
												></v-text-field>
												<v-text-field
													v-model="rectangle.perimeterAnswer"
													label="Введіть периметр"
													type="number"
													:error-messages="rectangle.perimeterError"
													@keyup.enter="checkRectangleAnswers"
												></v-text-field>

												<v-expand-transition>
													<div v-if="rectangle.showSolution && rectangle.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code>def calculate_rectangle(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

# Отримуємо дані від користувача
length = float(input('Введіть довжину: '))
width = float(input('Введіть ширину: '))

# Викликаємо функцію
area, perimeter = calculate_rectangle(length, width)

print('Площа прямокутника:', area)
print('Периметр прямокутника:', perimeter)</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkRectangleAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="rectangle.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 2. Функція перевірки числа на простоту </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">Створіть функцію, яка перевіряє, чи є число простим. Просте число - це натуральне число, яке має рівно два різних дільники: 1 і саме число.</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="prime.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="prime.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Число = 17</div>
												</v-card>

												<v-text-field v-model="prime.answer" label="Введіть відповідь (так/ні)" :error-messages="prime.error" @keyup.enter="checkPrimeAnswer"></v-text-field>

												<v-expand-transition>
													<div v-if="prime.showSolution && prime.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code>def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Отримуємо число від користувача
number = int(input('Введіть число: '))

# Перевіряємо, чи є число простим
if is_prime(number):
    print(f'{number} є простим числом')
else:
    print(f'{number} не є простим числом')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkPrimeAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="prime.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref } from 'vue';

const rectangle = ref({
	areaAnswer: '',
	perimeterAnswer: '',
	areaError: '',
	perimeterError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const prime = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

function checkRectangleAnswers() {
	const expectedArea = 15; // 5 * 3
	const expectedPerimeter = 16; // 2 * (5 + 3)
	const userArea = parseFloat(rectangle.value.areaAnswer);
	const userPerimeter = parseFloat(rectangle.value.perimeterAnswer);

	if (Math.abs(userArea - expectedArea) <= 0.01 && Math.abs(userPerimeter - expectedPerimeter) <= 0.01) {
		rectangle.value.areaError = '';
		rectangle.value.perimeterError = '';
		rectangle.value.showSolution = true;
		rectangle.value.isCorrect = true;
		return;
	}

	rectangle.value.attempts++;

	if (Math.abs(userArea - expectedArea) > 0.01) {
		rectangle.value.areaError = 'Неправильна площа';
	}
	if (Math.abs(userPerimeter - expectedPerimeter) > 0.01) {
		rectangle.value.perimeterError = 'Неправильний периметр';
	}
}

function checkPrimeAnswer() {
	const expectedAnswer = 'так';
	const userAnswer = prime.value.answer.toLowerCase().trim();

	if (userAnswer === expectedAnswer) {
		prime.value.error = '';
		prime.value.showSolution = true;
		prime.value.isCorrect = true;
		return;
	}

	prime.value.attempts++;
	prime.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}
</script>

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
