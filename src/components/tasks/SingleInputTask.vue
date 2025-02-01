<template>
	<div>
		<p class="text-body-1 mb-4">{{ description }}</p>
		<ul v-if="inputData" class="mb-4">
			<li v-for="(item, index) in inputData" :key="index" class="text-body-1">{{ item }}</li>
		</ul>

		<v-text-field
			:model-value="modelValue"
			@update:model-value="$emit('update:modelValue', $event)"
			:label="inputLabel"
			:error-messages="error"
			variant="outlined"
			@keyup.enter="$emit('check')"
		></v-text-field>

		<v-btn color="primary" @click="$emit('check')" class="mt-2">Перевірити</v-btn>

		<div v-if="showSolution" class="mt-4">
			<p class="text-subtitle-1 font-weight-bold mb-2">Розв'язок:</p>
			<v-sheet class="pa-4" rounded>
				<pre><code>{{ solution }}</code></pre>
			</v-sheet>
		</div>
	</div>
</template>

<script setup>
defineProps({
	description: {
		type: String,
		required: true,
	},
	inputData: {
		type: Array,
		default: () => [],
	},
	inputLabel: {
		type: String,
		required: true,
	},
	modelValue: {
		type: String,
		required: true,
	},
	error: {
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
		default: '',
	},
});

defineEmits(['update:modelValue', 'check']);
</script>

<style scoped>
pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
	max-width: 100%;
	overflow-x: auto;
	padding: 0;
}

code {
	color: rgb(var(--v-theme-on-surface));
	display: block;
	max-width: 100%;
	overflow-x: auto;
	font-family: inherit;
}

.v-sheet {
	max-width: 100%;
	overflow-x: auto;
	border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}
</style>
