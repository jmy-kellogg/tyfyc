<script lang="ts">
import { defineComponent } from "vue";

import ManualForm from "./components/ManualForm.vue";
import FormattedDoc from "./components/FormattedDoc.vue";

export default defineComponent({
  name: "App",
  components: { ManualForm, FormattedDoc },
  data() {
    return { view: "form", smallDisplay: false };
  },
  mounted() {
    this.$store.dispatch("getStateFromLocalStorage");

    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
  computed: {
    showForm() {
      return this.view == "form";
    },
    showPreview() {
      return this.view == "preview";
    },
  },
  methods: {
    updateScreenSize() {
      this.smallDisplay = window.innerWidth < 1200;
    },
  },
});
</script>

<template>
  <div v-if="smallDisplay" class="flex">
    <button
      class="m-1 ml-0 w-24 rounded-t-lg p-3 hover:cursor-pointer hover:font-bold"
      :class="{
        'font-bold': showForm,
        'bg-white': showForm,
        'mb-0': showForm,
      }"
      @click="view = 'form'"
    >
      <h3>Input</h3>
    </button>
    <button
      class="m-1 ml-0 w-24 rounded-t-lg p-3 hover:cursor-pointer hover:font-bold"
      :class="{
        'font-bold': showPreview,
        'bg-white': showPreview,
        'mb-0': showPreview,
      }"
      @click="view = 'preview'"
    >
      <h3>Preview</h3>
    </button>
  </div>
  <div class="flex">
    <ManualForm v-if="showForm || !smallDisplay" />
    <FormattedDoc v-if="showPreview || !smallDisplay" />
  </div>
</template>

<style scoped></style>
