<template>
	<v-card class="mb-4">
		<v-card-title>{{ title }}</v-card-title>
		<v-card-text>
			<!-- Опис завдання -->
			<div class="mb-4">
				<slot name="description"></slot>
			</div>

			<!-- Поля для введення -->
			<div class="mb-4">
				<slot name="input"></slot>
			</div>

			<!-- Розв'язок -->
			<div>
				<slot name="solution"></slot>
			</div>
		</v-card-text>
	</v-card>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<style scoped>
pre {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	overflow-x: auto;
}

code {
	font-family: 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
}
</style>
