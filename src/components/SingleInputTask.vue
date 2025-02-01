<template>
	<div>
		<v-text-field
			:model-value="modelValue"
			@update:model-value="$emit('update:modelValue', $event)"
			:label="label"
			:error-messages="error"
			variant="outlined"
			@keyup.enter="$emit('check')"
		></v-text-field>
		<v-btn color="primary" @click="$emit('check')" class="mt-2"> Перевірити </v-btn>
	</div>
</template>

<script setup>
defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	error: {
		type: String,
		default: '',
	},
});

defineEmits(['update:modelValue', 'check']);
</script>
