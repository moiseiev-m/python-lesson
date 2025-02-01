<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Віконні проєкти</v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 1. Калькулятор з графічним інтерфейсом </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">
												Створіть простий калькулятор з графічним інтерфейсом, який може виконувати базові арифметичні операції (додавання, віднімання, множення, ділення).
											</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Необхідні компоненти:</div>
												<v-list>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Два поля для введення чисел</v-list-item-title>
													</v-list-item>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Кнопки для вибору операції</v-list-item-title>
													</v-list-item>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Поле для виведення результату</v-list-item-title>
													</v-list-item>
												</v-list>
											</v-card>

											<v-expand-transition>
												<div>
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
																<v-sheet color="grey-lighten-4" class="pa-4 rounded">
																	<pre><code>import tkinter as tk
from tkinter import ttk

def calculate():
    try:
        num1 = float(entry1.get())
        num2 = float(entry2.get())
        operation = operation_var.get()
        
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                result_label.config(text='Помилка: ділення на нуль')
                return
            result = num1 / num2
            
        result_label.config(text=f'Результат: {result}')
    except ValueError:
        result_label.config(text='Помилка: введіть числа')

# Створення головного вікна
window = tk.Tk()
window.title('Калькулятор')
window.geometry('300x200')

# Створення елементів інтерфейсу
entry1 = ttk.Entry(window)
entry1.pack(pady=5)

operation_var = tk.StringVar()
operation_var.set('+')
operations = ttk.OptionMenu(window, operation_var, '+', '+', '-', '*', '/')
operations.pack(pady=5)

entry2 = ttk.Entry(window)
entry2.pack(pady=5)

calculate_button = ttk.Button(window, text='Обчислити', command=calculate)
calculate_button.pack(pady=5)

result_label = ttk.Label(window, text='Результат: ')
result_label.pack(pady=5)

window.mainloop()</code></pre>
																</v-sheet>
															</v-expansion-panel-text>
														</v-expansion-panel>
													</v-expansion-panels>
												</div>
											</v-expand-transition>
										</v-card-text>
									</v-card>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h5 bg-green text-white"> Завдання 2. Конвертер температур </v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-card class="mt-4" elevation="2">
										<v-card-text class="pt-4">
											<p class="text-h6 mb-4">Створіть програму з графічним інтерфейсом для конвертації температури між градусами Цельсія та Фаренгейта.</p>

											<v-card class="my-4 pa-4" color="grey-lighten-4">
												<div class="text-subtitle-1 mb-2">Необхідні компоненти:</div>
												<v-list>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Поле для введення температури</v-list-item-title>
													</v-list-item>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Перемикач для вибору напрямку конвертації</v-list-item-title>
													</v-list-item>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Кнопка для конвертації</v-list-item-title>
													</v-list-item>
													<v-list-item prepend-icon="mdi-check">
														<v-list-item-title>Поле для виведення результату</v-list-item-title>
													</v-list-item>
												</v-list>
											</v-card>

											<v-expand-transition>
												<div>
													<v-expansion-panels>
														<v-expansion-panel>
															<v-expansion-panel-title>
																<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
																Подивитися розв'язок
															</v-expansion-panel-title>
															<v-expansion-panel-text>
																<v-sheet color="grey-lighten-4" class="pa-4 rounded">
																	<pre><code>import tkinter as tk
from tkinter import ttk

def convert_temperature():
    try:
        temp = float(temp_entry.get())
        conversion = conversion_var.get()
        
        if conversion == 'C to F':
            result = (temp * 9/5) + 32
            result_label.config(text=f'{temp}°C = {result:.1f}°F')
        else:
            result = (temp - 32) * 5/9
            result_label.config(text=f'{temp}°F = {result:.1f}°C')
    except ValueError:
        result_label.config(text='Помилка: введіть число')

# Створення головного вікна
window = tk.Tk()
window.title('Конвертер температур')
window.geometry('300x200')

# Створення елементів інтерфейсу
temp_entry = ttk.Entry(window)
temp_entry.pack(pady=5)

conversion_var = tk.StringVar()
conversion_var.set('C to F')
conversion_frame = ttk.Frame(window)
conversion_frame.pack(pady=5)

ttk.Radiobutton(conversion_frame, text='°C → °F', 
                variable=conversion_var, value='C to F').pack(side='left')
ttk.Radiobutton(conversion_frame, text='°F → °C', 
                variable=conversion_var, value='F to C').pack(side='left')

convert_button = ttk.Button(window, text='Конвертувати', 
                          command=convert_temperature)
convert_button.pack(pady=5)

result_label = ttk.Label(window, text='Результат: ')
result_label.pack(pady=5)

window.mainloop()</code></pre>
																</v-sheet>
															</v-expansion-panel-text>
														</v-expansion-panel>
													</v-expansion-panels>
												</div>
											</v-expand-transition>
										</v-card-text>
									</v-card>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
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
	font-family: 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
	max-width: 100%;
	overflow-x: auto;
	padding: 0;
}

code {
	color: rgb(var(--v-theme-on-surface));
	display: block;
	max-width: 100%;
	overflow-x: auto;
	font-family: inherit;
}

.v-sheet {
	max-width: 100%;
	overflow-x: auto;
	border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}
</style>
