<script lang="ts" setup>
//
</script>

<template>
  <v-layout>
    <v-container class="main">
      <main>
        <router-view />
      </main>
      <v-footer>
        <span class="text-light-green">My Meal Planner</span>
        &nbsp; - &copy; {{ new Date().getFullYear() }}
      </v-footer>
    </v-container>
  </v-layout>
</template>

<style scoped>
main {
  margin-top: 20px;
  min-height: 90vh;
}
</style>
