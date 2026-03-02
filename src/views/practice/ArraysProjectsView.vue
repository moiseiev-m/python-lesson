<script setup>
import { ref } from "vue";
import TaskChecker from "@/components/TaskChecker.vue";
import pdfArrays from "@/assets/pdf/arrays-task.pdf";
import pdfArraysAlgorithms from "@/assets/pdf/arrays-algorithms-task.pdf";

const tasks = ref([
  {
    header: "Список друзів",
    content: [
      "Збережіть імена кількох своїх друзів у списку з ім'ям <code>names</code>. Виведіть ім'я кожного друга, звернувшись до кожного елемента списку.",
    ],
    hints: [
      'Створіть список names з іменами друзів у квадратних дужках, наприклад: names = ["Анна", "Петро", "Марія"]',
      "Використайте цикл for для перебору елементів: for name in names:",
      "Усередині циклу виведіть кожне ім'я за допомогою print(name)",
    ],
  },
  {
    header: "Перший і останній",
    content: [
      'Створіть список з кількома кольорами (наприклад, <code>colors = ["червоний", "зелений", "синій"]</code>). Виведіть на екран перший елемент списку та останній, звертаючись до них за індексом.',
    ],
    hints: [
      "Перший елемент має індекс 0",
      "Останній елемент можна отримати через від'ємний індекс -1",
      "Використайте два виклики print() або один print з двома аргументами",
    ],
  },
  {
    header: "Опрацювання списку рядкових даних",
    content: [
      "Створити програму опрацювання списку рядкових даних.",
      "Поміркуйте над тим, яку інформацію можна було б зберігати у списку. Створіть список <code>nazva</code> з 6 рядкових величин: назв професій, видів спорту, назв країн, видів рослин тощо.",
      "Змінній <code>a</code> надайте значення третього елемента списку <code>nazva</code>. Виведіть значення <code>a</code> на екран.",
      "Виведіть на екран перші 3 елементи списку <code>nazva</code>.",
      "Програмно додайте до списку <code>nazva</code> ще два значення. Виведіть список на екран.",
      "Вставте на 3-тє місце в списку <code>nazva</code> елемент <code>Нове значення</code>.",
    ],
    hints: [
      'Створіть список nazva з 6 рядків, наприклад: nazva = ["лікар", "вчитель", "інженер", "художник", "музикант", "повар"]',
      "Третій елемент має індекс 2",
      "Перші 3 елементи — зріз: print(nazva[0:3]) або print(nazva[:3])",
      'Додати в кінець: nazva.append("значення1"), nazva.append("значення2")',
      "Вставити на позицію 2 (3-тє місце)",
    ],
  },
]);
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="mx-auto" elevation="2">
          <v-card-title class="text-h4 font-weight-bold text-center py-4"
            >Масиви</v-card-title
          >
          <v-card-text class="text-body-1">
            <p class="mb-4">
              <a href="https://ed-info.github.io/epython/" target="_blank"
                >ЄPython - програмувати просто! -
                https://ed-info.github.io/epython/</a
              >
            </p>
            <v-btn
              color="success mt-4 w-100 justify-start"
              :href="pdfArrays"
              target="_blank"
              prepend-icon="mdi-file"
              >Практичне завдання введення та виведення даних
            </v-btn>
            <v-btn
              color="success mt-4 w-100 justify-start"
              :href="pdfArraysAlgorithms"
              target="_blank"
              prepend-icon="mdi-file"
              >Практичне завдання алгоритми обробки даних
            </v-btn>
            <v-expansion-panels class="mt-4">
              <v-expansion-panel
                v-for="(task, index) in tasks"
                :key="index"
                :header="task.header"
                class="mb-2"
              >
                <v-expansion-panel-title class="text-h5 bg-green text-white">
                  Завдання {{ index + 1 }}.
                  {{ task.header }}</v-expansion-panel-title
                >
                <v-expansion-panel-text>
                  <div class="task-content">
                    <p
                      v-for="(paragraph, i) in task.content"
                      :key="i"
                      class="mb-4"
                      v-html="paragraph"
                    ></p>
                    <TaskChecker :hints="task.hints" />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
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
  font-family: "Consolas", "Monaco", monospace;
  font-size: 14px;
  line-height: 1.5;
}
code {
  color: rgb(var(--v-theme-on-surface));
}
</style>
