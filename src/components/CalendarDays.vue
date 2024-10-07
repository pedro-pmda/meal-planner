<script setup lang="ts">
import CalendarCard from "./CalendarCard.vue";

interface Card {
  date: Date;
  content: string;
}
const cards: Card[] = [];
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Upcoming days</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="card in cards" :key="card.date.toString()">
        <td class="py-4">
          <calendar-card :card="card"></calendar-card>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
