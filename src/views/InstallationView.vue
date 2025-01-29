<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Встановлення Python </v-card-title>

					<v-card-text class="text-body-1">
						<h2 class="text-h5 mb-5">Програмувати в браузері!</h2>
						<p class="mb-4">
							<a href="https://ed-info.github.io/epython/" target="_blank">ЄPython - програмувати просто! - https://ed-info.github.io/epython/</a>
						</p>
						<p class="mb-4">Перш ніж почати програмувати на Python, потрібно встановити інтерпретатор Python на ваш комп'ютер. Процес встановлення залежить від операційної системи.</p>
												
						<v-tabs v-model="tab" class="mb-4">
							<v-tab value="windows">Windows</v-tab>
							<v-tab value="mac">macOS</v-tab>
						</v-tabs>

						<v-window v-model="tab">
							<v-window-item value="windows">
								<h3 class="text-h6 mb-4">Встановлення Python на Windows</h3>
								<ol class="mb-4">
									<li class="mb-2">Перейдіть на офіційний сайт Python: <a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a></li>
									<li class="mb-2">Завантажте останню версію Python для Windows</li>
									<li class="mb-2">Запустіть інсталятор</li>
									<li class="mb-2">
										<strong>Важливо:</strong> Відмітьте галочку "Add Python to PATH" перед встановленням
									</li>
									<li>Натисніть "Install Now"</li>
								</ol>
								<p class="mb-4">Щоб перевірити встановлення, відкрийте командний рядок (cmd) і введіть:</p>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code>python --version</code></pre>
								</v-sheet>
							</v-window-item>

							<v-window-item value="mac">
								<h3 class="text-h6 mb-4">Встановлення Python на macOS</h3>
								<p class="mb-4">macOS зазвичай поставляється з Python, але це може бути застаріла версія. Рекомендується встановити нову версію через Homebrew:</p>
								<ol class="mb-4">
									<li class="mb-2">
										Спочатку встановіть Homebrew, якщо він ще не встановлений. Відкрийте Terminal і введіть:
										<v-sheet color="grey-lighten-4" class="pa-4 my-2 rounded">
											<pre><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></pre>
										</v-sheet>
									</li>
									<li class="mb-2">
										Після встановлення Homebrew, встановіть Python:
										<v-sheet color="grey-lighten-4" class="pa-4 my-2 rounded">
											<pre><code>brew install python</code></pre>
										</v-sheet>
									</li>
								</ol>
								<p class="mb-4">Щоб перевірити встановлення, відкрийте Terminal і введіть:</p>
								<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
									<pre><code>python3 --version</code></pre>
								</v-sheet>
							</v-window-item>
						</v-window>

						

						<v-alert
							color="info"
							icon="mdi-lightbulb"
							title="Порада"
							text="Після встановлення Python, рекомендується також встановити IDE (інтегроване середовище розробки) або текстовий редактор з підтримкою Python, наприклад, Visual Studio Code або PyCharm"
							class="mb-4"
						></v-alert>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" size="large" to="/basics" prepend-icon="mdi-arrow-right"> Перейти до основ </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('windows')
</script>

<style scoped>
pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: monospace;
}
code {
	color: #24292e;
}
</style>
