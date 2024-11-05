<template>
  <v-app-bar flat>
    <v-btn id="hamburger-activator" icon="mdi-menu"></v-btn>
    <v-menu activator="#hamburger-activator">
      <v-list>
        <v-list-item>
          <v-btn flat block> <app-link to="/" name="Home"></app-link></v-btn>
          <v-btn flat block>
            <app-link to="/recipes" name="Recipes"></app-link>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-app-bar-title>
      <v-icon icon="mdi-silverware-fork-knife"></v-icon>
      Meal planner
    </v-app-bar-title>
  </v-app-bar>
</template>
