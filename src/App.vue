<script lang="ts" setup></script>

<template>
  <v-app>
    <v-layout full-height>
      <app-bar></app-bar>
      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <router-view />
      </v-main>
    </v-layout>
    <v-footer class="d-flex align-center justify-center">
      <span class="text-light-green">My Meal Planner</span>
      <span>&nbsp; - &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
