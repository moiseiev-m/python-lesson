<template>
	<v-container>
		<task-wrapper title="Гра в кості">
			<template #description>
				<p>Створіть функції для симуляції гри в кості між двома гравцями:</p>
				<ul>
					<li>Кожен гравець кидає два кубики</li>
					<li>Сума очок на кубиках визначає результат кидка</li>
					<li>Гравець з більшою сумою перемагає</li>
					<li>При рівній сумі - нічия</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Гравець 1: кубики показали 4 та 6</li>
					<li>Гравець 2: кубики показали 3 та 5</li>
				</ul>
			</template>

			<template #input>
				<triple-input-task
					v-model:first-value="store.diceGame.player1Answer"
					v-model:second-value="store.diceGame.player2Answer"
					v-model:third-value="store.diceGame.resultAnswer"
					:first-error="store.diceGame.player1Error"
					:second-error="store.diceGame.player2Error"
					:third-error="store.diceGame.resultError"
					first-label="Сума гравця 1"
					second-label="Сума гравця 2"
					third-label="Результат (перемога/нічия)"
					@check="store.checkDiceGameAnswers"
				/>
			</template>

			<template #solution>
				<div v-if="store.diceGame.showSolution">
					<p>Розв'язання:</p>
					<pre><code>import random

def roll_dice(num_dice=2):
    return [random.randint(1, 6) for _ in range(num_dice)]

def calculate_score(dice):
    return sum(dice)

def determine_winner(player1_score, player2_score):
    if player1_score > player2_score:
        return "перемога гравця 1"
    elif player2_score > player1_score:
        return "перемога гравця 2"
    else:
        return "нічия"

def play_game(player1_dice=None, player2_dice=None):
    # Якщо кубики не задані, генеруємо випадкові значення
    if player1_dice is None:
        player1_dice = roll_dice()
    if player2_dice is None:
        player2_dice = roll_dice()
    
    player1_score = calculate_score(player1_dice)
    player2_score = calculate_score(player2_dice)
    result = determine_winner(player1_score, player2_score)
    
    return {
        'player1_dice': player1_dice,
        'player2_dice': player2_dice,
        'player1_score': player1_score,
        'player2_score': player2_score,
        'result': result
    }

# Приклад використання
player1_dice = [4, 6]
player2_dice = [3, 5]
game = play_game(player1_dice, player2_dice)

print(f"Гравець 1: кубики {game['player1_dice']}, сума {game['player1_score']}")
print(f"Гравець 2: кубики {game['player2_dice']}, сума {game['player2_score']}")
print(f"Результат: {game['result']}")</code></pre>
					<p>Розрахунок:</p>
					<ol>
						<li>
							Гравець 1:
							<ul>
								<li>Кубики: 4 та 6</li>
								<li>Сума: 4 + 6 = 10</li>
							</ul>
						</li>
						<li>
							Гравець 2:
							<ul>
								<li>Кубики: 3 та 5</li>
								<li>Сума: 3 + 5 = 8</li>
							</ul>
						</li>
						<li>
							Порівняння результатів:
							<ul>
								<li>10 > 8</li>
								<li>Отже, перемагає гравець 1</li>
							</ul>
						</li>
					</ol>
					<p>Відповідь: сума гравця 1 = 10, сума гравця 2 = 8, результат = перемога гравця 1</p>
				</div>
			</template>
		</task-wrapper>
	</v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import TripleInputTask from '@/components/TripleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
</script>
