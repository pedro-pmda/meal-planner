<script setup lang="ts">
interface Props {
  to: String;
  name: String;
}
const { to, name } = defineProps<Props>();

// const props = defineProps({
//   to: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <router-link :to="to" class="text-light-blue">{{ name }} </router-link>
</template>

<style scoped></style>
