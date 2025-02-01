<template>
	<v-container>
		<task-wrapper title="Калькулятор доставки">
			<template #description>
				<p>Розрахуйте вартість доставки за наступними правилами:</p>
				<ul>
					<li>Базова вартість: 50 грн</li>
					<li>За кожен км після 10 км: +5 грн</li>
					<li>За кожен кг після 1 кг: +10 грн</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Відстань: 15 км</li>
					<li>Вага: 5 кг</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.delivery.answer" :error="store.delivery.error" label="Вартість доставки (грн)" @check="store.checkDeliveryAnswer" />
			</template>

			<template #solution>
				<div v-if="store.delivery.showSolution">
					<p>Розв'язання:</p>
					<p>1. Базова вартість: 50 грн</p>
					<p>2. Додаткова плата за відстань:</p>
					<ul>
						<li>Перевищення: 15 - 10 = 5 км</li>
						<li>Доплата: 5 км * 5 грн = 25 грн</li>
					</ul>
					<p>3. Додаткова плата за вагу:</p>
					<ul>
						<li>Перевищення: 5 - 1 = 4 кг</li>
						<li>Доплата: 4 кг * 10 грн = 40 грн</li>
					</ul>
					<p>4. Загальна вартість: 50 + 25 + 40 = 115 грн</p>
					<p>Відповідь: 115 грн</p>
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
