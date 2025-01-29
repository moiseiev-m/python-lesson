<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Функції в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Визначення функцій</h2>
						<p class="mb-4">Функції в Python визначаються за допомогою ключового слова def. Вони можуть приймати параметри та повертати значення:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Проста функція
def greet(name):
    return f"Привіт, {name}!"

# Функція з декількома параметрами
def add_numbers(a, b):
    return a + b

# Функція без повернення значення
def print_info(name, age):
    print(f"Ім'я: {name}, Вік: {age}")

# Виклик функцій
message = greet("Іван")
result = add_numbers(5, 3)
print_info("Марія", 25)</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Параметри функцій</h2>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title> Позиційні та іменовані аргументи </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>def user_info(name, age, city):
    return f"{name}, {age} років, місто {city}"

# Позиційні аргументи
print(user_info("Іван", 25, "Київ"))

# Іменовані аргументи
print(user_info(age=25, city="Київ", name="Іван"))</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title> Значення за замовчуванням </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>def greet(name, greeting="Привіт"):
    return f"{greeting}, {name}!"

print(greet("Іван"))          # Привіт, Іван!
print(greet("Марія", "Вітаю")) # Вітаю, Марія!</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title> *args та **kwargs </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code># *args для довільної кількості позиційних аргументів
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs для довільної кількості іменованих аргументів
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Іван", age=25, city="Київ")</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>

						<h2 class="text-h5 my-4">Області видимості</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>x = 10  # глобальна змінна

def test_scope():
    x = 20  # локальна змінна
    print(f"Локальна x: {x}")

def use_global():
    global x  # використання глобальної змінної
    x = 30

test_scope()
print(f"Глобальна x: {x}")  # 10
use_global()
print(f"Змінена глобальна x: {x}")  # 30</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Лямбда-функції</h2>
						<p class="mb-4">Лямбда-функції - це анонімні функції, які можуть містити лише один вираз:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Звичайна функція
def square(x):
    return x ** 2

# Те саме як лямбда-функція
square = lambda x: x ** 2

# Використання з вбудованими функціями
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Документація функцій</h2>
						<p class="mb-4">Документація функцій (docstring) допомагає пояснити, що робить функція:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>def calculate_area(width, height):
    """
    Обчислює площу прямокутника.

    Args:
        width (float): Ширина прямокутника
        height (float): Висота прямокутника

    Returns:
        float: Площа прямокутника
    """
    return width * height

# Отримання документації
help(calculate_area)
print(calculate_area.__doc__)</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Завжди додавайте документацію до функцій - це допоможе іншим розробникам (і вам у майбутньому) зрозуміти, як використовувати вашу функцію"
							class="mb-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/lists" prepend-icon="mdi-arrow-right"> Перейти до списків </v-btn>
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
