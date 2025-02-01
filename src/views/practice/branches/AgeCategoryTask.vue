<template>
	<v-container>
		<task-wrapper title="Категорія віку">
			<template #description>
				<p>За віком визначте категорію людини:</p>
				<ul>
					<li>до 12 років - дитина</li>
					<li>12-17 років - підліток</li>
					<li>18 і більше - дорослий</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Вік: 15 років</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.ageCategory.answer" :error="store.ageCategory.error" label="Категорія" @check="store.checkAgeCategoryAnswer" />
			</template>

			<template #solution>
				<div v-if="store.ageCategory.showSolution">
					<p>Розв'язання:</p>
					<p>1. Вік 15 років знаходиться в діапазоні 12-17 років</p>
					<p>2. Цьому діапазону відповідає категорія "підліток"</p>
					<p>Відповідь: підліток</p>
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
