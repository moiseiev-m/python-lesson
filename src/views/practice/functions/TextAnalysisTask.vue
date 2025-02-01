<template>
	<v-container>
		<task-wrapper title="Аналіз тексту">
			<template #description>
				<p>Створіть функцію для аналізу тексту, яка визначає:</p>
				<ul>
					<li>Кількість слів</li>
					<li>Кількість речень</li>
					<li>Найдовше слово</li>
					<li>Частоту використання кожної літери</li>
				</ul>
				<p>Вхідні дані:</p>
				<p>Текст: "Python - це високорівнева мова програмування. Вона підтримує різні парадигми програмування."</p>
			</template>

			<template #input>
				<quad-input-task
					v-model:first-value="store.textAnalysis.wordsAnswer"
					v-model:second-value="store.textAnalysis.sentencesAnswer"
					v-model:third-value="store.textAnalysis.longestWordAnswer"
					v-model:fourth-value="store.textAnalysis.mostFrequentLetterAnswer"
					:first-error="store.textAnalysis.wordsError"
					:second-error="store.textAnalysis.sentencesError"
					:third-error="store.textAnalysis.longestWordError"
					:fourth-error="store.textAnalysis.mostFrequentLetterError"
					first-label="Кількість слів"
					second-label="Кількість речень"
					third-label="Найдовше слово"
					fourth-label="Найчастіша літера"
					@check="store.checkTextAnalysisAnswers"
				/>
			</template>

			<template #solution>
				<div v-if="store.textAnalysis.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def analyze_text(text):
    # Підготовка тексту
    text = text.strip()
    
    # Кількість речень
    sentences = [s.strip() for s in text.split('.') if s.strip()]
    num_sentences = len(sentences)
    
    # Кількість слів та найдовше слово
    words = text.replace('.', ' ').split()
    num_words = len(words)
    longest_word = max(words, key=len)
    
    # Аналіз частоти літер
    letters = {}
    for char in text.lower():
        if char.isalpha():
            letters[char] = letters.get(char, 0) + 1
    
    most_frequent_letter = max(letters.items(), key=lambda x: x[1])[0]
    
    return {
        'num_words': num_words,
        'num_sentences': num_sentences,
        'longest_word': longest_word,
        'most_frequent_letter': most_frequent_letter,
        'letter_frequency': letters
    }

# Приклад використання
text = "Python - це високорівнева мова програмування. Вона підтримує різні парадигми програмування."
analysis = analyze_text(text)

print(f"Кількість слів: {analysis['num_words']}")
print(f"Кількість речень: {analysis['num_sentences']}")
print(f"Найдовше слово: {analysis['longest_word']}")
print(f"Найчастіша літера: {analysis['most_frequent_letter']}")</code></pre>
					<p>Розрахунок:</p>
					<ol>
						<li>
							Кількість слів:
							<ul>
								<li>Розбиваємо текст на слова</li>
								<li>Слова: ["Python", "-", "це", "високорівнева", "мова", "програмування", "Вона", "підтримує", "різні", "парадигми", "програмування"]</li>
								<li>Всього: 11 слів</li>
							</ul>
						</li>
						<li>
							Кількість речень:
							<ul>
								<li>Розбиваємо текст за крапкою</li>
								<li>Отримуємо 2 речення</li>
							</ul>
						</li>
						<li>
							Найдовше слово:
							<ul>
								<li>Порівнюємо довжину всіх слів</li>
								<li>"високорівнева" - 12 літер</li>
							</ul>
						</li>
						<li>
							Найчастіша літера:
							<ul>
								<li>Рахуємо частоту кожної літери</li>
								<li>Літера "а" зустрічається найчастіше</li>
							</ul>
						</li>
					</ol>
					<p>Відповідь: 11 слів, 2 речення, "високорівнева", "а"</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import QuadInputTask from '@/components/QuadInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
