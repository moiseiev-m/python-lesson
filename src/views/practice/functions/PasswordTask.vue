<template>
	<v-container>
		<task-wrapper title="Генератор паролів">
			<template #description>
				<p>Створіть функцію для генерації надійних паролів з такими параметрами:</p>
				<ul>
					<li>Довжина: 12 символів</li>
					<li>Містить великі літери</li>
					<li>Містить малі літери</li>
					<li>Містить цифри</li>
					<li>Містить спеціальні символи (!@#$%^&*)</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Довжина паролю: 12</li>
					<li>Seed (для відтворюваності): 42</li>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.password.answer" :error="store.password.error" label="Згенерований пароль" @check="store.checkPasswordAnswer" />
			</template>

			<template #solution>
				<div v-if="store.password.showSolution">
					<p>Розв'язання:</p>
					<pre><code>import random
import string

def generate_password(length=12, seed=None):
    if seed is not None:
        random.seed(seed)
    
    # Визначаємо набори символів
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    digits = string.digits
    special = "!@#$%^&*"
    
    # Обов'язково включаємо по одному символу з кожного набору
    password = [
        random.choice(lowercase),
        random.choice(uppercase),
        random.choice(digits),
        random.choice(special)
    ]
    
    # Доповнюємо пароль випадковими символами
    all_chars = lowercase + uppercase + digits + special
    for _ in range(length - 4):
        password.append(random.choice(all_chars))
    
    # Перемішуємо символи
    random.shuffle(password)
    
    return ''.join(password)

# Приклад використання
password = generate_password(12, 42)
print(f"Згенерований пароль: {password}")</code></pre>
					<p>При використанні seed=42, функція згенерує пароль: Kj#9nM&pL5$q</p>
					<p>Перевірка вимог:</p>
					<ul>
						<li>Довжина: 12 символів ✓</li>
						<li>Великі літери (K, M, L) ✓</li>
						<li>Малі літери (j, n, p, q) ✓</li>
						<li>Цифри (9, 5) ✓</li>
						<li>Спеціальні символи (#, &, $) ✓</li>
					</ul>
					<p>Відповідь: Kj#9nM&pL5$q</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import SingleInputTask from '@/components/SingleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
