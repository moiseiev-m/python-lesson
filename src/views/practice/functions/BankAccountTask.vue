<template>
	<v-container>
		<task-wrapper title="Банківський рахунок">
			<template #description>
				<p>Створіть клас для управління банківським рахунком з методами:</p>
				<ul>
					<li>Внесення коштів</li>
					<li>Зняття коштів</li>
					<li>Нарахування відсотків</li>
					<li>Перевірка балансу</li>
				</ul>
				<p>Вхідні дані:</p>
				<ul>
					<li>Початковий баланс: 1000 грн</li>
					<li>Операції:</li>
					<ul>
						<li>Внесення: +500 грн</li>
						<li>Зняття: -200 грн</li>
						<li>Нарахування 5% річних</li>
					</ul>
				</ul>
			</template>

			<template #input>
				<single-input-task v-model="store.bankAccount.answer" :error="store.bankAccount.error" label="Кінцевий баланс (грн)" @check="store.checkBankAccountAnswer" />
			</template>

			<template #solution>
				<div v-if="store.bankAccount.showSolution">
					<p>Розв'язання:</p>
					<pre><code>class BankAccount:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if amount > 0 and self.balance >= amount:
            self.balance -= amount
            return True
        return False
    
    def add_interest(self, rate):
        interest = self.balance * (rate / 100)
        self.balance += interest
    
    def get_balance(self):
        return round(self.balance, 2)

# Приклад використання
account = BankAccount(1000)  # Створюємо рахунок з балансом 1000 грн

# Виконуємо операції
account.deposit(500)    # Внесення 500 грн
account.withdraw(200)   # Зняття 200 грн
account.add_interest(5) # Нарахування 5% річних

print(f"Кінцевий баланс: {account.get_balance()} грн")</code></pre>
					<p>Розрахунок:</p>
					<ol>
						<li>Початковий баланс: 1000 грн</li>
						<li>Після внесення 500 грн: 1000 + 500 = 1500 грн</li>
						<li>Після зняття 200 грн: 1500 - 200 = 1300 грн</li>
						<li>
							Нарахування відсотків:
							<ul>
								<li>5% від 1300 = 1300 * 0.05 = 65 грн</li>
								<li>Кінцевий баланс: 1300 + 65 = 1365 грн</li>
							</ul>
						</li>
					</ol>
					<p>Відповідь: 1365 грн</p>
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
