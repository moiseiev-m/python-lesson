<template>
	<task-wrapper title="Перевірка числа">
		<template #description>
			<p>Створіть функцію, яка аналізує число та повертає його характеристики:</p>
			<ul>
				<li>Парне чи непарне</li>
				<li>Просте чи складене</li>
				<li>Досконале чи ні (сума дільників дорівнює числу)</li>
			</ul>
			<p>Вхідні дані:</p>
			<ul>
				<li>Число: 28</li>
			</ul>
		</template>

		<template #input>
			<triple-input-task
				v-model:first-value="store.numberCheck.evenOddAnswer"
				v-model:second-value="store.numberCheck.primeAnswer"
				v-model:third-value="store.numberCheck.perfectAnswer"
				:first-error="store.numberCheck.evenOddError"
				:second-error="store.numberCheck.primeError"
				:third-error="store.numberCheck.perfectError"
				first-label="Парне/непарне"
				second-label="Просте/складене"
				third-label="Досконале/ні"
				@check="store.checkNumberAnswers"
			/>
		</template>

		<template #solution>
			<div v-if="store.numberCheck.showSolution">
				<p>Розв'язання:</p>
				<pre><code>def analyze_number(n):
    # Перевірка на парність
    is_even = n % 2 == 0
    
    # Перевірка на просте число
    if n < 2:
        is_prime = False
    else:
        is_prime = True
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                is_prime = False
                break
    
    # Перевірка на досконале число
    divisors_sum = 1  # 1 завжди є дільником
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            divisors_sum += i
            if i != n // i:  # Додаємо парний дільник
                divisors_sum += n // i
    is_perfect = divisors_sum == n
    
    return {
        "even_odd": "парне" if is_even else "непарне",
        "prime": "просте" if is_prime else "складене",
        "perfect": "досконале" if is_perfect else "недосконале"
    }

# Приклад використання
number = 28
result = analyze_number(number)
print(f"Число {number}:")
print(f"- {result['even_odd']}")
print(f"- {result['prime']}")
print(f"- {result['perfect']}")</code></pre>
				<p>Для числа 28:</p>
				<ol>
					<li>
						Перевірка на парність:
						<ul>
							<li>28 ділиться на 2 без остачі (28 % 2 = 0)</li>
							<li>Отже, число парне</li>
						</ul>
					</li>
					<li>
						Перевірка на просте число:
						<ul>
							<li>28 має дільники: 1, 2, 4, 7, 14, 28</li>
							<li>Має більше двох дільників</li>
							<li>Отже, число складене</li>
						</ul>
					</li>
					<li>
						Перевірка на досконале число:
						<ul>
							<li>Дільники: 1, 2, 4, 7, 14</li>
							<li>Сума дільників: 1 + 2 + 4 + 7 + 14 = 28</li>
							<li>Сума дорівнює самому числу</li>
							<li>Отже, число досконале</li>
						</ul>
					</li>
				</ol>
				<p>Відповідь: парне, складене, досконале</p>
			</div>
		</template>
	</task-wrapper>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import TripleInputTask from '@/components/TripleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
