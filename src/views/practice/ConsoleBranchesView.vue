<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Консольні проєкти з розгалуженнями</v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 1. Програма "Калькулятор знижок" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										У магазині діє система знижок:
										<br />- при покупці до 1000 грн - знижки немає <br />- від 1000 до 5000 грн - знижка 5% <br />- більше 5000 грн - знижка 10% <br />Порахуйте суму до сплати.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="discount.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="discount.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Сума покупки = 2500 грн</div>
												</v-card>

												<v-text-field
													v-model="discount.answer"
													label="Введіть вашу відповідь (сума до сплати)"
													type="number"
													suffix="грн"
													:error-messages="discount.error"
													@keyup.enter="checkDiscountAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="discount.showSolution && discount.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code>amount = float(input('Введіть суму покупки: '))

if amount > 5000:
    discount = amount * 0.1  # 10% знижка
elif amount >= 1000:
    discount = amount * 0.05  # 5% знижка
else:
    discount = 0

final_price = amount - discount
print('До сплати:', final_price, 'грн')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkDiscountAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="discount.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 2. Програма "Визначення пори року" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										Напишіть програму, яка за номером місяця визначає пору року. Використовуйте розгалуження для визначення:
										<br />- 12, 1, 2 - зима <br />- 3, 4, 5 - весна <br />- 6, 7, 8 - літо <br />- 9, 10, 11 - осінь
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="season.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="season.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Номер місяця = 7</div>
												</v-card>

												<v-text-field
													v-model="season.answer"
													label="Введіть вашу відповідь (назва пори року)"
													:error-messages="season.error"
													@keyup.enter="checkSeasonAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="season.showSolution && season.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code>month = int(input('Введіть номер місяця (1-12): '))

if month in [12, 1, 2]:
    season = 'зима'
elif month in [3, 4, 5]:
    season = 'весна'
elif month in [6, 7, 8]:
    season = 'літо'
elif month in [9, 10, 11]:
    season = 'осінь'
else:
    season = 'некоректний номер місяця'

print('Пора року:', season)</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkSeasonAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="season.dialog = false">Закрити</v-btn>
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

const discount = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const season = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

function checkDiscountAnswer() {
	const expectedAnswer = 2375; // 2500 - 5%
	const userAnswer = parseFloat(discount.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		discount.value.error = '';
		discount.value.showSolution = true;
		discount.value.isCorrect = true;
		return;
	}

	discount.value.attempts++;
	discount.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkSeasonAnswer() {
	const expectedAnswer = 'літо';
	const userAnswer = season.value.answer.toLowerCase().trim();

	if (userAnswer === expectedAnswer) {
		season.value.error = '';
		season.value.showSolution = true;
		season.value.isCorrect = true;
		return;
	}

	season.value.attempts++;
	season.value.error = 'Неправильна відповідь. Спробуйте ще раз';
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
