<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Розгалуження в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Що таке розгалуження?</h2>
						<p class="mb-4">
							Розгалуження - це конструкції в програмуванні, які дозволяють виконувати різні блоки коду залежно від умов. В Python основною конструкцією розгалуження є if-elif-else:
						</p>

						<h2 class="text-h5 mb-4">Проста конструкція if</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Простий приклад if
age = 18
if age >= 18:
    print("Ви повнолітній")

# З блоком else
if age >= 18:
    print("Ви повнолітній")
else:
    print("Ви неповнолітній")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Розширена конструкція if-elif-else</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Приклад з декількома умовами
score = 85

if score >= 90:
    grade = "Відмінно"
elif score >= 80:
    grade = "Добре"
elif score >= 70:
    grade = "Задовільно"
else:
    grade = "Потребує покращення"

print(f"Ваша оцінка: {grade}")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Вкладені розгалуження</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Приклад вкладених умов
is_weekend = True
is_sunny = True

if is_weekend:
    if is_sunny:
        print("Ідемо на пікнік!")
    else:
        print("Дивимось фільм вдома")
else:
    print("Робочий день - йдемо на роботу")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Логічні оператори</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-equal" title="and" subtitle="Логічне 'І' - обидві умови мають бути істинними"></v-list-item>
							<v-list-item prepend-icon="mdi-pipe" title="or" subtitle="Логічне 'АБО' - хоча б одна умова має бути істинною"></v-list-item>
							<v-list-item prepend-icon="mdi-not-equal" title="not" subtitle="Логічне 'НЕ' - заперечення умови"></v-list-item>
						</v-list>

						<v-sheet color="grey-lighten-4" class="pa-4 my-4 rounded">
							<pre><code># Приклад використання логічних операторів
has_ticket = True
has_passport = True

if has_ticket and has_passport:
    print("Можете сідати на літак")
elif has_ticket or has_passport:
    print("Не вистачає документів")
else:
    print("Немає необхідних документів")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Тернарний оператор</h2>
						<p class="mb-4">Python підтримує короткий запис умовного оператора в одному рядку:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Звичайний запис
if age >= 18:
    status = "дорослий"
else:
    status = "неповнолітній"

# Тернарний оператор
status = "дорослий" if age >= 18 else "неповнолітній"</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Використовуйте тернарний оператор для простих умов. Для складних умов краще використовувати звичайний if-elif-else для кращої читабельності коду."
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
