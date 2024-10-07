<script setup lang="ts">
import { Recipe } from "@/types/spoonacular";
import { computed, onMounted, Ref, ref } from "vue";

interface RecipeList extends Recipe {
  date: Date;
}

// return a date in the future
const addDays = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

// generate some mock form now
const recipes = [
  { id: 1, title: "test1", date: addDays(1) },
  { id: 2, title: "test2", date: addDays(1) },
  { id: 3, title: "test3", date: addDays(-1) },
];

const openPreview = (recipe: { title: string }): void => {
  console.log(`opening recipe ${recipe.title}`);
};

const pastRecipes = computed(
  () =>
    recipes.filter((recipe) => {
      const date = new Date(recipe.date);
      return date < new Date();
    }) as RecipeList[]
);

const futureRecipes = computed(
  () =>
    recipes.filter((recipe) => {
      const date = new Date(recipe.date);
      return date >= new Date();
    }) as RecipeList[]
);

const tab: Ref<string> = ref("upcoming");

onMounted(() => {
  if (futureRecipes.value.length === 0) {
    tab.value = "past";
  }
});
</script>
<template>
  <div v-if="pastRecipes.length === 0 && futureRecipes.length === 0">
    No recipes yet. Add some to your planner!
  </div>
  <div>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab value="past" :disabled="pastRecipes.length === 0">Past</v-tab>
      <v-tab value="upcoming" :disable="futureRecipes.length == 0"
        >upcoming</v-tab
      >
    </v-tabs>
    <v-window v-model="tab">
      <v-windows-item key="past" value="past">
        <RecipeTable
          :recipes="pastRecipes"
          title="Past recipes"
          @openPreview="openPreview"
        >
        </RecipeTable>
      </v-windows-item>
      <v-windows-item key="upcoming" value="upcomin">
        <RecipeTable
          :recipes="futureRecipes"
          title="Upcoming recipes"
          @openPreview="openPreview"
        >
        </RecipeTable>
      </v-windows-item>
    </v-window>
  </div>
</template>
