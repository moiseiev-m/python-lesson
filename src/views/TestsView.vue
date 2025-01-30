<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Тестові завдання</v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Вправа 1. Програма "Піцерія" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<v-list>
												<v-list-item prepend-icon="mdi-check" class="bg-blue-darken-4 text-white mb-1">
													<v-list-item-title>запитати, скільки піц бажає замовити покупець;</v-list-item-title>
												</v-list-item>
												<v-list-item prepend-icon="mdi-check" class="bg-blue-darken-4 text-white mb-1">
													<v-list-item-title>запитати ціну піци, зазначену в меню;</v-list-item-title>
												</v-list-item>
												<v-list-item prepend-icon="mdi-check" class="bg-blue-darken-4 text-white mb-1" density="comfortable">
													<v-list-item-title> обчислити підсумкову вартість покупки, враховуючи знижку на 10% на честь ювілею піцерії; </v-list-item-title>
												</v-list-item>
												<v-list-item prepend-icon="mdi-check" class="bg-blue-darken-4 text-white mb-1">
													<v-list-item-title>вивести ціну покупки.</v-list-item-title>
												</v-list-item>
											</v-list>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
												<div class="text-h6">Кількість піц = 3</div>
												<div class="text-h6">Ціна = 150 грн</div>
											</v-card>

											<v-card class="my-4 pa-4">
												<v-text-field
													v-model="pizza.answer"
													label="Введіть вашу відповідь (сума до сплати)"
													type="number"
													suffix="грн"
													:error-messages="pizza.error"
													@keyup.enter="checkPizzaAnswer"
												></v-text-field>
												<v-btn color="primary" @click="checkPizzaAnswer" :disabled="pizza.showSolution"> Перевірити </v-btn>
											</v-card>

											<v-expand-transition>
												<div v-if="pizza.showSolution">
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
																<v-sheet color="grey-lighten-4" class="pa-4 rounded">
																	<pre><code>count = int(input('Скільки піц бажаєте замовити? '))
price = float(input('Яка ціна однієї піци? '))
total = count * price
discount = total * 0.1  # 10% знижка
final_price = total - discount
print('До сплати:', final_price, 'грн')</code></pre>
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
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Вправа 2. Програма "Кафе" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">
												Троє друзів отримали в кафе рахунок на суму n гривень, який вони вирішили розділити порівну. Скільки повинен заплатити кожен з них, якщо чайові складають 10% від
												суми рахунку?
											</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
												<div class="text-h6">Сума рахунку = 35.27 грн</div>
											</v-card>

											<v-card class="my-4 pa-4">
												<v-text-field
													v-model="cafe.answer"
													label="Введіть вашу відповідь (сума на одного)"
													type="number"
													suffix="грн"
													:error-messages="cafe.error"
													@keyup.enter="checkCafeAnswer"
												></v-text-field>
												<v-btn color="primary" @click="checkCafeAnswer" :disabled="cafe.showSolution"> Перевірити </v-btn>
											</v-card>

											<v-expand-transition>
												<div v-if="cafe.showSolution">
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
																<v-sheet color="grey-lighten-4" class="pa-4 rounded">
																	<pre><code>bill = float(input('Введіть суму рахунку: '))
tip = bill * 0.1  # 10% чайові
total = bill + tip  # загальна сума з чайовими
per_person = total / 3  # ділимо на трьох
print('Кожен має заплатити:', round(per_person, 2), 'грн')</code></pre>
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
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Вправа 3. Програма "Клумба" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">
												На 1 м² площі клумби, що має довжину a та ширину b, припадає 4 саджанці. Потрібно порахувати довжину огорожі та кількість саджанців, які треба закупити.
											</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
												<div class="text-h6">Довжина (a) = 5 м</div>
												<div class="text-h6">Ширина (b) = 3 м</div>
											</v-card>

											<v-card class="my-4 pa-4">
												<v-text-field
													v-model="garden.fenceAnswer"
													label="Введіть довжину огорожі"
													type="number"
													suffix="м"
													:error-messages="garden.fenceError"
													@keyup.enter="checkGardenFenceAnswer"
												></v-text-field>
												<v-text-field
													v-model="garden.plantsAnswer"
													label="Введіть кількість саджанців"
													type="number"
													:error-messages="garden.plantsError"
													@keyup.enter="checkGardenPlantsAnswer"
												></v-text-field>
												<v-btn color="primary" @click="checkGardenAnswers" :disabled="garden.showSolution"> Перевірити </v-btn>
											</v-card>

											<v-expand-transition>
												<div v-if="garden.showSolution">
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
																<v-sheet color="grey-lighten-4" class="pa-4 rounded">
																	<pre><code>a = float(input('Введіть довжину клумби (м): '))
b = float(input('Введіть ширину клумби (м): '))

# Обчислюємо периметр (довжину огорожі)
perimeter = 2 * (a + b)

# Обчислюємо площу
area = a * b

# Обчислюємо кількість саджанців (4 на кожен м²)
plants = int(area * 4)

print('Довжина огорожі:', perimeter, 'м')
print('Потрібно закупити', plants, 'саджанців')</code></pre>
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

const pizza = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
});

const cafe = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
});

const garden = ref({
	fenceAnswer: '',
	plantsAnswer: '',
	fenceError: '',
	plantsError: '',
	showSolution: false,
	attempts: 0,
});

function checkPizzaAnswer() {
	const expectedAnswer = 405; // (3 * 150) - 10%
	const userAnswer = parseFloat(pizza.value.answer);
	pizza.value.attempts++;

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		pizza.value.error = '';
		pizza.value.showSolution = true;
	} else if (pizza.value.attempts >= 3) {
		pizza.value.error = "Спробуйте ще раз. Після 3 спроб ви зможете подивитися розв'язок";
		pizza.value.showSolution = true;
	} else {
		pizza.value.error = 'Неправильна відповідь. Спробуйте ще раз';
	}
}

function checkCafeAnswer() {
	const expectedAnswer = 12.93;
	const userAnswer = parseFloat(cafe.value.answer);
	cafe.value.attempts++;

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		cafe.value.error = '';
		cafe.value.showSolution = true;
	} else if (cafe.value.attempts >= 3) {
		cafe.value.error = "Спробуйте ще раз. Після 3 спроб ви зможете подивитися розв'язок";
		cafe.value.showSolution = true;
	} else {
		cafe.value.error = 'Неправильна відповідь. Спробуйте ще раз';
	}
}

function checkGardenAnswers() {
	const expectedFence = 16;
	const expectedPlants = 60;
	const userFence = parseFloat(garden.value.fenceAnswer);
	const userPlants = parseInt(garden.value.plantsAnswer);
	garden.value.attempts++;

	let isCorrect = true;

	if (Math.abs(userFence - expectedFence) <= 0.01) {
		garden.value.fenceError = '';
	} else {
		garden.value.fenceError = 'Неправильна довжина огорожі';
		isCorrect = false;
	}

	if (userPlants === expectedPlants) {
		garden.value.plantsError = '';
	} else {
		garden.value.plantsError = 'Неправильна кількість саджанців';
		isCorrect = false;
	}

	if (isCorrect || garden.value.attempts >= 3) {
		garden.value.showSolution = true;
		garden.value.fenceError = '';
		garden.value.plantsError = '';
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
