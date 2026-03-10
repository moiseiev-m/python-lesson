<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Цикли в Python </v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Поняття циклу </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										<strong>Цикл</strong> — це конструкція, що дозволяє повторювати один і той самий фрагмент коду кілька разів. Замість того щоб копіювати однакові команди, ми записуємо їх один раз у тілі циклу.
									</p>
									<p class="mb-4">
										У Python є два основні види циклів: <strong>for</strong> (цикл з лічильником або перебір) та <strong>while</strong> (цикл з умовою). Вибір залежить від того, чи наперед відома кількість повторень, чи повторення відбувається поки виконується умова.
									</p>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Цикл for і функція range() </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										Цикл <code>for</code> використовують, коли потрібно виконати блок коду фіксовану кількість разів або перебрати всі елементи послідовності (списку, рядка тощо).
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Перебір значень 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# range(початок, кінець) — кінець не включається
for i in range(2, 6):
    print(i)   # 2, 3, 4, 5

# range(початок, кінець, крок)
for i in range(0, 10, 2):
    print(i)   # 0, 2, 4, 6, 8</code></pre>
									</v-sheet>
									<p class="mb-4">
										<code>range(n)</code> дає числа від 0 до n−1. <code>range(a, b)</code> — від a до b−1. <code>range(a, b, k)</code> — від a до b−1 з кроком k.
									</p>
									<p class="mb-4">Перебір елементів списку або рядка:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>words = ["один", "два", "три"]
for w in words:
    print(w)

# Результат у консолі:
# один
# два
# три</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Цикл while </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										Цикл <code>while</code> повторює блок коду, поки умова істинна. Кількість повторень наперед може бути невідома (наприклад, введення до першого від’ємного числа).
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Вивести числа від 1 до 5
k = 1
while k &lt;= 5:
    print(k)
    k = k + 1

# Цикл введення до першого 0
n = int(input("Введіть число: "))
while n != 0:
    print("Ви ввели:", n)
    n = int(input("Введіть число: "))
print("Кінець")</code></pre>
									</v-sheet>
									<p class="mb-4">
										Важливо змінювати змінну, що входить у умову, інакше цикл стане нескінченним.
									</p>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Вкладені цикли </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										Усередині одного циклу можна розмістити інший цикл. Так отримують перебір пар значень (наприклад, рядки та стовпці таблиці, множники).
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Таблиця множення (фрагмент)
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "*", j, "=", i * j)</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel class="mb-4">
								<v-expansion-panel-title class="text-h6 font-weight-bold"> break і continue </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										<code>break</code> — негайний вихід із циклу. <code>continue</code> — пропуск решти поточної ітерації та перехід до наступної.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Вивести до першого 0
for x in [3, 7, 0, 5, 2]:
    if x == 0:
        break
    print(x)   # 3, 7

# Вивести тільки парні
for x in range(6):
    if x % 2 != 0:
        continue
    print(x)   # 0, 2, 4</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" to="/practice/loops" prepend-icon="mdi-arrow-right"> Перейти до практики </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
pre {
	margin: 0;
	white-space: pre-wrap;
	word-wrap: break-word;
	font-family: monospace;
}
code {
	color: rgb(var(--v-theme-on-surface));
}
</style>
