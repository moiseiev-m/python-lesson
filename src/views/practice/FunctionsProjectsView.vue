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
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">Створіть функцію, яка приймає довжину та ширину прямокутника і повертає його площу та периметр.</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
												<div class="text-h6">Довжина = 5</div>
												<div class="text-h6">Ширина = 3</div>
											</v-card>

											<v-card class="my-4 pa-4">
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
												<v-btn color="primary" @click="checkRectangleAnswers" :disabled="rectangle.showSolution"> Перевірити </v-btn>
											</v-card>

											<v-expand-transition>
												<div v-if="rectangle.showSolution">
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
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
															</v-expansion-panel-text>
														</v-expansion-panel>
													</v-expansion-panels>
												</div>
											</v-expand-transition>
										</v-card-text>
									</v-card>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 2. Функція перевірки числа на простоту </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">Створіть функцію, яка перевіряє, чи є число простим. Просте число - це натуральне число, яке має рівно два різних дільники: 1 і саме число.</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
												<div class="text-h6">Число = 17</div>
											</v-card>

											<v-card class="my-4 pa-4">
												<v-text-field v-model="prime.answer" label="Введіть відповідь (так/ні)" :error-messages="prime.error" @keyup.enter="checkPrimeAnswer"></v-text-field>
												<v-btn color="primary" @click="checkPrimeAnswer" :disabled="prime.showSolution"> Перевірити </v-btn>
											</v-card>

											<v-expand-transition>
												<div v-if="prime.showSolution">
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
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
															</v-expansion-panel-text>
														</v-expansion-panel>
													</v-expansion-panels>
												</div>
											</v-expand-transition>
										</v-card-text>
									</v-card>
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
});

const prime = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
});

function checkRectangleAnswers() {
	const expectedArea = 15; // 5 * 3
	const expectedPerimeter = 16; // 2 * (5 + 3)
	const userArea = parseFloat(rectangle.value.areaAnswer);
	const userPerimeter = parseFloat(rectangle.value.perimeterAnswer);
	rectangle.value.attempts++;

	let isCorrect = true;

	if (Math.abs(userArea - expectedArea) <= 0.01) {
		rectangle.value.areaError = '';
	} else {
		rectangle.value.areaError = 'Неправильна площа';
		isCorrect = false;
	}

	if (Math.abs(userPerimeter - expectedPerimeter) <= 0.01) {
		rectangle.value.perimeterError = '';
	} else {
		rectangle.value.perimeterError = 'Неправильний периметр';
		isCorrect = false;
	}

	if (isCorrect || rectangle.value.attempts >= 3) {
		rectangle.value.showSolution = true;
		rectangle.value.areaError = '';
		rectangle.value.perimeterError = '';
	}
}

function checkPrimeAnswer() {
	const expectedAnswer = 'так';
	const userAnswer = prime.value.answer.toLowerCase().trim();
	prime.value.attempts++;

	if (userAnswer === expectedAnswer) {
		prime.value.error = '';
		prime.value.showSolution = true;
	} else if (prime.value.attempts >= 3) {
		prime.value.error = "Спробуйте ще раз. Після 3 спроб ви зможете подивитися розв'язок";
		prime.value.showSolution = true;
	} else {
		prime.value.error = 'Неправильна відповідь. Спробуйте ще раз';
	}
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
