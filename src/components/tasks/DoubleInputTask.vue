<template>
	<div>
		<p class="text-h6 mb-4">{{ description }}</p>
		<v-btn color="primary" @click="showModal = true">Перевірка завдання</v-btn>

		<task-modal v-model="showModal" :input-data="inputData" :show-solution="showSolution" :is-correct="isCorrect" :solution="solution" @check="$emit('check')">
			<template #inputs>
				<v-text-field
					:value="firstValue"
					:label="firstLabel"
					type="number"
					:suffix="firstSuffix"
					:error-messages="firstError"
					@keyup.enter="$emit('check')"
					@update:model-value="$emit('update:firstValue', $event)"
				></v-text-field>
				<v-text-field
					:value="secondValue"
					:label="secondLabel"
					type="number"
					:suffix="secondSuffix"
					:error-messages="secondError"
					@keyup.enter="$emit('check')"
					@update:model-value="$emit('update:secondValue', $event)"
				></v-text-field>
			</template>
		</task-modal>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import TaskModal from './TaskModal.vue';

const showModal = ref(false);

defineProps({
	description: {
		type: String,
		required: true,
	},
	inputData: {
		type: Array,
		required: true,
	},
	firstLabel: {
		type: String,
		required: true,
	},
	secondLabel: {
		type: String,
		required: true,
	},
	firstSuffix: {
		type: String,
		default: '',
	},
	secondSuffix: {
		type: String,
		default: '',
	},
	firstError: {
		type: String,
		default: '',
	},
	secondError: {
		type: String,
		default: '',
	},
	showSolution: {
		type: Boolean,
		default: false,
	},
	isCorrect: {
		type: Boolean,
		default: false,
	},
	solution: {
		type: String,
		required: true,
	},
	firstValue: {
		type: [String, Number],
		default: '',
	},
	secondValue: {
		type: [String, Number],
		default: '',
	},
});

defineEmits(['check', 'update:firstValue', 'update:secondValue']);
</script>
