<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Консольні проєкти</v-card-title>

					<v-card-text class="text-body-1">
						<!-- День народження -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 1. Програма "День народження" </v-card-title>
							<v-card-text>
								<!-- Опис завдання -->
								<p class="text-h6 mb-4">
									Марічка для святкування свого дня народження хоче купити a кг цукерок за ціною x грн за 1 кг і b пляшок лимонаду за ціною y грн за 1 пляшку. Складіть проєкт для визначення
									вартості цієї покупки.
								</p>

								<!-- Вхідні дані -->
								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">a = 2 кг цукерок</div>
									<div class="text-body-1">x = 150 грн за 1 кг</div>
									<div class="text-body-1">b = 3 пляшки лимонаду</div>
									<div class="text-body-1">y = 25 грн за пляшку</div>
								</v-card>

								<!-- Поле введення -->
								<v-card class="my-4 pa-4">
									<v-text-field
										v-model="birthday.answer"
										label="Введіть вашу відповідь"
										type="number"
										suffix="грн"
										:error-messages="birthday.error"
										@keyup.enter="checkBirthdayAnswer"
									></v-text-field>
									<v-btn color="primary" @click="checkBirthdayAnswer"> Перевірити </v-btn>
								</v-card>

								<!-- Розв'язок -->
								<v-expand-transition>
									<div v-if="birthday.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="birthday.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ birthday.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Конвертер валют -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 2. Конвертер валют </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">Напишіть програму для конвертації гривень (UAH) в долари (USD) та євро (EUR).</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Сума: 1000 грн</div>
									<div class="text-body-1">Курс USD: 37.5 грн</div>
									<div class="text-body-1">Курс EUR: 40.5 грн</div>
								</v-card>

								<v-card class="my-4 pa-4">
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
									<v-btn color="primary" @click="checkConverterAnswers"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="converter.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="converter.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ converter.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
												<v-sheet color="grey-lighten-4" class="pa-4 rounded">
													<pre><code>usd_rate = 37.5
eur_rate = 40.5
uah = float(input('Введіть суму в гривнях: '))

usd = round(uah / usd_rate, 2)
eur = round(uah / eur_rate, 2)

print(f'{uah} грн = {usd} USD')
print(f'{uah} грн = {eur} EUR')</code></pre>
												</v-sheet>
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Клумба -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 3. Клумба </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">
									На прямокутній клумбі зі сторонами a=5 м і b=3 м потрібно встановити огорожу та висадити квіти. Обчисліть довжину огорожі та кількість саджанців, якщо на 1 кв. м висаджують
									4 саджанці.
								</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">a = 5 м (довжина)</div>
									<div class="text-body-1">b = 3 м (ширина)</div>
									<div class="text-body-1">4 саджанці на 1 кв. м</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field v-model="flowerbed.fenceAnswer" label="Введіть довжину огорожі" type="number" suffix="м" :error-messages="flowerbed.fenceError"></v-text-field>
									<v-text-field v-model="flowerbed.plantsAnswer" label="Введіть кількість саджанців" type="number" :error-messages="flowerbed.plantsError"></v-text-field>
									<v-btn color="primary" @click="checkFlowerbedAnswers"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="flowerbed.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="flowerbed.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ flowerbed.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Білочки -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 4. Білочки </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">
									У кошику є 23 горіхи. Потрібно роздати їх 5 білочкам порівну (однакова кількість горіхів кожній білочці). Визначте, скільки горіхів отримає кожна білочка і скільки горіхів
									залишиться в кошику.
								</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Кількість горіхів: 23</div>
									<div class="text-body-1">Кількість білочок: 5</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field
										v-model="squirrels.nutsPerSquirrelAnswer"
										label="Скільки горіхів отримає кожна білочка"
										type="number"
										:error-messages="squirrels.nutsPerSquirrelError"
									></v-text-field>
									<v-text-field v-model="squirrels.remainingNutsAnswer" label="Скільки горіхів залишиться" type="number" :error-messages="squirrels.remainingNutsError"></v-text-field>
									<v-btn color="primary" @click="checkSquirrelsAnswers"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="squirrels.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="squirrels.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ squirrels.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Терези -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 5. Терези </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">
									На одній чаші терезів стоїть Даринка (30 кг), а на іншій - коробка цукерок (75 кг). Поруч стоїть Оленка, яка на 5 кг важча за Даринку. Скільки кілограмів цукерок потрібно
									з'їсти дівчаткам, щоб терези зрівноважились?
								</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Вага Даринки: 30 кг</div>
									<div class="text-body-1">Вага цукерок: 75 кг</div>
									<div class="text-body-1">Оленка важча на: 5 кг</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field
										v-model="scales.answer"
										label="Скільки кг цукерок треба з'їсти"
										type="number"
										suffix="кг"
										:error-messages="scales.error"
										@keyup.enter="checkScalesAnswer"
									></v-text-field>
									<v-btn color="primary" @click="checkScalesAnswer"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="scales.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="scales.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ scales.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Куб -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 6. Куб </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">Обчисліть об'єм куба та площу його поверхні, якщо довжина ребра куба дорівнює 5 одиниць.</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Довжина ребра: 5 од.</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field v-model="cube.volumeAnswer" label="Введіть об'єм куба" type="number" suffix="куб. од." :error-messages="cube.volumeError"></v-text-field>
									<v-text-field v-model="cube.areaAnswer" label="Введіть площу поверхні куба" type="number" suffix="кв. од." :error-messages="cube.areaError"></v-text-field>
									<v-btn color="primary" @click="checkCubeAnswers"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="cube.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="cube.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ cube.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Піцерія -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 7. Піцерія </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">У піцерії кожна піца коштує 200 грн. При замовленні 3 піц надається знижка 10%. Обчисліть, скільки потрібно заплатити за замовлення.</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Ціна однієї піци: 200 грн</div>
									<div class="text-body-1">Кількість піц: 3</div>
									<div class="text-body-1">Знижка: 10%</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field
										v-model="pizzeria.answer"
										label="Введіть суму до сплати"
										type="number"
										suffix="грн"
										:error-messages="pizzeria.error"
										@keyup.enter="checkPizzeriaAnswer"
									></v-text-field>
									<v-btn color="primary" @click="checkPizzeriaAnswer"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="pizzeria.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="pizzeria.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ pizzeria.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
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
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>

						<!-- Кафе -->
						<v-card class="mb-4">
							<v-card-title class="text-h5 bg-green text-white"> Завдання 8. Кафе </v-card-title>
							<v-card-text>
								<p class="text-h6 mb-4">
									Компанія з 14 друзів вирішила разом пообідати в кафе. Загальний рахунок становить 181 грн. Обчисліть, скільки повинен заплатити кожен друг, якщо вони вирішили розділити
									рахунок порівну.
								</p>

								<v-card class="my-4 pa-4" color="grey-lighten-4">
									<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
									<div class="text-body-1">Загальний рахунок: 181 грн</div>
									<div class="text-body-1">Кількість друзів: 14</div>
								</v-card>

								<v-card class="my-4 pa-4">
									<v-text-field
										v-model="cafe.answer"
										label="Введіть суму на одного друга"
										type="number"
										suffix="грн"
										:error-messages="cafe.error"
										@keyup.enter="checkCafeAnswer"
									></v-text-field>
									<v-btn color="primary" @click="checkCafeAnswer"> Перевірити </v-btn>
								</v-card>

								<v-expand-transition>
									<div v-if="cafe.showSolution">
										<v-card class="mt-4" color="grey-lighten-4">
											<v-card-title>
												<v-icon :color="cafe.isCorrect ? 'success' : 'primary'" class="mr-2">
													{{ cafe.isCorrect ? 'mdi-check-circle' : 'mdi-code-tags' }}
												</v-icon>
												Розв'язок
											</v-card-title>
											<v-card-text>
												<v-sheet color="grey-lighten-4" class="pa-4 rounded">
													<pre><code># Введення суми рахунку та кількості друзів
total = float(input('Введіть загальну суму рахунку: '))
friends = int(input('Введіть кількість друзів: '))

# Обчислення суми на одного друга
per_person = round(total / friends, 2)

print(f'Кожен повинен заплатити: {per_person} грн')</code></pre>
												</v-sheet>
											</v-card-text>
										</v-card>
									</div>
								</v-expand-transition>
							</v-card-text>
						</v-card>
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
});

const converter = ref({
	usdAnswer: '',
	eurAnswer: '',
	usdError: '',
	eurError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const flowerbed = ref({
	fenceAnswer: '',
	plantsAnswer: '',
	fenceError: '',
	plantsError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const squirrels = ref({
	nutsPerSquirrelAnswer: '',
	remainingNutsAnswer: '',
	nutsPerSquirrelError: '',
	remainingNutsError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const scales = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const cube = ref({
	volumeAnswer: '',
	areaAnswer: '',
	volumeError: '',
	areaError: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const pizzeria = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
});

const cafe = ref({
	answer: '',
	error: '',
	showSolution: false,
	attempts: 0,
	isCorrect: false,
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

	if (birthday.value.attempts >= 3) {
		birthday.value.showSolution = true;
		birthday.value.isCorrect = false;
	}
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

	if (converter.value.attempts >= 3) {
		converter.value.showSolution = true;
		converter.value.isCorrect = false;
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

	if (flowerbed.value.attempts >= 3) {
		flowerbed.value.showSolution = true;
		flowerbed.value.isCorrect = false;
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

	if (squirrels.value.attempts >= 3) {
		squirrels.value.showSolution = true;
		squirrels.value.isCorrect = false;
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

	if (scales.value.attempts >= 3) {
		scales.value.showSolution = true;
		scales.value.isCorrect = false;
	}
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

	if (cube.value.attempts >= 3) {
		cube.value.showSolution = true;
		cube.value.isCorrect = false;
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

	if (pizzeria.value.attempts >= 3) {
		pizzeria.value.showSolution = true;
		pizzeria.value.isCorrect = false;
	}
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

	if (cafe.value.attempts >= 3) {
		cafe.value.showSolution = true;
		cafe.value.isCorrect = false;
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
