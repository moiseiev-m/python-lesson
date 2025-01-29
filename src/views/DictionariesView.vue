<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Словники в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Що таке словники?</h2>
						<p class="mb-4">Словники (dictionaries) - це колекції пар "ключ-значення". Вони дозволяють зберігати та отримувати дані за унікальними ключами:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Створення словника
person = {
    "name": "Іван",
    "age": 25,
    "city": "Київ"
}

# Доступ до значень
name = person["name"]      # за допомогою []
age = person.get("age")    # за допомогою get()
# get() безпечніший, бо повертає None якщо ключа немає

# Зміна значень
person["age"] = 26
person["email"] = "ivan@example.com"  # додавання нової пари</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Методи словників</h2>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title> Основні операції </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code># Отримання всіх ключів
keys = person.keys()

# Отримання всіх значень
values = person.values()

# Отримання пар ключ-значення
items = person.items()

# Видалення пари
del person["age"]
removed = person.pop("city")  # видаляє і повертає значення

# Очищення словника
person.clear()</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title> Корисні методи </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code># Об'єднання словників
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
dict1.update(dict2)

# Значення за замовчуванням
age = person.get("age", 0)  # 0, якщо ключа немає

# Перевірка наявності ключа
if "name" in person:
    print("Ім'я існує")

# Безпечне отримання значення
value = person.setdefault("status", "активний")  # додає пару, якщо ключа немає</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>

						<h2 class="text-h5 my-4">Вкладені словники</h2>
						<p class="mb-4">Словники можуть містити інші словники як значення:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>users = {
    "user1": {
        "name": "Іван",
        "age": 25,
        "contacts": {
            "email": "ivan@example.com",
            "phone": "+380991234567"
        }
    },
    "user2": {
        "name": "Марія",
        "age": 30,
        "contacts": {
            "email": "maria@example.com",
            "phone": "+380997654321"
        }
    }
}

# Доступ до вкладених значень
email = users["user1"]["contacts"]["email"]</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Генератори словників</h2>
						<p class="mb-4">Як і списки, словники можна створювати за допомогою генераторів:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Створення словника з двох списків
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = dict(zip(keys, values))

# Генератор словника
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Фільтрація в генераторі
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Типові застосування</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-counter" title="Підрахунок частоти" subtitle="Підрахунок кількості входжень елементів">
								<template v-slot:append>
									<v-sheet color="grey-lighten-4" class="pa-2 rounded">
										<code>Counter()</code>
									</v-sheet>
								</template>
							</v-list-item>
							<v-list-item prepend-icon="mdi-cached" title="Кешування" subtitle="Зберігання результатів обчислень">
								<template v-slot:append>
									<v-sheet color="grey-lighten-4" class="pa-2 rounded">
										<code>@lru_cache</code>
									</v-sheet>
								</template>
							</v-list-item>
							<v-list-item prepend-icon="mdi-graph" title="Графи" subtitle="Представлення зв'язків між вузлами">
								<template v-slot:append>
									<v-sheet color="grey-lighten-4" class="pa-2 rounded">
										<code>defaultdict(list)</code>
									</v-sheet>
								</template>
							</v-list-item>
						</v-list>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Використовуйте collections.defaultdict для словників з значеннями за замовчуванням та collections.Counter для підрахунку елементів"
							class="mt-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/" prepend-icon="mdi-home"> На головну </v-btn>
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
