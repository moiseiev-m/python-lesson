<template>
	<v-container>
		<task-wrapper title="Оцінка">
			<template #description>
				<p>Конвертуйте числову оцінку в літерну за наступною шкалою:</p>
				<ul>
					<li>90-100: A</li>
					<li>80-89: B</li>
					<li>70-79: C</li>
					<li>60-69: D</li>
					<li>0-59: F</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Числова оцінка: 85</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.grade.answer" :error="store.grade.error" label="Літерна оцінка" @check="store.checkGradeAnswer" />
			</template>

			<template #solution>
				<div v-if="store.grade.showSolution">
					<p>Розв'язання:</p>
					<p>1. Оцінка 85 знаходиться в діапазоні 80-89</p>
					<p>2. Цьому діапазону відповідає оцінка B</p>
					<p>Відповідь: B</p>
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
