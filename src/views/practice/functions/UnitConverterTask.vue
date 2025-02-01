<template>
	<v-container>
		<task-wrapper title="Конвертер одиниць">
			<template #description>
				<p>Створіть функцію для конвертації між різними одиницями вимірювання. Функція повинна підтримувати конвертацію:</p>
				<ul>
					<li>Довжини (метри, кілометри, милі)</li>
					<li>Маси (кілограми, фунти)</li>
					<li>Температури (Цельсій, Фаренгейт)</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Тип конвертації: температура</li>
					<li>Значення: 25°C</li>
					<li>Цільова одиниця: Фаренгейт</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.unitConverter.answer" :error="store.unitConverter.error" label="Температура (°F)" @check="store.checkUnitConverterAnswer" />
			</template>

			<template #solution>
				<div v-if="store.unitConverter.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def convert_units(value, from_unit, to_unit):
    # Конвертація температури
    if from_unit == "C" and to_unit == "F":
        return (value * 9/5) + 32
    elif from_unit == "F" and to_unit == "C":
        return (value - 32) * 5/9
    
    # Конвертація довжини
    length_units = {
        "m": 1,
        "km": 1000,
        "mile": 1609.34
    }
    if from_unit in length_units and to_unit in length_units:
        return value * length_units[from_unit] / length_units[to_unit]
    
    # Конвертація маси
    mass_units = {
        "kg": 1,
        "lb": 0.453592
    }
    if from_unit in mass_units and to_unit in mass_units:
        return value * mass_units[from_unit] / mass_units[to_unit]
    
    return None

# Приклад використання
celsius = 25
fahrenheit = convert_units(celsius, "C", "F")
print(f"{celsius}°C = {fahrenheit}°F")</code></pre>
					<p>Для температури 25°C:</p>
					<ul>
						<li>Формула: °F = (°C * 9/5) + 32</li>
						<li>Підставляємо значення: (25 * 9/5) + 32</li>
						<li>Обчислюємо: (45) + 32 = 77</li>
					</ul>
					<p>Відповідь: 77°F</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import SingleInputTask from '@/components/SingleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
