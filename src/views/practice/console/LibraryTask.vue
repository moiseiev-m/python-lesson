<template>
	<v-container>
		<task-wrapper title="Шкільна бібліотека">
			<template #description>
				<p>Шкільна бібліотека замовила 5 підручників з математики. Кожен підручник коштує 120 грн. Скільки грошей потрібно заплатити за всі підручники?</p>
				<p>Вхідні дані:</p>
				<ul>
					<li>Кількість підручників: 5</li>
					<li>Ціна за один підручник: 120 грн</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.library.answer" :error="store.library.error" label="Сума до сплати (грн)" @check="store.checkLibraryAnswer" />
			</template>

			<template #solution>
				<div v-if="store.library.showSolution">
					<p>Розв'язання:</p>
					<p>1. Щоб знайти загальну суму, потрібно помножити кількість підручників на ціну одного підручника:</p>
					<p>5 * 120 = 600 (грн)</p>
					<p>Відповідь: 600 грн</p>
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
