<template>
	<v-container>
		<task-wrapper title="Світлофор">
			<template #description>
				<p>За номером сигналу світлофора визначте його колір:</p>
				<ul>
					<li>1 - червоний</li>
					<li>2 - жовтий</li>
					<li>3 - зелений</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Номер сигналу: 2</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.trafficLight.answer" :error="store.trafficLight.error" label="Колір сигналу" @check="store.checkTrafficLightAnswer" />
			</template>

			<template #solution>
				<div v-if="store.trafficLight.showSolution">
					<p>Розв'язання:</p>
					<p>1. Номер сигналу 2 відповідає жовтому кольору</p>
					<p>Відповідь: жовтий</p>
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
