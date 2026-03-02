<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="10">
				<v-card class="mx-auto" elevation="2">
					<v-card-title class="text-h4 font-weight-bold text-center py-4"> Масиви в Python </v-card-title>

					<v-card-text class="text-body-1">
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Поняття одновимірного масиву </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										У мові Python для опису послідовності даних використовують <strong>списки (list)</strong> — впорядковану послідовність із кількох значень об'єктів будь-яких типів: числа, рядки, списки тощо. В інших мовах подібну сукупність однотипних даних називають масивами.
									</p>
									<p class="mb-4">
										На відміну від рядків, списки складаються не з символів, а з різних об'єктів і вкладаються в квадратні дужки <code>[]</code>. Елементи розділяються комами.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>empty_list = []   # порожній список
weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
animals = ['camels', 'bats', 'elephants', 'dolphins', 'bears']
mix = ['Oksana', 15, 165]   # мішаний список
bin = [[0, 0, 0], [0, 0, 1], [0, 1, 0]]   # список зі списків</code></pre>
									</v-sheet>

									<h3 class="text-h6 mt-4 mb-2">Присвоєння і посилання</h3>
									<p class="mb-4">
										Якщо присвоїти один список двом змінним (<code>b = a</code>), обидві посилаються на той самий об'єкт у пам'яті. Тому зміна елемента через <code>a</code> одразу видно через <code>b</code>.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>a = [1, 2, 3]
b = a
a[0] = 'new'
print(a)   # ['new', 2, 3]
print(b)   # ['new', 2, 3]  — змінилось теж!</code></pre>
									</v-sheet>
									<p class="mb-4">
										Щоб отримати <strong>незалежну копію</strong>, використовують <code>copy()</code>, <code>list()</code> або зріз <code>[:]</code>. Тоді зміни в одному списку не торкнуться інших.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>a = [1, 2, 3]
b = a.copy()
c = list(a)
d = a[:]
a[0] = 99
print(a)   # [99, 2, 3]
print(b)   # [1, 2, 3]  — копії не змінились</code></pre>
									</v-sheet>

									<h3 class="text-h6 mt-4 mb-2">Доступ за індексом</h3>
									<p class="mb-4">
										До елемента списку звертаються за індексом у квадратних дужках. Нумерація з <strong>0</strong>; від'ємні індекси рахують з кінця: −1 — останній, −2 — передостанній тощо.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>color_model = ['red', 'green', 'blue']
print(color_model[0])    # red   — перший
print(color_model[1])    # green — другий
print(color_model[-1])   # blue  — останній
print(color_model[-2])   # green — передостанній</code></pre>
									</v-sheet>
									<p class="mb-4">
										Для списку <code>weekdays</code> з п'ятьма елементами індекси від 0 до 4; звернення до неіснуючого індексу (наприклад, 5) викличе помилку.
									</p>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Дії над списками </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										Над списками можна виконувати: об'єднання, дублювання, зрізи, визначення кількості елементів, додавання та видалення. На відміну від рядків, списки — змінювані: їх можна змінювати на місці без створення нового об'єкта.
									</p>

									<h3 class="text-h6 mt-4 mb-2">Об'єднання, дублювання, зріз</h3>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Об'єднання (+) та дублювання (*)
print([1, 2, 3] + [4, 5, 6])   # [1, 2, 3, 4, 5, 6]
print([1, 2, 3] * 2)           # [1, 2, 3, 1, 2, 3]

# Зріз [від:до] — елементи з індексу "від" до "до" (до не включно)
a = [10, 20, 30, 40, 50, 60]
print(a[1:4])   # [20, 30, 40]  — індекси 1, 2, 3
print(a[:3])    # [10, 20, 30]  — з початку до 3
print(a[-2:])   # [50, 60]      — останні два
print(len(a))   # 6</code></pre>
									</v-sheet>

									<h3 class="text-h6 mt-4 mb-2">Зміна, додавання та видалення</h3>
									<p class="mb-4">Елемент змінюють присвоєнням за індексом. <code>append(x)</code> додає в кінець, <code>insert(i, x)</code> — на позицію <code>i</code>. Видаляють <code>del list[i]</code> за індексом або <code>list.remove(x)</code> за значенням (перший такий елемент).</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>L = ['a', 'b', 'c', 'd']
L[2] = 'f'
print(L)           # ['a', 'b', 'f', 'd']

L.append('e')
print(L)           # ['a', 'b', 'f', 'd', 'e']

L.insert(1, 'x')   # вставити 'x' на позицію 1
print(L)           # ['a', 'x', 'b', 'f', 'd', 'e']

del L[2]           # видалити елемент з індексом 2 ('b')
print(L)           # ['a', 'x', 'f', 'd', 'e']

L.remove('x')      # видалити перше входження 'x'
print(L)           # ['a', 'f', 'd', 'e']</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Введення й виведення значень </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										Для введення списку з клавіатури використовують <code>input()</code> та <code>split()</code>. <code>split()</code> за замовчуванням ділить рядок по пробілах і повертає список <strong>рядків</strong>. Щоб отримати числа, застосовують <code>map(int, ...)</code>.
									</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Користувач вводить: 5 10 15 20
s = input().split()
print(s)   # ['5', '10', '15', '20']  — рядки!

nums = list(map(int, input().split()))
print(nums)   # [5, 10, 15, 20]  — цілі числа</code></pre>
									</v-sheet>

									<h3 class="text-h6 mt-4 mb-2">Виведення списку</h3>
									<p class="mb-4"><code>print(a)</code> виводить список у вигляді <code>[елемент1, елемент2, ...]</code>. Щоб вивести елементи по одному (у стовпець або в один рядок), використовують цикл <code>for</code>.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>a = [5, 2, 7, 4, 3]

print(a)   # [5, 2, 7, 4, 3]

# У стовпець (кожен елемент з нового рядка)
for x in a:
    print(x)
# 5
# 2
# 7
# 4
# 3

# В один рядок через пробіл
for x in a:
    print(x, end=' ')
# 5 2 7 4 3</code></pre>
									</v-sheet>

									<h3 class="text-h6 mt-4 mb-2">Повний приклад програми</h3>
									<p class="mb-4">Програма: ввести кількість оцінок, потім самі оцінки через пробіл; обчислити середнє і вивести його.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>n = int(input("Кількість оцінок: "))   # наприклад: 4
grades = list(map(int, input("Оцінки: ").split()))   # 5 8 7 6

total = sum(grades)
average = total / n
print("Середнє:", average)

# Результат при вводі 4 та "5 8 7 6":
# Середнє: 6.5</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Алгоритми опрацювання масивів </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">
										При роботі з табличними величинами слід: 1) подати вхідні дані у вигляді списку; 2) надати списку ім’я; 3) задати порожній список для результатів за потреби; 4) записати введення елементів та подальше опрацювання.
									</p>
									<p class="mb-4">
										Основні алгоритми: зміна значень елементів масиву; знаходження підсумків (сума, добуток, середнє); підрахунок та сума елементів за умовою; пошук; впорядкування.
									</p>
									<p class="mb-4">Перебір елементів для зміни або обчислень — цикл <code>for i in range(n)</code> та за потреби перевірка умови <code>if</code>:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>for i in range(n):
    # команди опрацювання списку
    # якщо потрібно — умова: if умова:</code></pre>
									</v-sheet>
									<p class="mb-4">Для суми всього списку чисел — функція <code>sum()</code>. Для складніших дій — перебір з накопиченням:</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>A = [1, 2, 3, 4, 5, 6, 7, 8, 9]
s = sum(A)
print("Сума s =", s)   # Сума s = 45</code></pre>
									</v-sheet>
									<p class="mb-4 text-medium-emphasis">Умови записують операторами порівняння (<code>&gt;</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>==</code>, <code>!=</code>) та логічними <code>and</code>, <code>or</code>, <code>not</code>.</p>
									<h3 class="text-h6 mt-4 mb-2">Пошук заданого елемента</h3>
									<p class="mb-4">Перевірити наявність елемента можна операцією <code>in</code>. Для пошуку з переглядом усіх елементів використовують прапорець: початкове значення <code>False</code>, при знаходженні — <code>True</code> та <code>break</code>. Якщо потрібен індекс, зберігають його в змінній.</p>
									<h3 class="text-h6 mt-4 mb-2">Пошук найбільшого та найменшого значення</h3>
									<p class="mb-4">У Python для цього є функції <code>max(list)</code> та <code>min(list)</code>. Алгоритм «вручну»: зчитати перший елемент і запам’ятати як max (або min), далі переглядати решту; якщо знайдено більше (менше) — оновити max (min). Після перегляду всіх елементів у змінній буде шукане значення.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Чи є значення в списку?
A = [10, 20, 30, 40, 50]
print(30 in A)   # True

# Пошук індексу за значенням (прапорець + цикл)
shukaty = 30
pos = -1
for i in range(len(A)):
    if A[i] == shukaty:
        pos = i
        break
print("Індекс:", pos)   # 2

# Сума парних елементів
A = [1, 2, 3, 4, 5, 6]
s = 0
for x in A:
    if x % 2 == 0:
        s += x
print("Сума парних:", s)   # 12

# max/min та пошук максимуму вручну
A = [5, 6, 4, 9, 12, 3]
print("Найбільше:", max(A))   # 12
mx = A[0]
for x in A[1:]:
    if x &gt; mx:
        mx = x
print("Максимум вручну:", mx)   # 12</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Алгоритми впорядкування масиву </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4">Дані можна впорядкувати за ознакою: зростанням, неспаданням, спаданням, незростанням. Правило (ознака) називають ключем впорядкування. Ефективність залежить від кількості порівнянь та обмінів.</p>
									<p class="mb-4"><strong>Метод вибору:</strong> з набору вибирають елемент з найменшим значенням і міняють місцями з першим; потім з решти (n−1) знову вибирають найменший і міняють з другим, і так далі. Для таблиці з n елементів достатньо n−1 таких кроків.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Ідея методу вибору (псевдокод): на кожному кроці
# знайти min у решті списку і поміняти з поточним першим
a = [12, 8, 10, 2, 6]
for i in range(len(a) - 1):
    i_min = i
    for j in range(i + 1, len(a)):
        if a[j] &lt; a[i_min]:
            i_min = j
    a[i], a[i_min] = a[i_min], a[i]
# Після циклу: a = [2, 6, 8, 10, 12]</code></pre>
									</v-sheet>
									<p class="mb-4">У Python для сортування списку використовують метод <code>sort()</code>. За замовчуванням — порядок зростання. Аргумент <code>reverse=True</code> дає спадання. Аргумент <code>key</code> дозволяє задати функцію порівняння (наприклад, <code>key=str.upper</code> для нечутливого до регістру сортування рядків). Елементи списку мають бути одного типу.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>A = ['a', 'b', 'd', 'f', 'n', 'v']
A.sort()                    # зростання
A.sort(reverse=True)        # спадання: ['v', 'n', 'f', 'd', 'b', 'a']
S = ['мама', 'тато', 'Оксана', 'Тарас']
S.sort(key=str.upper)       # за алфавітом без урахування регістру</code></pre>
									</v-sheet>
									<p class="mb-4">Для зміни порядку на зворотний — метод <code>reverse()</code>. Він змінює список на місці і не повертає новий.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>B = [3, 1, 4, 1, 5]
B.reverse()
print(B)   # [5, 1, 4, 1, 3]</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-title class="text-h6 font-weight-bold"> Складання і виконання алгоритму упорядкування </v-expansion-panel-title>
								<v-expansion-panel-text>
									<p class="mb-4"><strong>Сортування обміном (метод бульбашки):</strong> послідовно порівнюють і обмінюють сусідні елементи, якщо попередній більший за наступний. Великі значення «спливають» в кінець, менші переміщуються до початку.</p>
									<p class="mb-4">Використовують прапорець (наприклад, <code>prap</code>): якщо відбулася хоча б одна перестановка, <code>prap = True</code>; якщо за проход жодної — список вже впорядкований, цикл завершують.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code>def sort_bulb(arr):
    prap = True
    k = len(arr) - 1
    while prap:
        prap = False
        for i in range(k):
            if arr[i] &gt; arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                prap = True
        k = k - 1</code></pre>
									</v-sheet>
									<p class="mb-4">Для впорядкування за спаданням обмінюють місцями, коли лівий елемент <em>менший</em> за правий. Якщо є рівні елементи, алгоритм дає впорядкування за неспаданням.</p>
									<v-sheet color="grey-lighten-4" class="pa-4 mb-4 rounded">
										<pre><code># Приклад виклику
arr = [5, 10, 1, 4, 6]
sort_bulb(arr)
print(arr)   # [1, 4, 5, 6, 10]</code></pre>
									</v-sheet>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>

					<v-card-actions class="justify-center pa-4">
						<v-btn color="primary" to="/practice/arrays" prepend-icon="mdi-arrow-right"> Перейти до практики </v-btn>
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
