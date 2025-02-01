<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Консольні проєкти</v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<!-- День народження -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 1. Програма "День народження" </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										Марічка для святкування свого дня народження хоче купити a кг цукерок за ціною x грн за 1 кг і b пляшок лимонаду за ціною y грн за 1 пляшку. Складіть проєкт для
										визначення вартості цієї покупки.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="birthday.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="birthday.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">a = 2 кг цукерок</div>
													<div class="text-body-1">x = 150 грн за 1 кг</div>
													<div class="text-body-1">b = 3 пляшки лимонаду</div>
													<div class="text-body-1">y = 25 грн за пляшку</div>
												</v-card>

												<v-text-field
													v-model="birthday.answer"
													label="Введіть вашу відповідь"
													type="number"
													suffix="грн"
													:error-messages="birthday.error"
													@keyup.enter="checkBirthdayAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="birthday.showSolution && birthday.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення даних
a = float(input('Введіть кількість кг цукерок: '))
x = float(input('Введіть ціну за 1 кг цукерок: '))
b = float(input('Введіть кількість пляшок лимонаду: '))
y = float(input('Введіть ціну за 1 пляшку лимонаду: '))

# Обчислення вартості
candy_cost = a * x
lemonade_cost = b * y
total_cost = candy_cost + lemonade_cost

# Виведення результату
print(f'Загальна вартість покупки: {total_cost} грн')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkBirthdayAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="birthday.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Конвертер валют -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 2. Конвертер валют </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">Напишіть програму для конвертації гривень (UAH) в долари (USD) та євро (EUR).</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="converter.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="converter.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Сума: 1000 грн</div>
													<div class="text-body-1">Курс USD: 37.5 грн</div>
													<div class="text-body-1">Курс EUR: 40.5 грн</div>
												</v-card>

												<v-text-field
													v-model="converter.usdAnswer"
													label="Введіть суму в USD"
													type="number"
													suffix="USD"
													:error-messages="converter.usdError"
													@keyup.enter="checkConverterAnswers"
												></v-text-field>
												<v-text-field
													v-model="converter.eurAnswer"
													label="Введіть суму в EUR"
													type="number"
													suffix="EUR"
													:error-messages="converter.eurError"
													@keyup.enter="checkConverterAnswers"
												></v-text-field>

												<v-expand-transition>
													<div v-if="converter.showSolution && converter.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code>usd_rate = 37.5
eur_rate = 40.5
uah = float(input('Введіть суму в гривнях: '))

usd = round(uah / usd_rate, 2)
eur = round(uah / eur_rate, 2)

print(f'{uah} грн = {usd} USD')
print(f'{uah} грн = {eur} EUR')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkConverterAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="converter.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Клумба -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 3. Клумба </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										На прямокутній клумбі зі сторонами a=5 м і b=3 м потрібно встановити огорожу та висадити квіти. Обчисліть довжину огорожі та кількість саджанців, якщо на 1 кв. м
										висаджують 4 саджанці.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="flowerbed.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="flowerbed.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">a = 5 м (довжина)</div>
													<div class="text-body-1">b = 3 м (ширина)</div>
													<div class="text-body-1">4 саджанці на 1 кв. м</div>
												</v-card>

												<v-text-field v-model="flowerbed.fenceAnswer" label="Введіть довжину огорожі" type="number" suffix="м" :error-messages="flowerbed.fenceError"></v-text-field>
												<v-text-field v-model="flowerbed.plantsAnswer" label="Введіть кількість саджанців" type="number" :error-messages="flowerbed.plantsError"></v-text-field>

												<v-expand-transition>
													<div v-if="flowerbed.showSolution && flowerbed.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення розмірів клумби
a = float(input('Введіть довжину клумби (м): '))
b = float(input('Введіть ширину клумби (м): '))
plants_per_meter = 4

# Обчислення периметра для огорожі
fence_length = 2 * (a + b)

# Обчислення площі та кількості саджанців
area = a * b
plants_needed = area * plants_per_meter

print(f'Довжина огорожі: {fence_length} м')
print(f'Потрібно саджанців: {plants_needed}')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkFlowerbedAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="flowerbed.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Білочки -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 4. Білочки </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										У кошику є 23 горіхи. Потрібно роздати їх 5 білочкам порівну (однакова кількість горіхів кожній білочці). Визначте, скільки горіхів отримає кожна білочка і скільки
										горіхів залишиться в кошику.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="squirrels.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="squirrels.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Кількість горіхів: 23</div>
													<div class="text-body-1">Кількість білочок: 5</div>
												</v-card>

												<v-text-field
													v-model="squirrels.nutsPerSquirrelAnswer"
													label="Скільки горіхів отримає кожна білочка"
													type="number"
													:error-messages="squirrels.nutsPerSquirrelError"
												></v-text-field>
												<v-text-field
													v-model="squirrels.remainingNutsAnswer"
													label="Скільки горіхів залишиться"
													type="number"
													:error-messages="squirrels.remainingNutsError"
												></v-text-field>

												<v-expand-transition>
													<div v-if="squirrels.showSolution && squirrels.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення даних
total_nuts = int(input('Введіть кількість горіхів: '))
squirrels = int(input('Введіть кількість білочок: '))

# Обчислення
nuts_per_squirrel = total_nuts // squirrels  # Цілочисельне ділення
remaining_nuts = total_nuts % squirrels       # Остача від ділення

print(f'Кожна білочка отримає {nuts_per_squirrel} горіхів')
print(f'Залишиться {remaining_nuts} горіхів')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkSquirrelsAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="squirrels.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Терези -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 5. Терези </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										На одній чаші терезів стоїть Даринка (30 кг), а на іншій - коробка цукерок (75 кг). Поруч стоїть Оленка, яка на 5 кг важча за Даринку. Скільки кілограмів цукерок потрібно
										з'їсти дівчаткам, щоб терези зрівноважились?
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="scales.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="scales.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Вага Даринки: 30 кг</div>
													<div class="text-body-1">Вага цукерок: 75 кг</div>
													<div class="text-body-1">Оленка важча на: 5 кг</div>
												</v-card>

												<v-text-field
													v-model="scales.answer"
													label="Скільки кг цукерок треба з'їсти"
													type="number"
													suffix="кг"
													:error-messages="scales.error"
													@keyup.enter="checkScalesAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="scales.showSolution && scales.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення даних
darynka = float(input("Введіть вагу Даринки (кг): "))
candies = float(input("Введіть вагу цукерок (кг): "))
diff = float(input("На скільки кг важча Оленка: "))

# Обчислення ваги Оленки
olenka = darynka + diff

# Обчислення скільки цукерок треба з'їсти
# Щоб терези зрівноважились, треба щоб вага цукерок = вага обох дівчаток
candies_to_eat = candies - (darynka + olenka)

print(f'Дівчаткам потрібно з\'їсти {candies_to_eat} кг цукерок')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkScalesAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="scales.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Куб -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 6. Куб </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">Обчисліть об'єм куба та площу його поверхні, якщо довжина ребра куба дорівнює 5 одиниць.</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="cube.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="cube.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Довжина ребра: 5 од.</div>
												</v-card>

												<v-text-field v-model="cube.volumeAnswer" label="Введіть об'єм куба" type="number" suffix="куб. од." :error-messages="cube.volumeError"></v-text-field>
												<v-text-field v-model="cube.areaAnswer" label="Введіть площу поверхні куба" type="number" suffix="кв. од." :error-messages="cube.areaError"></v-text-field>

												<v-expand-transition>
													<div v-if="cube.showSolution && cube.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення довжини ребра
edge = float(input('Введіть довжину ребра куба: '))

# Обчислення об'єму (куб довжини ребра)
volume = edge ** 3

# Обчислення площі поверхні (6 граней * квадрат довжини ребра)
surface_area = 6 * edge ** 2

print(f'Об\'єм куба: {volume} куб. од.')
print(f'Площа поверхні куба: {surface_area} кв. од.')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkCubeAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="cube.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Піцерія -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 7. Піцерія </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">У піцерії кожна піца коштує 200 грн. При замовленні 3 піц надається знижка 10%. Обчисліть, скільки потрібно заплатити за замовлення.</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="pizzeria.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="pizzeria.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Ціна однієї піци: 200 грн</div>
													<div class="text-body-1">Кількість піц: 3</div>
													<div class="text-body-1">Знижка: 10%</div>
												</v-card>

												<v-text-field
													v-model="pizzeria.answer"
													label="Введіть суму до сплати"
													type="number"
													suffix="грн"
													:error-messages="pizzeria.error"
													@keyup.enter="checkPizzeriaAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="pizzeria.showSolution && pizzeria.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення даних
price = float(input('Введіть ціну однієї піци: '))
count = int(input('Введіть кількість піц: '))

# Обчислення вартості без знижки
total = price * count

# Обчислення знижки 10%
final_price = total * 0.9  # або total - (total * 0.1)

print(f'До сплати: {final_price} грн')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkPizzeriaAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="pizzeria.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Кафе -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 8. Кафе </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										Компанія з 14 друзів вирішила разом пообідати в кафе. Загальний рахунок становить 181 грн. Обчисліть, скільки повинен заплатити кожен друг, якщо вони вирішили розділити
										рахунок порівну.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="cafe.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="cafe.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Загальний рахунок: 181 грн</div>
													<div class="text-body-1">Кількість друзів: 14</div>
												</v-card>

												<v-text-field
													v-model="cafe.answer"
													label="Введіть суму на одного друга"
													type="number"
													suffix="грн"
													:error-messages="cafe.error"
													@keyup.enter="checkCafeAnswer"
												></v-text-field>

												<v-expand-transition>
													<div v-if="cafe.showSolution && cafe.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення суми рахунку та кількості друзів
total = float(input('Введіть загальну суму рахунку: '))
friends = int(input('Введіть кількість друзів: '))

# Обчислення суми на одного друга
per_person = round(total / friends, 2)

print(f'Кожен повинен заплатити: {per_person} грн')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkCafeAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="cafe.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Середній бал -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 9. Середній бал </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">
										Учень отримав такі оцінки за чверть: математика - 10, фізика - 11, хімія - 9, історія - 12, література - 10. Обчисліть середній бал учня за чверть.
									</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="grades.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="grades.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Математика: 10</div>
													<div class="text-body-1">Фізика: 11</div>
													<div class="text-body-1">Хімія: 9</div>
													<div class="text-body-1">Історія: 12</div>
													<div class="text-body-1">Література: 10</div>
												</v-card>

												<v-text-field v-model="grades.answer" label="Введіть середній бал" type="number" :error-messages="grades.error" @keyup.enter="checkGradesAnswer"></v-text-field>

												<v-expand-transition>
													<div v-if="grades.showSolution && grades.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення оцінок
math = int(input('Введіть оцінку з математики: '))
physics = int(input('Введіть оцінку з фізики: '))
chemistry = int(input('Введіть оцінку з хімії: '))
history = int(input('Введіть оцінку з історії: '))
literature = int(input('Введіть оцінку з літератури: '))

# Обчислення середнього балу
total = math + physics + chemistry + history + literature
subjects = 5
average = total / subjects

print(f'Середній бал: {average}')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkGradesAnswer">Перевірити</v-btn>
												<v-btn color="grey" @click="grades.dialog = false">Закрити</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<!-- Конвертер часу -->
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 10. Конвертер часу </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="text-h6 mb-4">Напишіть програму для конвертації 150 хвилин у години та хвилини.</p>

									<div class="d-flex mb-4">
										<v-btn color="primary" @click="time.dialog = true">Перевірити розв'язок</v-btn>
									</div>

									<v-dialog v-model="time.dialog" width="600px">
										<v-card>
											<v-card-title class="text-h5">Перевірка розв'язку</v-card-title>
											<v-card-text>
												<v-card class="mb-4 pa-4" color="grey-lighten-4">
													<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
													<div class="text-body-1">Кількість хвилин: 150</div>
												</v-card>

												<v-text-field v-model="time.hoursAnswer" label="Введіть кількість годин" type="number" :error-messages="time.hoursError"></v-text-field>
												<v-text-field v-model="time.minutesAnswer" label="Введіть кількість хвилин" type="number" :error-messages="time.minutesError"></v-text-field>

												<v-expand-transition>
													<div v-if="time.showSolution && time.isCorrect">
														<div class="d-flex align-center mb-2">
															<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
															<span class="text-subtitle-1">Правильно! Ось розв'язок:</span>
														</div>
														<v-sheet color="grey-lighten-4" class="pa-4 rounded">
															<pre><code># Введення загальної кількості хвилин
total_minutes = int(input('Введіть кількість хвилин: '))

# Обчислення годин та хвилин
hours = total_minutes // 60
minutes = total_minutes % 60

print(f'{total_minutes} хвилин = {hours} год {minutes} хв')</code></pre>
														</v-sheet>
													</div>
												</v-expand-transition>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="primary" @click="checkTimeAnswers">Перевірити</v-btn>
												<v-btn color="grey" @click="time.dialog = false">Закрити</v-btn>
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

const birthday = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const converter = ref({
	usdAnswer: '',
	eurAnswer: '',
	usdError: '',
	eurError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const flowerbed = ref({
	fenceAnswer: '',
	plantsAnswer: '',
	fenceError: '',
	plantsError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const squirrels = ref({
	nutsPerSquirrelAnswer: '',
	remainingNutsAnswer: '',
	nutsPerSquirrelError: '',
	remainingNutsError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const scales = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const cube = ref({
	volumeAnswer: '',
	areaAnswer: '',
	volumeError: '',
	areaError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const pizzeria = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const cafe = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const grades = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

const time = ref({
	hoursAnswer: '',
	minutesAnswer: '',
	hoursError: '',
	minutesError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
	dialog: false,
});

function checkBirthdayAnswer() {
	const expectedAnswer = 2 * 150 + 3 * 25;
	const userAnswer = parseFloat(birthday.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		birthday.value.error = '';
		birthday.value.showSolution = true;
		birthday.value.isCorrect = true;
		return;
	}

	birthday.value.attempts++;
	birthday.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkConverterAnswers() {
	const expectedUsd = 26.67;
	const expectedEur = 24.69;
	const userUsd = parseFloat(converter.value.usdAnswer);
	const userEur = parseFloat(converter.value.eurAnswer);

	if (Math.abs(userUsd - expectedUsd) <= 0.01 && Math.abs(userEur - expectedEur) <= 0.01) {
		converter.value.usdError = '';
		converter.value.eurError = '';
		converter.value.showSolution = true;
		converter.value.isCorrect = true;
		return;
	}

	converter.value.attempts++;

	if (Math.abs(userUsd - expectedUsd) > 0.01) {
		converter.value.usdError = 'Неправильна сума в доларах';
	}
	if (Math.abs(userEur - expectedEur) > 0.01) {
		converter.value.eurError = 'Неправильна сума в євро';
	}
}

function checkFlowerbedAnswers() {
	const expectedFence = 2 * (5 + 3);
	const expectedPlants = 5 * 3 * 4;
	const userFence = parseFloat(flowerbed.value.fenceAnswer);
	const userPlants = parseInt(flowerbed.value.plantsAnswer);

	if (Math.abs(userFence - expectedFence) <= 0.01 && userPlants === expectedPlants) {
		flowerbed.value.fenceError = '';
		flowerbed.value.plantsError = '';
		flowerbed.value.showSolution = true;
		flowerbed.value.isCorrect = true;
		return;
	}

	flowerbed.value.attempts++;

	if (Math.abs(userFence - expectedFence) > 0.01) {
		flowerbed.value.fenceError = 'Неправильна довжина огорожі';
	}
	if (userPlants !== expectedPlants) {
		flowerbed.value.plantsError = 'Неправильна кількість саджанців';
	}
}

function checkSquirrelsAnswers() {
	const expectedNutsPerSquirrel = Math.floor(23 / 5);
	const expectedRemainingNuts = 23 % 5;
	const userNutsPerSquirrel = parseInt(squirrels.value.nutsPerSquirrelAnswer);
	const userRemainingNuts = parseInt(squirrels.value.remainingNutsAnswer);

	if (userNutsPerSquirrel === expectedNutsPerSquirrel && userRemainingNuts === expectedRemainingNuts) {
		squirrels.value.nutsPerSquirrelError = '';
		squirrels.value.remainingNutsError = '';
		squirrels.value.showSolution = true;
		squirrels.value.isCorrect = true;
		return;
	}

	squirrels.value.attempts++;

	if (userNutsPerSquirrel !== expectedNutsPerSquirrel) {
		squirrels.value.nutsPerSquirrelError = 'Неправильна кількість горіхів на білочку';
	}
	if (userRemainingNuts !== expectedRemainingNuts) {
		squirrels.value.remainingNutsError = 'Неправильна кількість горіхів, що залишились';
	}
}

function checkScalesAnswer() {
	const d = 30;
	const k = 75;
	const expectedAnswer = k - (d + (d + 5));
	const userAnswer = parseFloat(scales.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		scales.value.error = '';
		scales.value.showSolution = true;
		scales.value.isCorrect = true;
		return;
	}

	scales.value.attempts++;
	scales.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkCubeAnswers() {
	const edge = 5;
	const expectedVolume = edge ** 3;
	const expectedArea = 6 * edge ** 2;
	const userVolume = parseFloat(cube.value.volumeAnswer);
	const userArea = parseFloat(cube.value.areaAnswer);

	if (Math.abs(userVolume - expectedVolume) <= 0.01 && Math.abs(userArea - expectedArea) <= 0.01) {
		cube.value.volumeError = '';
		cube.value.areaError = '';
		cube.value.showSolution = true;
		cube.value.isCorrect = true;
		return;
	}

	cube.value.attempts++;

	if (Math.abs(userVolume - expectedVolume) > 0.01) {
		cube.value.volumeError = "Неправильний об'єм куба";
	}
	if (Math.abs(userArea - expectedArea) > 0.01) {
		cube.value.areaError = 'Неправильна площа поверхні куба';
	}
}

function checkPizzeriaAnswer() {
	const count = 3;
	const price = 200;
	const total = count * price;
	const expectedAnswer = total * 0.9;
	const userAnswer = parseFloat(pizzeria.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		pizzeria.value.error = '';
		pizzeria.value.showSolution = true;
		pizzeria.value.isCorrect = true;
		return;
	}

	pizzeria.value.attempts++;
	pizzeria.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkCafeAnswer() {
	const expectedAnswer = 12.93;
	const userAnswer = parseFloat(cafe.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		cafe.value.error = '';
		cafe.value.showSolution = true;
		cafe.value.isCorrect = true;
		return;
	}

	cafe.value.attempts++;
	cafe.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkGradesAnswer() {
	const total = 10 + 11 + 9 + 12 + 10;
	const expectedAnswer = total / 5;
	const userAnswer = parseFloat(grades.value.answer);

	if (Math.abs(userAnswer - expectedAnswer) <= 0.01) {
		grades.value.error = '';
		grades.value.showSolution = true;
		grades.value.isCorrect = true;
		return;
	}

	grades.value.attempts++;
	grades.value.error = 'Неправильна відповідь. Спробуйте ще раз';
}

function checkTimeAnswers() {
	const totalMinutes = 150;
	const expectedHours = Math.floor(totalMinutes / 60);
	const expectedMinutes = totalMinutes % 60;
	const userHours = parseInt(time.value.hoursAnswer);
	const userMinutes = parseInt(time.value.minutesAnswer);

	if (userHours === expectedHours && userMinutes === expectedMinutes) {
		time.value.hoursError = '';
		time.value.minutesError = '';
		time.value.showSolution = true;
		time.value.isCorrect = true;
		return;
	}

	time.value.attempts++;

	if (userHours !== expectedHours) {
		time.value.hoursError = 'Неправильна кількість годин';
	}
	if (userMinutes !== expectedMinutes) {
		time.value.minutesError = 'Неправильна кількість хвилин';
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
