<script setup>
defineProps({
	functions: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>

<template>
	<div class="functions-list">
		<v-expansion-panels>
			<v-expansion-panel v-for="(func, index) in functions" :key="index" class="mb-2">
				<v-expansion-panel-title class="d-flex align-center">
					<div>
						<span class="text-h6 font-weight-bold primary--text">{{ func.name }}</span>
						<span class="ml-4 text-body-1">{{ func.shortDesc }}</span>
					</div>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<div class="pa-4">
						<div v-if="func.description" class="mb-4">
							<div class="text-body-1">{{ func.description }}</div>
						</div>

						<div v-if="func.example" class="example-block">
							<div class="text-subtitle-1 font-weight-bold mb-2">Приклад:</div>
							<v-sheet color="grey-lighten-4" class="pa-3 rounded">
								<pre class="mb-0"><code>{{ func.example }}</code></pre>
							</v-sheet>
						</div>

						<div v-if="func.output" class="mt-3">
							<div class="text-subtitle-1 font-weight-bold mb-2">Результат:</div>
							<v-sheet color="grey-lighten-3" class="pa-3 rounded">
								<pre class="mb-0"><code>{{ func.output }}</code></pre>
							</v-sheet>
						</div>
					</div>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<style scoped>
.functions-list {
	width: 100%;
}

pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
}

code {
	font-family: inherit;
}

.example-block {
	border-radius: 4px;
}
</style>
