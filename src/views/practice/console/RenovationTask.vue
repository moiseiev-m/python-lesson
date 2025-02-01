<template>
	<v-container>
		<task-wrapper title="Ремонт кімнати">
			<template #description>
				<p>Потрібно пофарбувати стіни в кімнаті. Кімната має розміри: довжина - 4 м, ширина - 3 м, висота - 2.5 м. На 1 квадратний метр стіни потрібно 0.2 л фарби.</p>
				<p>Знайдіть:</p>
				<ol>
					<li>Площу стін (без стелі та підлоги)</li>
					<li>Кількість фарби, необхідної для фарбування всіх стін</li>
				</ol>
				<p>Вхідні дані:</p>
				<ul>
					<li>Довжина кімнати: 4 м</li>
					<li>Ширина кімнати: 3 м</li>
					<li>Висота кімнати: 2.5 м</li>
					<li>Витрата фарби: 0.2 л/м²</li>
				</ul>
			</template>

			<template #input>
				<double-input-task
					v-model:first-value="store.renovation.wallAreaAnswer"
					v-model:second-value="store.renovation.paintAnswer"
					:first-error="store.renovation.wallAreaError"
					:second-error="store.renovation.paintError"
					first-label="Площа стін (м²)"
					second-label="Кількість фарби (л)"
					@check="store.checkRenovationAnswers"
				/>
			</template>

			<template #solution>
				<div v-if="store.renovation.showSolution">
					<p>Розв'язання:</p>
					<p>1. Знаходимо площу стін:</p>
					<ul>
						<li>Площа бічних стін = 2 * (довжина + ширина) * висота</li>
						<li>Площа = 2 * (4 + 3) * 2.5 = 2 * 7 * 2.5 = 35 (м²)</li>
					</ul>
					<p>2. Знаходимо кількість необхідної фарби:</p>
					<ul>
						<li>Кількість фарби = площа стін * витрата фарби на 1 м²</li>
						<li>Кількість = 35 * 0.2 = 7 (л)</li>
					</ul>
					<p>Відповідь: площа стін - 35 м², потрібно 7 л фарби</p>
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
