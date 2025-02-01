<template>
	<v-container>
		<task-wrapper title="Календар">
			<template #description>
				<p>Визначте кількість днів у місяці, враховуючи високосний рік:</p>
				<ul>
					<li>31 день: січень, березень, травень, липень, серпень, жовтень, грудень</li>
					<li>30 днів: квітень, червень, вересень, листопад</li>
					<li>28/29 днів: лютий (29 у високосний рік)</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Місяць: 2 (лютий)</li>
					<li>Рік: 2024</li>
				</ul>
				<p>Примітка: рік є високосним, якщо він ділиться на 4, але не ділиться на 100, або ділиться на 400</p>
			</template>

			<template #input>
				<single-input-task v-model="store.calendar.answer" :error="store.calendar.error" label="Кількість днів" @check="store.checkCalendarAnswer" />
			</template>

			<template #solution>
				<div v-if="store.calendar.showSolution">
					<p>Розв'язання:</p>
					<p>1. Місяць лютий (2)</p>
					<p>2. Перевіряємо чи 2024 рік високосний:</p>
					<ul>
						<li>2024 ділиться на 4 (2024 ÷ 4 = 506)</li>
						<li>Отже, 2024 - високосний рік</li>
					</ul>
					<p>3. У високосний рік у лютому 29 днів</p>
					<p>Відповідь: 29</p>
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
