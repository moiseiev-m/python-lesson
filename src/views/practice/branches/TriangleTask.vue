<template>
	<v-container>
		<task-wrapper title="Трикутник">
			<template #description>
				<p>За довжинами сторін визначте тип трикутника:</p>
				<ul>
					<li>всі сторони рівні - рівносторонній</li>
					<li>дві сторони рівні - рівнобедрений</li>
					<li>всі сторони різні - різносторонній</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Перша сторона: 5</li>
					<li>Друга сторона: 5</li>
					<li>Третя сторона: 5</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.triangle.answer" :error="store.triangle.error" label="Тип трикутника" @check="store.checkTriangleAnswer" />
			</template>

			<template #solution>
				<div v-if="store.triangle.showSolution">
					<p>Розв'язання:</p>
					<p>1. Всі сторони трикутника рівні (5 = 5 = 5)</p>
					<p>2. Якщо всі сторони рівні, трикутник є рівностороннім</p>
					<p>Відповідь: рівносторонній</p>
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
