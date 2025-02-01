<script setup>
// No imports needed
</script>

<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Ласкаво просимо до Python підручника! </v-card-title>

					<v-card-text class="text-body-1">
						<p class="mb-4">
							Цей онлайн підручник створений для того, щоб допомогти вам вивчити мову програмування Python. Тут ви знайдете покрокові уроки, приклади коду та практичні завдання.
						</p>

						<p class="mb-4">Python - це потужна і проста у вивченні мова програмування, яка відмінно підходить для:</p>

						<v-list>
							<v-list-item prepend-icon="mdi-web" title="Веб-розробки"></v-list-item>
							<v-list-item prepend-icon="mdi-robot" title="Штучного інтелекту та машинного навчання"></v-list-item>
							<v-list-item prepend-icon="mdi-chart-bar" title="Аналізу даних"></v-list-item>
							<v-list-item prepend-icon="mdi-desktop-classic" title="Автоматизації"></v-list-item>
							<v-list-item prepend-icon="mdi-gamepad-variant" title="Розробки ігор"></v-list-item>
						</v-list>

						<p class="mt-4">Почніть своє навчання з розділу "Вступ" або перейдіть до будь-якої теми, яка вас цікавить, використовуючи меню зліва.</p>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/intro" prepend-icon="mdi-book-open-variant"> Почати навчання </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
:deep(.v-card-title) {
	white-space: normal !important;
	word-wrap: break-word;
}
</style>
