<template>
	<section class="content-section">
		<h3 class="text-h6 mb-4">{{ title }}</h3>
		<v-table class="mb-6">
			<thead>
				<tr>
					<th>Оператор</th>
					<th>Операція</th>
					<th>Приклад</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(op, index) in operators" :key="index">
					<td>
						<code>{{ op.operator }}</code>
					</td>
					<td>{{ op.operation }}</td>
					<td>
						<code>{{ op.example }}</code>
					</td>
				</tr>
			</tbody>
		</v-table>
	</section>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	operators: {
		type: Array,
		required: true,
		validator: (value) => {
			return value.every((op) => typeof op.operator === 'string' && typeof op.operation === 'string' && typeof op.example === 'string');
		},
	},
});
</script>
