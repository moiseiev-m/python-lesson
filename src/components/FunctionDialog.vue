<template>
	<v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" width="600px">
		<v-card v-if="func">
			<v-card-title class="text-h5">{{ func.name }}</v-card-title>
			<v-card-text>
				<p class="text-body-1 mb-4">{{ func.description }}</p>
				<v-card class="mb-4 pa-4" color="grey-lighten-4">
					<div class="text-subtitle-1 mb-2">Синтаксис:</div>
					<pre><code>{{ func.syntax }}</code></pre>
				</v-card>
				<v-card class="mb-4 pa-4" color="grey-lighten-4">
					<div class="text-subtitle-1 mb-2">Приклад використання:</div>
					<pre><code>{{ func.example }}</code></pre>
				</v-card>
				<v-card v-if="func.output" class="pa-4" color="grey-lighten-4">
					<div class="text-subtitle-1 mb-2">Результат:</div>
					<pre><code>{{ func.output }}</code></pre>
				</v-card>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="$emit('update:modelValue', false)">Закрити</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
	func: {
		type: Object,
		required: true,
		validator: (value) => {
			return (
				typeof value.name === 'string' &&
				typeof value.description === 'string' &&
				typeof value.syntax === 'string' &&
				typeof value.example === 'string' &&
				(value.output === undefined || typeof value.output === 'string')
			);
		},
	},
});

defineEmits(['update:modelValue']);
</script>
