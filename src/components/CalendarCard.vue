<script setup lang="ts">
import { useFormatDate } from "@/composables/formatter";

interface Card {
  date: Date;
}

interface Props {
  card: Card;
}

const props = defineProps<Props>();
</script>

<template>
  <v-sheet class="d-flex justify space-between">
    <v-sheet class="ma-2 pa-2"></v-sheet>
    <h2 class="text-h2">{{ useFormatDate(card.date) }}</h2>
  </v-sheet>
</template>
