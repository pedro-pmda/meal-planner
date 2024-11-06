<script setup lang="ts">
import { Ref, ref } from "vue";
import CalendarCard from "./CalendarCard.vue";

interface Props {
  date: Date;
  days: number;
}

const { date, days } = withDefaults(defineProps<Props>(), {
  days: 7,
});

interface Card {
  date: Date;
  content: string;
}

const generateCards = (startDate: Date, numberOfDays: number): Card[] => {
  const cards: Card[] = [];
  const currentDate = new Date(startDate);
  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate.getTime());
    const content = `Card ${i + 1}`;

    cards.push({ date, content });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return cards;
};

const cards = ref<Card[]>(generateCards(date, days));

const dialogVisible: Ref<boolean> = ref(false);
const dateSelected: Ref<Date | null> = ref(null);

const recipeDialogOpen = (card: Card): void => {
  dateSelected.value = card.date;
  dialogVisible.value = true;
};

const recipeDialogClose = (): void => {
  dialogVisible.value = false;
  dateSelected.value = null;
};
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
          <calendar-card
            :card="card"
            @daySelected="recipeDialogOpen"
          ></calendar-card>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-dialog v-model="dialogVisible" scrollable>
    <v-card>
      <v-card-tiitle>Search for a recipe to add to this day</v-card-tiitle>
      <v-card-actions>
        <v-btn color="primary" block @click="recipeDialogClose"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
