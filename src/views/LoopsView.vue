<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Цикли в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Цикл for</h2>
						<p class="mb-4">Цикл for в Python використовується для ітерації по послідовностях (списках, кортежах, рядках тощо) або інших ітерованих об'єктах:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Ітерація по списку
fruits = ["яблуко", "банан", "апельсин"]
for fruit in fruits:
    print(fruit)

# Ітерація по діапазону чисел
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Ітерація по рядку
for char in "Python":
    print(char)

# Ітерація з індексом
for index, value in enumerate(fruits):
    print(f"Індекс {index}: {value}")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Цикл while</h2>
						<p class="mb-4">Цикл while виконується доти, доки умова істинна:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Простий приклад
count = 0
while count < 5:
    print(count)
    count += 1

# Нескінченний цикл з break
while True:
    response = input("Введіть 'вихід' для завершення: ")
    if response == "вихід":
        break

# Цикл з умовою та лічильником
number = 1
while number <= 10:
    if number % 2 == 0:
        print(f"{number} - парне число")
    number += 1</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Керування циклами</h2>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title> break </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Оператор break повністю припиняє виконання циклу:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>for i in range(10):
    if i == 5:
        break  # вихід з циклу при i = 5
    print(i)</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title> continue </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Оператор continue пропускає решту коду в поточній ітерації і переходить до наступної:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>for i in range(5):
    if i == 2:
        continue  # пропуск ітерації при i = 2
    print(i)</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title> else в циклах </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Блок else в циклі виконується, якщо цикл завершився нормально (без break):</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>for i in range(5):
    if i == 10:
        break
else:
    print("Цикл завершився нормально")</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>

						<h2 class="text-h5 my-4">Корисні функції для циклів</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-function" title="range()" subtitle="Створює послідовність чисел: range(start, stop, step)"></v-list-item>
							<v-list-item prepend-icon="mdi-function" title="enumerate()" subtitle="Повертає пари (індекс, значення) для ітерованого об'єкта"></v-list-item>
							<v-list-item prepend-icon="mdi-function" title="zip()" subtitle="Об'єднує елементи з кількох послідовностей"></v-list-item>
						</v-list>

						<v-sheet color="grey-lighten-4" class="pa-4 my-4 rounded">
							<pre><code># Приклад використання zip()
names = ["Анна", "Петро", "Марія"]
ages = [25, 30, 22]

for name, age in zip(names, ages):
    print(f"{name} має {age} років")</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="У Python часто використовують генератори списків (list comprehension) замість простих циклів for - вони компактніші та часто більш читабельні"
							class="mb-4"
						></v-alert>

						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Звичайний цикл
squares = []
for i in range(5):
    squares.append(i ** 2)

# Те саме з використанням генератора списків
squares = [i ** 2 for i in range(5)]</code></pre>
						</v-sheet>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/functions" prepend-icon="mdi-arrow-right"> Перейти до функцій </v-btn>
					</v-card-actions>
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
	font-family: monospace;
}
code {
	color: #24292e;
}
</style>
