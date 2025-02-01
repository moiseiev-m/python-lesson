<template>
	<div>
		<v-text-field :model-value="firstValue" @update:model-value="$emit('update:firstValue', $event)" :label="firstLabel" :error-messages="firstError" variant="outlined" class="mb-2"></v-text-field>
		<v-text-field
			:model-value="secondValue"
			@update:model-value="$emit('update:secondValue', $event)"
			:label="secondLabel"
			:error-messages="secondError"
			variant="outlined"
			class="mb-2"
		></v-text-field>
		<v-text-field
			:model-value="thirdValue"
			@update:model-value="$emit('update:thirdValue', $event)"
			:label="thirdLabel"
			:error-messages="thirdError"
			variant="outlined"
			@keyup.enter="$emit('check')"
		></v-text-field>
		<v-btn color="primary" @click="$emit('check')" class="mt-2"> Перевірити </v-btn>
	</div>
</template>

<script setup>
defineProps({
	firstValue: {
		type: String,
		required: true,
	},
	secondValue: {
		type: String,
		required: true,
	},
	thirdValue: {
		type: String,
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
	thirdLabel: {
		type: String,
		required: true,
	},
	firstError: {
		type: String,
		default: '',
	},
	secondError: {
		type: String,
		default: '',
	},
	thirdError: {
		type: String,
		default: '',
	},
});

defineEmits(['update:firstValue', 'update:secondValue', 'update:thirdValue', 'check']);
</script>
