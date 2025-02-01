<template>
	<v-container>
		<task-wrapper title="Калькулятор знижок">
			<template #description>
				<p>У магазині діє система знижок:</p>
				<ul>
					<li>при покупці до 1000 грн - знижки немає</li>
					<li>від 1000 до 5000 грн - знижка 5%</li>
					<li>більше 5000 грн - знижка 10%</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Сума покупки: 2500 грн</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.discount.answer" :error="store.discount.error" label="Сума до сплати (грн)" @check="store.checkDiscountAnswer" />
			</template>

			<template #solution>
				<div v-if="store.discount.showSolution">
					<p>Розв'язання:</p>
					<p>1. Сума покупки 2500 грн знаходиться в діапазоні від 1000 до 5000 грн</p>
					<p>2. Для цього діапазону застосовується знижка 5%</p>
					<p>3. Розрахунок знижки: 2500 * 0.05 = 125 грн</p>
					<p>4. Сума до сплати: 2500 - 125 = 2375 грн</p>
					<p>Відповідь: 2375 грн</p>
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
