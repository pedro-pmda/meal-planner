<script setup lang="ts">
import { useFormatDate } from "@/composables/formatter";

const emits = defineEmits(["daySelected"]);

const addRecipeToDay = (card: Card): void => {
  emits("daySelected", card);
};

interface Card {
  date: Date;
}

interface Props {
  card: Card;
}
const { card } = defineProps<Props>();
</script>

<template>
  <v-sheet class="d-flex justify space-between">
    <v-sheet class="ma-2 pa-2"></v-sheet>
    <h2 class="text-h2">{{ useFormatDate(card.date) }}</h2>
  </v-sheet>
  <v-sheet class="ma-2 pa-2">
    <v-btn text @click="addRecipeToDay(card)" icon="mdi-plus"></v-btn>
  </v-sheet>
</template>
