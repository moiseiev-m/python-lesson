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

						<h2 class="text-h5 mb-4">Що таке Python?</h2>
						<p class="mb-4">
							Python - це високорівнева мова програмування загального призначення, створена Гвідо ван Россумом і вперше випущена в 1991 році. Python підтримує кілька парадигм програмування,
							включаючи процедурне, об'єктно-орієнтоване та функціональне програмування.
						</p>

						<h2 class="text-h5 mb-4">Чому варто вивчати Python?</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-check-circle" title="Простий синтаксис" subtitle="Python має чіткий і зрозумілий синтаксис, який легко читати та писати"></v-list-item>
							<v-list-item prepend-icon="mdi-check-circle" title="Велика спільнота" subtitle="Python має величезну спільноту розробників та багато навчальних ресурсів"></v-list-item>
							<v-list-item prepend-icon="mdi-check-circle" title="Багато бібліотек" subtitle="Python має велику стандартну бібліотеку та тисячі додаткових пакетів"></v-list-item>
							<v-list-item
								prepend-icon="mdi-check-circle"
								title="Універсальність"
								subtitle="Python можна використовувати для веб-розробки, аналізу даних, AI, автоматизації та багато іншого"
							></v-list-item>
							<v-list-item prepend-icon="mdi-check-circle" title="Попит на ринку" subtitle="Python є однією з найбільш затребуваних мов програмування на ринку праці"></v-list-item>
						</v-list>

						<h2 class="text-h5 my-4">Сфери застосування Python</h2>
						<v-list>
							<v-list-item prepend-icon="mdi-web" title="Веб-розробка" subtitle="Створення веб-сайтів та веб-додатків"></v-list-item>
							<v-list-item prepend-icon="mdi-robot" title="Штучний інтелект" subtitle="Машинне навчання та нейронні мережі"></v-list-item>
							<v-list-item prepend-icon="mdi-chart-bar" title="Аналіз даних" subtitle="Обробка та візуалізація даних"></v-list-item>
							<v-list-item prepend-icon="mdi-desktop-classic" title="Автоматизація" subtitle="Автоматизація рутинних завдань"></v-list-item>
							<v-list-item prepend-icon="mdi-gamepad-variant" title="Розробка ігор" subtitle="Створення 2D та 3D ігор"></v-list-item>
						</v-list>

						<v-alert
							color="info"
							icon="mdi-information"
							title="Цікавий факт"
							text="Назва мови Python походить не від змії, а від британського комедійного серіалу «Монті Пайтон»"
							class="my-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/installation" prepend-icon="mdi-arrow-right"> Перейти до встановлення </v-btn>
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
