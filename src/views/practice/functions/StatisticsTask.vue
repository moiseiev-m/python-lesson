<template>
	<v-container>
		<task-wrapper title="Статистика">
			<template #description>
				<p>Створіть функцію для статистичного аналізу набору чисел, яка обчислює:</p>
				<ul>
					<li>Середнє арифметичне</li>
					<li>Медіану</li>
					<li>Моду (найчастіше значення)</li>
					<li>Стандартне відхилення</li>
				</ul>
				<p>Вхідні дані:</p>
				<p>Набір чисел: [4, 7, 2, 8, 5, 4, 9, 4, 6, 3]</p>
			</template>

			<template #input>
				<quad-input-task
					v-model:first-value="store.statistics.meanAnswer"
					v-model:second-value="store.statistics.medianAnswer"
					v-model:third-value="store.statistics.modeAnswer"
					v-model:fourth-value="store.statistics.stdDevAnswer"
					:first-error="store.statistics.meanError"
					:second-error="store.statistics.medianError"
					:third-error="store.statistics.modeError"
					:fourth-error="store.statistics.stdDevError"
					first-label="Середнє"
					second-label="Медіана"
					third-label="Мода"
					fourth-label="Стандартне відхилення"
					@check="store.checkStatisticsAnswers"
				/>
			</template>

			<template #solution>
				<div v-if="store.statistics.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def calculate_statistics(numbers):
    # Середнє арифметичне
    mean = sum(numbers) / len(numbers)
    
    # Медіана
    sorted_nums = sorted(numbers)
    n = len(sorted_nums)
    if n % 2 == 0:
        median = (sorted_nums[n//2 - 1] + sorted_nums[n//2]) / 2
    else:
        median = sorted_nums[n//2]
    
    # Мода
    from collections import Counter
    counts = Counter(numbers)
    mode = max(counts.items(), key=lambda x: x[1])[0]
    
    # Стандартне відхилення
    squared_diff_sum = sum((x - mean) ** 2 for x in numbers)
    std_dev = (squared_diff_sum / len(numbers)) ** 0.5
    
    return {
        'mean': round(mean, 2),
        'median': round(median, 2),
        'mode': mode,
        'std_dev': round(std_dev, 2)
    }

# Приклад використання
numbers = [4, 7, 2, 8, 5, 4, 9, 4, 6, 3]
stats = calculate_statistics(numbers)
print(f"Середнє: {stats['mean']}")
print(f"Медіана: {stats['median']}")
print(f"Мода: {stats['mode']}")
print(f"Стандартне відхилення: {stats['std_dev']}")</code></pre>
					<p>Розрахунки:</p>
					<ol>
						<li>
							Середнє арифметичне:
							<ul>
								<li>Сума: 4 + 7 + 2 + 8 + 5 + 4 + 9 + 4 + 6 + 3 = 52</li>
								<li>Кількість чисел: 10</li>
								<li>Середнє: 52 / 10 = 5.2</li>
							</ul>
						</li>
						<li>
							Медіана:
							<ul>
								<li>Сортований ряд: [2, 3, 4, 4, 4, 5, 6, 7, 8, 9]</li>
								<li>Парна кількість чисел, беремо середнє 5-го та 6-го: (4 + 5) / 2 = 4.5</li>
							</ul>
						</li>
						<li>
							Мода:
							<ul>
								<li>Підрахунок частот: 4 зустрічається три рази (найчастіше)</li>
								<li>Мода = 4</li>
							</ul>
						</li>
						<li>
							Стандартне відхилення:
							<ul>
								<li>Різниці від середнього в квадраті: (4-5.2)² + (7-5.2)² + ...</li>
								<li>Середнє квадратів різниць</li>
								<li>Корінь з середнього = 2.15</li>
							</ul>
						</li>
					</ol>
					<p>Відповідь: середнє = 5.2, медіана = 4.5, мода = 4, стандартне відхилення = 2.15</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import QuadInputTask from '@/components/QuadInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
