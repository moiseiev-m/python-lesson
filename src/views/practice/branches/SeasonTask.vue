<template>
  <v-container>
    <task-wrapper title="Визначення пори року">
      <template #description>
        <p>
          За номером місяця визначте пору року:
        </p>
        <ul>
          <li>12, 1, 2 - зима</li>
          <li>3, 4, 5 - весна</li>
          <li>6, 7, 8 - літо</li>
          <li>9, 10, 11 - осінь</li>
        </ul>
        <p>Вхідні дані:</p>
        <ul>
          <li>Номер місяця: 7</li>
        </ul>
      </template>

      <template #input>
        <single-input-task
          v-model="store.season.answer"
          :error="store.season.error"
          label="Пора року"
          @check="store.checkSeasonAnswer"
        />
      </template>

      <template #solution>
        <div v-if="store.season.showSolution">
          <p>Розв'язання:</p>
          <p>1. Місяць номер 7 (липень)</p>
          <p>2. Липень входить у діапазон місяців 6-8</p>
          <p>3. Цьому діапазону відповідає літо</p>
          <p>Відповідь: літо</p>
        </div>
      </template>
    </task-wrapper>
  </v-container>
</template>

<script setup>
import TaskWrapper from '@/components/TaskWrapper.vue';
import SingleInputTask from '@/components/SingleInputTask.vue';
import { useTasksStore } from '@/stores/tasks';

 