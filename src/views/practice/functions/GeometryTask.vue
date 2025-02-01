<template>
	<v-container>
		<task-wrapper title="Геометричні фігури">
			<template #description>
				<p>Створіть функцію для обчислення площі та периметру різних геометричних фігур. Функція повинна приймати тип фігури та її параметри.</p>
				<p>Вхідні дані:</p>
				<ul>
					<li>Тип фігури: прямокутник</li>
					<li>Довжина: 5</li>
					<li>Ширина: 3</li>
				</ul>
				<p>Напишіть функцію, яка:</p>
				<ol>
					<li>Приймає параметри: тип фігури (прямокутник, коло, трикутник) та розміри</li>
					<li>Обчислює площу та периметр фігури</li>
					<li>Повертає результати обчислень</li>
				</ol>
			</template>

			<template #input>
				<double-input-task
					v-model:first-value="store.geometry.areaAnswer"
					v-model:second-value="store.geometry.perimeterAnswer"
					:first-error="store.geometry.areaError"
					:second-error="store.geometry.perimeterError"
					first-label="Площа"
					second-label="Периметр"
					@check="store.checkGeometryAnswers"
				/>
			</template>

			<template #solution>
				<div v-if="store.geometry.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def calculate_geometry(shape_type, *params):
    if shape_type == "rectangle":
        length, width = params
        area = length * width
        perimeter = 2 * (length + width)
        return area, perimeter
    elif shape_type == "circle":
        radius = params[0]
        area = 3.14159 * radius ** 2
        perimeter = 2 * 3.14159 * radius
        return area, perimeter
    elif shape_type == "triangle":
        a, b, c = params
        # Півпериметр для формули Герона
        s = (a + b + c) / 2
        area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
        perimeter = a + b + c
        return area, perimeter
    else:
        return None

# Приклад використання
length = 5
width = 3
area, perimeter = calculate_geometry("rectangle", length, width)

print(f"Площа прямокутника: {area}")
print(f"Периметр прямокутника: {perimeter}")</code></pre>
					<p>Для прямокутника зі сторонами 5 і 3:</p>
					<ul>
						<li>Площа = 5 * 3 = 15</li>
						<li>Периметр = 2 * (5 + 3) = 2 * 8 = 16</li>
					</ul>
					<p>Відповідь: площа = 15, периметр = 16</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import DoubleInputTask from '@/components/DoubleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
