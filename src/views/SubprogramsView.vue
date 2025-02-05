<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Підпрограми в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Що таке підпрограми?</h2>
						<p class="mb-4">
							Підпрограми (функції) - це блоки коду, які можна використовувати повторно. Вони допомагають організувати код, зробити його більш читабельним та уникнути повторень. В Python
							підпрограми створюються за допомогою ключового слова def.
						</p>

						<h2 class="text-h5 mb-4">Створення простої функції</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Функція без параметрів
def say_hello():
    print("Привіт, світ!")

# Функція з параметром
def greet(name):
    print(f"Привіт, {name}!")

# Виклик функцій
say_hello()
greet("Іван")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Параметри та аргументи</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Функція з декількома параметрами
def calculate_rectangle_area(width, height):
    area = width * height
    return area

# Позиційні аргументи
area1 = calculate_rectangle_area(5, 3)

# Іменовані аргументи
area2 = calculate_rectangle_area(height=3, width=5)</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Значення за замовчуванням</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>def greet_user(name, greeting="Привіт"):
    print(f"{greeting}, {name}!")

greet_user("Марія")           # Використовує значення за замовчуванням
greet_user("Петро", "Вітаю")  # Перевизначає значення за замовчуванням</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Повернення значень</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Функція з поверненням одного значення
def square(number):
    return number ** 2

# Функція з поверненням кількох значень
def get_coordinates():
    x = 10
    y = 20
    return x, y  # Повертає кортеж

# Використання результатів
result = square(5)
x_coord, y_coord = get_coordinates()</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Області видимості</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Глобальні та локальні змінні
global_var = 10

def test_scope():
    local_var = 20
    print(f"Локальна змінна: {local_var}")
    print(f"Глобальна змінна: {global_var}")

def modify_global():
    global global_var
    global_var = 30</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Рекурсія</h2>
						<p class="mb-4">Рекурсія - це коли функція викликає сама себе:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Приклад рекурсивної функції
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Обчислення факторіалу
result = factorial(5)  # 5! = 5 * 4 * 3 * 2 * 1 = 120</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Намагайтеся створювати функції, які виконують одне конкретне завдання. Це робить код більш модульним та легшим для тестування та підтримки."
							class="mb-4"
						></v-alert>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
:deep(.v-card-title) {
	white-space: normal !important;
	word-wrap: break-word;
}
</style>
