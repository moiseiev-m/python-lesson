<script setup>
import { ref } from 'vue';

const correctPassword = '11111111'; // Set your desired password here
const enteredPassword = ref('');
const isAuthenticated = ref(false);

const checkPassword = () => {
	if (enteredPassword.value === correctPassword) {
		isAuthenticated.value = true;
	} else {
		alert('Неправильний пароль!');
	}
};
</script>

<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4">Розв'язки задач</v-card-title>

					<v-card-text class="text-body-1">
						<div v-if="!isAuthenticated">
							<v-text-field v-model="enteredPassword" label="Введіть пароль" type="password" @keyup.enter="checkPassword"></v-text-field>
							<v-btn color="primary" @click="checkPassword">Увійти</v-btn>
						</div>

						<div v-else>
							<h2>Розв'язки задач</h2>
							<div>
								<h3>Консольні проєкти</h3>
							</div>
							<div>
								<h3>Практика: розгалуження</h3>
							</div>
							<div>
								<h3>Підпрограми</h3>
							</div>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.v-card-title {
	white-space: normal !important;
	word-wrap: break-word;
}
</style>
