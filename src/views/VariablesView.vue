<script setup>
import { ref } from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import OperatorsTable from '@/components/OperatorsTable.vue';
import FunctionsList from '@/components/FunctionsList.vue';

const functions = ref([
	{
		name: 'float()',
		shortDesc: 'Перетворює значення в число з плаваючою комою',
		description: 'Функція float() перетворює рядок або число в число з плаваючою комою (дробове число). Може приймати рядки, що містять десяткові числа, та цілі числа.',
		syntax: 'float(x)',
		example: `# Перетворення рядка в число
price = float("23.45")
print(price)

# Перетворення цілого числа
value = float(42)
print(value)`,
		output: `23.45
42.0`,
		dialog: false,
	},
	{
		name: 'int()',
		shortDesc: 'Перетворює значення в ціле число',
		description: 'Функція int() перетворює рядок або число з плаваючою комою в ціле число. При перетворенні дробового числа дробова частина відкидається.',
		syntax: 'int(x)',
		example: `# Перетворення рядка в ціле число
age = int("25")
print(age)

# Перетворення дробового числа
value = int(3.9)
print(value)`,
		output: `25
3`,
		dialog: false,
	},
	{
		name: 'str()',
		shortDesc: 'Перетворює значення в рядок',
		description: 'Функція str() перетворює будь-яке значення в рядковий тип даних. Може приймати числа, списки, словники та інші типи даних.',
		syntax: 'str(x)',
		example: `# Перетворення числа в рядок
num = 42
text = str(num)
print(text)
print(type(text))`,
		output: `42
<class 'str'>`,
		dialog: false,
	},
	{
		name: 'print()',
		shortDesc: 'Виводить значення на екран',
		description: 'Функція print() виводить передані їй значення на екран. Може приймати будь-яку кількість аргументів різних типів.',
		syntax: 'print(*objects, sep=" ", end="\\n")',
		example: `name = "Іван"
age = 25
print("Привіт,", name)
print("Вік:", age, "років")`,
		output: `Привіт, Іван
Вік: 25 років`,
		dialog: false,
	},
	{
		name: 'input()',
		shortDesc: 'Зчитує введення користувача',
		description: "Функція input() зчитує рядок тексту, введений користувачем з клавіатури. Може приймати необов'язковий аргумент - підказку для користувача.",
		syntax: 'input([prompt])',
		example: `# Запит імені користувача
name = input("Як вас звати? ")
print("Привіт,", name)`,
		output: `Як вас звати? Іван
Привіт, Іван`,
		dialog: false,
	},
	{
		name: 'round()',
		shortDesc: 'Округлює число',
		description: 'Функція round() округлює число до вказаної кількості десяткових знаків. Якщо кількість знаків не вказана, округлює до найближчого цілого.',
		syntax: 'round(number[, ndigits])',
		example: `# Округлення до цілого
print(round(3.7))
print(round(3.2))

# Округлення до 2 знаків
print(round(3.14159, 2))`,
		output: `4
3
3.14`,
		dialog: false,
	},
]);

const arithmeticOperators = [
	{ operator: '+', operation: 'Додавання', example: '2 + 2 = 4' },
	{ operator: '-', operation: 'Віднімання', example: '5 - 3 = 2' },
	{ operator: '*', operation: 'Множення', example: '2 * 3 = 6' },
	{ operator: '/', operation: 'Ділення', example: '6 / 2 = 3.0' },
	{ operator: '//', operation: 'Цілочисельне ділення', example: '7 // 2 = 3' },
	{ operator: '%', operation: 'Остача від ділення', example: '7 % 2 = 1' },
	{ operator: '**', operation: 'Піднесення до степеня', example: '2 ** 3 = 8' },
];

const assignmentOperators = [
	{ operator: '=', operation: 'Присвоєння', example: 'x = 5' },
	{ operator: '+=', operation: 'Додавання з присвоєнням', example: 'x += 3' },
	{ operator: '-=', operation: 'Віднімання з присвоєнням', example: 'x -= 2' },
	{ operator: '*=', operation: 'Множення з присвоєнням', example: 'x *= 4' },
	{ operator: '/=', operation: 'Ділення з присвоєнням', example: 'x /= 2' },
];

const comparisonOperators = [
	{ operator: '==', operation: 'Рівність', example: '2 == 2' },
	{ operator: '!=', operation: 'Нерівність', example: '2 != 3' },
	{ operator: '>', operation: 'Більше', example: '5 > 3' },
	{ operator: '<', operation: 'Менше', example: '3 < 5' },
	{ operator: '>=', operation: 'Більше або рівне', example: '5 >= 5' },
	{ operator: '<=', operation: 'Менше або рівне', example: '3 <= 3' },
];
</script>

<template>
	<BaseLayout>
		<template #title>
			<h2 class="text-h4 mb-6">Змінні та типи даних в Python</h2>
		</template>

		<template #content>
			<!-- Functions Section -->
			<FunctionsList title="Вбудовані функції для роботи з типами даних" :functions="functions" class="mb-4" />

			<!-- Operators Section -->
			<OperatorsTable title="Арифметичні оператори" :operators="arithmeticOperators" />
			<OperatorsTable title="Оператори присвоєння" :operators="assignmentOperators" />
			<OperatorsTable title="Оператори порівняння" :operators="comparisonOperators" />
		</template>
	</BaseLayout>
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
.function-item :deep(.v-list-item-title) {
	color: #4caf50;
	text-decoration: none;
}
.function-item:hover :deep(.v-list-item-title) {
	text-decoration: underline;
}
.operator-group {
	margin-bottom: 2rem;
}
</style>
