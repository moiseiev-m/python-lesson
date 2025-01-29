<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Умовні конструкції </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">if-elif-else</h2>
						<p class="mb-4">Умовні конструкції дозволяють виконувати різні блоки коду залежно від умов. В Python для цього використовується конструкція if-elif-else:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>age = 18

if age < 18:
    print("Ви неповнолітній")
elif age == 18:
    print("Вам щойно виповнилось 18!")
else:
    print("Ви повнолітній")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Оператори порівняння</h2>
						<v-list>
							<v-list-item v-for="(op, i) in operators" :key="i" :title="op.title" :subtitle="op.description">
								<template v-slot:prepend>
									<v-chip color="primary" variant="flat">{{ op.symbol }}</v-chip>
								</template>
							</v-list-item>
						</v-list>

						<h2 class="text-h5 my-4">Логічні оператори</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># and - логічне "І"
if age >= 18 and has_passport:
    print("Можете голосувати")

# or - логічне "АБО"
if is_weekend or is_holiday:
    print("Можна відпочивати")

# not - логічне "НЕ"
if not is_working:
    print("Зараз не робочий час")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Тернарний оператор</h2>
						<p class="mb-4">Python підтримує тернарний оператор - скорочену форму запису умовної конструкції:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Звичайний запис
if age >= 18:
    status = "повнолітній"
else:
    status = "неповнолітній"

# Тернарний оператор
status = "повнолітній" if age >= 18 else "неповнолітній"</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Вкладені умови</h2>
						<p class="mb-4">Умовні конструкції можуть бути вкладеними одна в одну:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>if age >= 18:
    if has_passport:
        if not is_banned:
            print("Можете голосувати")
        else:
            print("Ви в чорному списку")
    else:
        print("Потрібен паспорт")
else:
    print("Ви надто молоді")</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Намагайтеся уникати глибокого вкладення умов - це ускладнює читання коду. Краще розбивати складну логіку на окремі функції або використовувати ранні повернення."
							class="mb-4"
						></v-alert>

						<h2 class="text-h5 mb-4">Перевірка на наявність значення</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Перевірка на None
if value is None:
    print("Значення не встановлено")

# Перевірка на пустоту
if not text:  # працює для рядків, списків, словників
    print("Пусте значення")

# Перевірка на входження
if "python" in languages:
    print("Python знайдено!")

# Перевірка типу
if isinstance(value, str):
    print("Це рядок")</code></pre>
						</v-sheet>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/loops" prepend-icon="mdi-arrow-right"> Перейти до циклів </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
const operators = [
	{ symbol: '==', title: 'Рівність', description: 'Перевіряє, чи два значення рівні' },
	{ symbol: '!=', title: 'Нерівність', description: 'Перевіряє, чи два значення не рівні' },
	{ symbol: '<', title: 'Менше', description: 'Перевіряє, чи перше значення менше за друге' },
	{ symbol: '>', title: 'Більше', description: 'Перевіряє, чи перше значення більше за друге' },
	{ symbol: '<=', title: 'Менше або рівне', description: 'Перевіряє, чи перше значення менше або рівне другому' },
	{ symbol: '>=', title: 'Більше або рівне', description: 'Перевіряє, чи перше значення більше або рівне другому' },
	{ symbol: 'is', title: 'Ідентичність', description: "Перевіряє, чи два об'єкти є тим самим об'єктом в пам'яті" },
	{ symbol: 'in', title: 'Входження', description: 'Перевіряє, чи елемент входить до послідовності' },
];
</script>

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
