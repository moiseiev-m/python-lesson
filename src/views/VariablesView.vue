<script setup>
import variablesExamples from '@/assets/pdf/variables-examples.pdf';
</script>

<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-text class="text-body-1">
						<v-card-title class="text-h4 font-weight-bold text-center py-4"> Змінні та типи даних </v-card-title>
						<p class="mb-4">
							<a href="https://ed-info.github.io/epython/" target="_blank">ЄPython - програмувати просто! - https://ed-info.github.io/epython/</a>
						</p>
						<h3 class="text-h6 mb-1">Ті фунції які ми будемо використовувати:</h3>
						<p class="mb-1"><b>float()</b> - змінні цього типу можуть набувати як цілих, так і дробових значень;</p>
						<p class="mb-1"><b>int()</b> - змінні цього типу можуть набувати тільки цілих значень;</p>
						<p class="mb-1"><b>str()</b> - змінні цього типу можуть набувати тільки текстових значень;</p>
						<p class="mb-1"><b>print()</b> - виводить текст на екран;</p>
						<p class="mb-1"><b>input()</b> - зчитує введення з клавіатури;</p>
						<p class="mb-6"><b>round()</b> - округлює число до найближчого цілого.</p>
						<h2 class="text-h5 my-2">Приклад програми</h2>
						<p class="mb-1">
							На 1 м<sup>2</sup> площі клумби, що має довжину а та ширину b, припадає 4 саджанці. Потрібно порахувати довжину огорожі та кількість саджанців, які треба закупити.
						</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>a=int(input('Введіть довжину клумби: '))
b=int(input('Введіть ширину клумби: '))
p=2*(a+b)
s=a*b
k=s*4
print('Довжина огорожі = ', p)
print('Кількість саджанців = ', k)</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Змінні в Python</h2>
						<p class="mb-4">Змінна - це місце в пам'яті комп'ютера, де зберігається певне значення. В Python не потрібно оголошувати тип змінної - він визначається автоматично.</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Створення змінних
name = "Іван"        # рядок
age = 25            # ціле число
height = 1.75       # число з плаваючою комою
is_student = True   # логічне значення</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-1">Типи змінних величин</h2>
						<p class="mb-1">Імена змінних у мові програмування Python можуть містити:</p>
						<v-list class="mb-6">
							<v-list-item prepend-icon="mdi-format-letter-case" title="Великі та малі літери" subtitle="Х і х - це різні змінні"></v-list-item>
							<v-list-item prepend-icon="mdi-format-letter-case" title="Цифри" subtitle="Імена змінних не можуть починатися з цифри"></v-list-item>
							<v-list-item
								prepend-icon="mdi-format-letter-case"
								title="Спеціальні символи"
								subtitle="Імена змінних не можуть містити спеціальні символи, крім нижнього підкреслення (_)"
							></v-list-item>
						</v-list>

						<h2 class="text-h5 my-4">Перетворення типів</h2>
						<p class="mb-4">Python дозволяє перетворювати значення з одного типу в інший:</p>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code># Перетворення в рядок
num = 42
text = str(num)      # "42"

# Перетворення в число
text = "123"
num = int(text)      # 123
float_num = float("3.14")  # 3.14</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-alert"
							title="Важливо!"
							text="У математиці символ = означає «дорівнює». У багатьох мовах програмування, включаючи Python, цей символ використовується для позначення «присвоювання»."
							class="mb-4"
						></v-alert>
						<v-alert
							color="info"
							icon="mdi-alert"
							title="Важливо!"
							text="Python - мова з динамічною типізацією. Одна і та ж змінна може містити значення різних типів в різний час виконання програми. Але це не означає, що типи не важливі - важливо розуміти, з яким типом даних ви працюєте в кожен момент часу."
							class="mb-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/conditions" prepend-icon="mdi-arrow-right"> Перейти до умовних конструкцій </v-btn>
						<v-btn color="secondary" :href="variablesExamples" target="_blank" prepend-icon="mdi-file-pdf"> Додаткові приклади </v-btn>
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
