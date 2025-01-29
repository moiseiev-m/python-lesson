<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Встановлення Python </v-card-title>

					<v-card-text class="text-body-1">
						<v-tabs v-model="tab" color="primary">
							<v-tab value="windows">Windows</v-tab>
							<v-tab value="mac">macOS</v-tab>
							<v-tab value="linux">Linux</v-tab>
						</v-tabs>

						<v-window v-model="tab" class="mt-4">
							<v-window-item value="windows">
								<h3 class="text-h6 mb-3">Встановлення Python на Windows</h3>
								<ol class="mb-4">
									<li>Перейдіть на офіційний сайт Python: <a href="https://www.python.org/downloads/" target="_blank">python.org</a></li>
									<li>Натисніть кнопку "Download Python" з останньою версією</li>
									<li>Запустіть завантажений інсталятор</li>
									<li>Обов'язково поставте галочку "Add Python to PATH"</li>
									<li>Натисніть "Install Now"</li>
								</ol>
								<v-alert type="info" title="Перевірка встановлення" class="mb-4">
									Відкрийте командний рядок (cmd) і введіть команду:
									<v-code>python --version</v-code>
								</v-alert>
							</v-window-item>

							<v-window-item value="mac">
								<h3 class="text-h6 mb-3">Встановлення Python на macOS</h3>
								<p class="mb-4">На macOS Python зазвичай вже встановлений, але краще встановити останню версію:</p>
								<ol class="mb-4">
									<li>
										Встановіть Homebrew (якщо ще не встановлено):
										<v-code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</v-code>
									</li>
									<li>
										Встановіть Python через Homebrew:
										<v-code>brew install python</v-code>
									</li>
								</ol>
								<v-alert type="info" title="Перевірка встановлення" class="mb-4">
									Відкрийте Terminal і введіть команду:
									<v-code>python3 --version</v-code>
								</v-alert>
							</v-window-item>

							<v-window-item value="linux">
								<h3 class="text-h6 mb-3">Встановлення Python на Linux</h3>
								<p class="mb-4">На більшості дистрибутивів Linux Python вже встановлений. Для встановлення останньої версії:</p>
								<h4 class="text-subtitle-1 mb-2">Ubuntu/Debian:</h4>
								<v-code class="mb-4">
									sudo apt update<br />
									sudo apt install python3
								</v-code>

								<h4 class="text-subtitle-1 mb-2">Fedora:</h4>
								<v-code class="mb-4"> sudo dnf install python3 </v-code>

								<v-alert type="info" title="Перевірка встановлення" class="mb-4">
									Відкрийте термінал і введіть команду:
									<v-code>python3 --version</v-code>
								</v-alert>
							</v-window-item>
						</v-window>

						<h3 class="text-h6 mt-6 mb-3">Встановлення редактора коду</h3>
						<p class="mb-4">Для написання коду на Python вам знадобиться редактор коду. Ми рекомендуємо:</p>
						<v-list>
							<v-list-item prepend-icon="mdi-microsoft-visual-studio-code" title="Visual Studio Code" subtitle="Безкоштовний, легкий та потужний редактор коду від Microsoft">
								<template v-slot:append>
									<v-btn color="primary" variant="text" href="https://code.visualstudio.com/" target="_blank"> Завантажити </v-btn>
								</template>
							</v-list-item>

							<v-list-item prepend-icon="mdi-language-python" title="PyCharm" subtitle="Професійне IDE для Python від JetBrains">
								<template v-slot:append>
									<v-btn color="primary" variant="text" href="https://www.jetbrains.com/pycharm/" target="_blank"> Завантажити </v-btn>
								</template>
							</v-list-item>
						</v-list>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/basics" prepend-icon="mdi-arrow-right"> Перейти до основ Python </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('windows');
</script>

<style scoped>
.v-code {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	font-family: monospace;
	white-space: pre-wrap;
	display: block;
	margin: 0.5rem 0;
}
</style>
