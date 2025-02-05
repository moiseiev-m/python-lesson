<script setup>
import { ref } from 'vue';

const activePanel = ref(0);
</script>

<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Віконні проєкти в Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-4">Створення віконних додатків</h2>
						<p class="mb-4">
							Python має декілька бібліотек для створення графічних інтерфейсів. Найпопулярніші з них - це tkinter (входить до стандартної бібліотеки), PyQt та wxPython. Ми розглянемо основи
							роботи з tkinter, оскільки ця бібліотека вже встановлена разом з Python.
						</p>

						<h2 class="text-h5 mb-4">Основи Tkinter</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>import tkinter as tk
from tkinter import ttk

# Створення головного вікна
window = tk.Tk()
window.title("Моя перша програма")
window.geometry("300x200")

# Додавання елементів
label = ttk.Label(window, text="Привіт, світ!")
label.pack()

button = ttk.Button(window, text="Натисни мене")
button.pack()

# Запуск головного циклу
window.mainloop()</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Основні віджети</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-text" title="Label" subtitle="Для відображення тексту"></v-list-item>
							<v-list-item prepend-icon="mdi-button-cursor" title="Button" subtitle="Кнопка для виконання дій"></v-list-item>
							<v-list-item prepend-icon="mdi-form-textbox" title="Entry" subtitle="Поле для введення тексту"></v-list-item>
							<v-list-item prepend-icon="mdi-text-box" title="Text" subtitle="Багаторядкове текстове поле"></v-list-item>
							<v-list-item prepend-icon="mdi-checkbox-marked" title="Checkbutton" subtitle="Прапорець"></v-list-item>
							<v-list-item prepend-icon="mdi-radiobox-marked" title="Radiobutton" subtitle="Перемикач"></v-list-item>
						</v-list>

						<h2 class="text-h5 my-4">Обробка подій</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>def button_click():
    label.config(text="Кнопку натиснуто!")

button = ttk.Button(window, text="Натисни мене", command=button_click)
button.pack()

# Обробка подій клавіатури
def key_press(event):
    print(f"Натиснуто клавішу: {event.char}")

window.bind("Key", key_press)</code></pre>
						</v-sheet>

						<h2 class="text-h5 mb-4">Розміщення віджетів</h2>
						<v-expansion-panels v-model="activePanel">
							<v-expansion-panel>
								<v-expansion-panel-title>pack()</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Простий спосіб розміщення віджетів один за одним:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>label1.pack()
label2.pack(side="left")
button1.pack(fill="x")</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title>grid()</v-expansion-panel-title>
								<v-expansion-panel-text>
									<p>Розміщення віджетів у вигляді таблиці:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mt-2 rounded">
										<pre><code>label.grid(row=0, column=0)
entry.grid(row=0, column=1)
button.grid(row=1, column=0, columnspan=2)</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>

						<h2 class="text-h5 my-4">Приклад простого калькулятора</h2>
						<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
							<pre><code>import tkinter as tk
from tkinter import ttk

def calculate():
    try:
        num1 = float(entry1.get())
        num2 = float(entry2.get())
        result = num1 + num2
        result_label.config(text=f"Результат: {result}")
    except ValueError:
        result_label.config(text="Помилка: введіть числа")

window = tk.Tk()
window.title("Калькулятор")

entry1 = ttk.Entry(window)
entry1.pack(pady=5)

entry2 = ttk.Entry(window)
entry2.pack(pady=5)

calc_button = ttk.Button(window, text="Додати", command=calculate)
calc_button.pack(pady=5)

result_label = ttk.Label(window, text="Результат: ")
result_label.pack(pady=5)

window.mainloop()</code></pre>
						</v-sheet>

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="При розробці віконних додатків важливо забезпечити зручний інтерфейс та обробляти можливі помилки користувача."
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
