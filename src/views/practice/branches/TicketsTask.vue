<template>
	<v-container>
		<task-wrapper title="Квитки">
			<template #description>
				<p>Розрахуйте вартість квитка з урахуванням знижок:</p>
				<ul>
					<li>діти до 12 років - знижка 50%</li>
					<li>студенти - знижка 30%</li>
					<li>пенсіонери (від 60 років) - знижка 40%</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Базова вартість квитка: 100 грн</li>
					<li>Вік: 15 років</li>
					<li>Статус: студент</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.tickets.answer" :error="store.tickets.error" label="Вартість квитка (грн)" @check="store.checkTicketsAnswer" />
			</template>

			<template #solution>
				<div v-if="store.tickets.showSolution">
					<p>Розв'язання:</p>
					<p>1. Вік 15 років - не підходить під дитячу або пенсійну знижку</p>
					<p>2. Є статус студента - застосовуємо знижку 30%</p>
					<p>3. Розрахунок: 100 грн - (100 грн * 0.3) = 70 грн</p>
					<p>Відповідь: 70 грн</p>
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
