<script setup lang="ts">
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
          {{ card.content }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
