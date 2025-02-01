<template>
	<v-container>
		<task-wrapper title="Планети">
			<template #description>
				<p>За відстанню від Сонця визначте тип планети:</p>
				<ul>
					<li>до 100 млн км - планети земної групи</li>
					<li>від 100 до 750 млн км - планети-гіганти</li>
					<li>більше 750 млн км - карликові планети</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Відстань від Сонця: 150 млн км</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.planet.answer" :error="store.planet.error" label="Тип планети" @check="store.checkPlanetAnswer" />
			</template>

			<template #solution>
				<div v-if="store.planet.showSolution">
					<p>Розв'язання:</p>
					<p>1. Відстань 150 млн км знаходиться в діапазоні від 100 до 750 млн км</p>
					<p>2. Цьому діапазону відповідають планети-гіганти</p>
					<p>Відповідь: гіганти</p>
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
