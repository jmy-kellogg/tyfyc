<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

import ManualForm from "./components/ManualForm.vue";
import FormattedDoc from "./components/FormattedDoc.vue";

onMounted(() => {
  const store = useStore();
  store.dispatch("getStateFromLocalStorage");
});
</script>

<template>
  <div class="flex">
    <ManualForm />
    <FormattedDoc />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
