<template>
	<v-container>
		<task-wrapper title="Калькулятор часу">
			<template #description>
				<p>Створіть функцію для роботи з часом, яка може:</p>
				<ul>
					<li>Додавати та віднімати години, хвилини, секунди</li>
					<li>Конвертувати час між різними форматами</li>
					<li>Обчислювати різницю між двома моментами часу</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Перший час: 14:30:00</li>
					<li>Другий час: 16:45:30</li>
				</ul>
				<p>Знайдіть різницю між цими моментами часу у форматі "години:хвилини:секунди"</p>
			</template>

			<template #input>
				<single-input-task v-model="store.timeCalc.answer" :error="store.timeCalc.error" label="Різниця (гг:хх:сс)" @check="store.checkTimeCalcAnswer" />
			</template>

			<template #solution>
				<div v-if="store.timeCalc.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def time_to_seconds(time_str):
    hours, minutes, seconds = map(int, time_str.split(':'))
    return hours * 3600 + minutes * 60 + seconds

def seconds_to_time(seconds):
    hours = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"

def time_difference(time1, time2):
    # Конвертуємо обидва часи в секунди
    seconds1 = time_to_seconds(time1)
    seconds2 = time_to_seconds(time2)
    
    # Знаходимо різницю
    diff_seconds = abs(seconds2 - seconds1)
    
    # Конвертуємо різницю назад у формат часу
    return seconds_to_time(diff_seconds)

# Приклад використання
time1 = "14:30:00"
time2 = "16:45:30"
difference = time_difference(time1, time2)
print(f"Різниця між {time1} та {time2}: {difference}")</code></pre>
					<p>Розрахунок:</p>
					<ol>
						<li>
							Конвертуємо перший час (14:30:00) в секунди:
							<ul>
								<li>14 годин = 14 * 3600 = 50400 секунд</li>
								<li>30 хвилин = 30 * 60 = 1800 секунд</li>
								<li>0 секунд</li>
								<li>Всього: 52200 секунд</li>
							</ul>
						</li>
						<li>
							Конвертуємо другий час (16:45:30) в секунди:
							<ul>
								<li>16 годин = 16 * 3600 = 57600 секунд</li>
								<li>45 хвилин = 45 * 60 = 2700 секунд</li>
								<li>30 секунд</li>
								<li>Всього: 60330 секунд</li>
							</ul>
						</li>
						<li>Знаходимо різницю: 60330 - 52200 = 8130 секунд</li>
						<li>
							Конвертуємо назад у формат часу:
							<ul>
								<li>Години: 8130 // 3600 = 2</li>
								<li>Залишок секунд: 8130 % 3600 = 930</li>
								<li>Хвилини: 930 // 60 = 15</li>
								<li>Секунди: 930 % 60 = 30</li>
							</ul>
						</li>
					</ol>
					<p>Відповідь: 02:15:30</p>
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
