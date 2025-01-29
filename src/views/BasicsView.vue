<script setup>
</script>

<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Основи Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Перша програма</h2>
						<p class="mb-4">Традиційно, перша програма, яку пишуть при вивченні нової мови програмування, виводить текст "Hello, World!". В Python це робиться дуже просто:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>print("Hello, World!")</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Коментарі</h2>
						<p class="mb-4">Коментарі в коді допомагають пояснити, що робить програма. В Python є два типи коментарів:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Це однорядковий коментар

'''
Це багаторядковий
коментар
'''</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Правила написання коду</h2>
						<v-list>
							<v-list-item
								prepend-icon="mdi-format-indent-increase"
								title="Відступи"
								subtitle="Python використовує відступи для визначення блоків коду. Зазвичай використовують 4 пробіли"
							></v-list-item>
							<v-list-item prepend-icon="mdi-format-line-spacing" title="Нові рядки" subtitle="Кожна інструкція зазвичай пишеться з нового рядка"></v-list-item>
							<v-list-item prepend-icon="mdi-format-letter-case" title="Регістр має значення" subtitle="name і Name - це різні змінні"></v-list-item>
						</v-list>

						<h2 class="text-h5 my-4">Приклад програми</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Програма для обчислення площі прямокутника

# Введення довжини і ширини
length = 5
width = 3

# Обчислення площі
area = length * width

# Виведення результату
print('Площа прямокутника:', area)</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Пишіть зрозумілий код. Хороший код повинен бути самодокументованим - його легко читати і розуміти без додаткових пояснень"
							class="mb-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/variables" prepend-icon="mdi-arrow-right"> Перейти до змінних </v-btn>
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
