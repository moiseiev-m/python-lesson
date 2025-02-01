<template>
	<v-container>
		<task-wrapper title="Форматування тексту">
			<template #description>
				<p>Створіть функцію для форматування тексту з такими можливостями:</p>
				<ul>
					<li>Видалення зайвих пробілів</li>
					<li>Капіталізація першої літери кожного речення</li>
					<li>Заміна множинних пробілів на один</li>
					<li>Додавання крапки в кінці речення, якщо її немає</li>
				</ul>
				<p>Вхідні дані:</p>
				<pre>  це    тестове   речення   для форматування   також є друге речення   і третє</pre>
			</template>

			<template #input>
				<single-input-task v-model="store.textFormat.answer" :error="store.textFormat.error" label="Відформатований текст" @check="store.checkTextFormatAnswer" />
			</template>

			<template #solution>
				<div v-if="store.textFormat.showSolution">
					<p>Розв'язання:</p>
					<pre><code>def format_text(text):
    # Видаляємо зайві пробіли на початку та в кінці
    text = text.strip()
    
    # Заміняємо множинні пробіли на один
    text = ' '.join(word for word in text.split() if word)
    
    # Розбиваємо на речення (за крапкою)
    sentences = text.split('.')
    
    # Форматуємо кожне речення
    formatted_sentences = []
    for sentence in sentences:
        if sentence:
            # Видаляємо пробіли та капіталізуємо першу літеру
            sentence = sentence.strip()
            if sentence:
                sentence = sentence[0].upper() + sentence[1:].lower()
                formatted_sentences.append(sentence)
    
    # З'єднуємо речення з крапками
    return '. '.join(formatted_sentences) + '.'

# Приклад використання
text = "  це    тестове   речення   для форматування   також є друге речення   і третє"
formatted = format_text(text)
print(f"Відформатований текст: {formatted}")</code></pre>
					<p>Покроковий процес форматування:</p>
					<ol>
						<li>Видалення зайвих пробілів на початку та в кінці: <br />"це тестове речення для форматування також є друге речення і третє"</li>
						<li>Заміна множинних пробілів на один: <br />"це тестове речення для форматування також є друге речення і третє"</li>
						<li>
							Розбиття на речення та капіталізація:
							<ul>
								<li>"Це тестове речення для форматування"</li>
								<li>"Також є друге речення"</li>
								<li>"І третє"</li>
							</ul>
						</li>
						<li>Додавання крапок та об'єднання: <br />"Це тестове речення для форматування. Також є друге речення. І третє."</li>
					</ol>
					<p>Відповідь: Це тестове речення для форматування. Також є друге речення. І третє.</p>
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
