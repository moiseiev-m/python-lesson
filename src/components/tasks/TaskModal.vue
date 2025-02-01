<template>
	<v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="600">
		<v-card>
			<v-card-title class="text-h5 pl-6"> Перевірка завдання </v-card-title>

			<v-card-text class="pb-0 pt-0">
				<v-card class="pa-4 mb-4" color="grey-lighten-4">
					<div class="text-subtitle-1 mb-2">Вхідні дані:</div>
					<div v-for="(value, index) in inputData" :key="index" class="text-body-1">
						{{ value }}
					</div>
				</v-card>

				<slot name="inputs"></slot>

				<v-expand-transition>
					<div v-if="showSolution && isCorrect">
						<v-card-title class="pr-0 pl-0">
							<v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
							Правильно! Розв'язок:
						</v-card-title>
						<v-card-text class="pl-0 pr-0">
							<v-sheet color="grey-lighten-4" class="pa-4 rounded">
								<pre><code>{{ solution }}</code></pre>
							</v-sheet>
						</v-card-text>
					</div>
				</v-expand-transition>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="$emit('check')"> Перевірити </v-btn>
				<v-btn color="grey" @click="$emit('update:modelValue', false)"> Закрити </v-btn>
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
	inputData: {
		type: Array,
		required: true,
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
});

defineEmits(['check', 'update:modelValue']);
</script>
