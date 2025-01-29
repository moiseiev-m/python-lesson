<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Вступ до Python </v-card-title>

					<v-card-text class="text-body-1">
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

						<v-alert
							color="info"
							icon="mdi-information"
							title="Цікавий факт"
							text="Назва мови Python походить не від змії, а від британського комедійного серіалу «Монті Пайтон»"
							class="mb-4"
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
