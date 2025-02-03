<script setup>
import { ref } from 'vue';

const props = defineProps({
	taskId: {
		type: String,
		required: true,
	},
	hints: {
		type: Array,
		default: () => [],
	},
	showHints: {
		type: Boolean,
		default: false,
	},
});

const showHints = ref(false);

const toggleHints = () => {
	showHints.value = !showHints.value;
};
</script>

<template>
	<div class="task-checker mt-3">
		<div v-if="showHints">
			<h3 class="text-h6 font-weight-bold mb-2">Підказки:</h3>
			<ul class="hints pa-0">
				<li v-for="(hint, index) in hints" :key="index" class="hint-item d-flex align-center mb-1 pa-1 rounded bg-grey-lighten-4">
					<v-icon color="primary" class="mr-3">mdi-lightbulb</v-icon>
					<span>{{ hint }}</span>
				</li>
			</ul>
		</div>

		<div class="mt-3">
			<v-btn color="primary" @click="toggleHints">{{ showHints ? 'Сховати підказки' : 'Показати підказки' }}</v-btn>
		</div>
	</div>
</template>

<style scoped>
.hints {
	list-style-type: none;
}

.hint-item {
	transition: all 0.3s ease;
}

.hint-item:hover {
	background-color: rgb(var(--v-theme-primary-lighten-1)) !important;
	transform: translateX(5px);
}
</style>
