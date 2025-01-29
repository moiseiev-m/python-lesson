<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Змінні та типи даних </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Змінні в Python</h2>
						<p class="mb-4">Змінна - це місце в пам'яті комп'ютера, де зберігається певне значення. В Python не потрібно оголошувати тип змінної - він визначається автоматично.</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Створення змінних
name = "Іван"        # рядок
age = 25            # ціле число
height = 1.75       # число з плаваючою комою
is_student = True   # логічне значення</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Основні типи даних</h2>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title>
									<v-icon start>mdi-format-quote-close</v-icon>
									Рядки (str)
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Рядки - це послідовності символів. Можуть бути в одинарних або подвійних лапках.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>text = "Привіт, світ!"
name = 'Python'
multiline = """Це
багаторядковий
текст"""

# Операції з рядками
print(text + " " + name)  # конкатенація
print(text * 2)           # повторення
print(len(text))          # довжина
print(text.upper())       # верхній регістр</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title>
									<v-icon start>mdi-numeric</v-icon>
									Числа (int, float)
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Python підтримує цілі числа (int) та числа з плаваючою комою (float).</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code># Цілі числа
x = 5
y = -10
big_num = 1_000_000  # для кращої читабельності

# Числа з плаваючою комою
pi = 3.14159
e = 2.71828

# Арифметичні операції
sum = x + y
product = x * y
division = x / y      # ділення з плаваючою комою
floor_div = x // y    # цілочисельне ділення
remainder = x % y     # остача від ділення
power = x ** 2        # піднесення до степеня</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title>
									<v-icon start>mdi-toggle-switch</v-icon>
									Логічні значення (bool)
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Логічний тип даних може мати лише два значення: True або False.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>is_active = True
is_closed = False

# Логічні операції
and_result = True and False  # False
or_result = True or False   # True
not_result = not True       # False

# Порівняння
x = 5
y = 10
print(x < y)    # True
print(x == y)   # False
print(x >= 5)   # True</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title>
									<v-icon start>mdi-null</v-icon>
									None
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>None - спеціальне значення, яке представляє відсутність значення.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>result = None

# Перевірка на None
if result is None:
    print("Значення не встановлено")

# None часто використовується як значення за замовчуванням
def my_function(param=None):
    if param is None:
        param = "значення за замовчуванням"
    return param</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>

						<h2 class="text-h5 my-4">Перетворення типів</h2>
						<p class="mb-4">Python дозволяє перетворювати значення з одного типу в інший:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Перетворення в рядок
num = 42
text = str(num)      # "42"

# Перетворення в число
text = "123"
num = int(text)      # 123
float_num = float("3.14")  # 3.14

# Перетворення в логічне значення
bool(1)      # True
bool(0)      # False
bool("")     # False
bool("text") # True</code></pre>
						</v-sheet>

						<v-alert
							color="warning"
							icon="mdi-alert"
							title="Важливо!"
							text="Python - мова з динамічною типізацією. Одна і та ж змінна може містити значення різних типів в різний час виконання програми. Але це не означає, що типи не важливі - важливо розуміти, з яким типом даних ви працюєте в кожен момент часу."
							class="mb-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/conditions" prepend-icon="mdi-arrow-right"> Перейти до умовних конструкцій </v-btn>
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
