<template>
	<section class="content-section">
		<h3 class="text-h6 mb-4">{{ title }}</h3>
		<v-list class="mb-6">
			<v-list-item
				v-for="(func, index) in functions"
				:key="index"
				:title="func.name"
				:subtitle="func.shortDesc"
				class="mb-2 function-item"
				@click="selectedFunction = func"
				style="cursor: pointer"
			/>
		</v-list>
		<FunctionDialog v-model="showDialog" :func="selectedFunction" @update:modelValue="selectedFunction = null" />
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';
import FunctionDialog from './FunctionDialog.vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	functions: {
		type: Array,
		required: true,
		validator: (value) => {
			return value.every(
				(func) => typeof func.name === 'string' && typeof func.shortDesc === 'string' && typeof func.description === 'string' && typeof func.syntax === 'string' && typeof func.example === 'string'
			);
		},
	},
});

const selectedFunction = ref(null);
const showDialog = computed(() => !!selectedFunction.value);
</script>
